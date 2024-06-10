import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Expense from "@/models/Expense.model";
import Budget from "@/models/Budget.model";

export async function GET(req: NextRequest) {
    const { pathname } = new URL(req.url);
    const slug = pathname.split('/').pop();
    console.log(slug, pathname);
    await connectDB();
    try {
        const expenses = await Expense.find({
            budget: slug
        }).populate("budget");
        console.log(expenses)
        return NextResponse.json({ expenses });
    } catch (error) {
        return NextResponse.json({ error: error });

    }
}
export async function DELETE(req: NextRequest) {
    const { pathname } = new URL(req.url);
    const slug = pathname.split('/').pop();
    console.log(slug, pathname);
    await connectDB();
    try {
        const expense = await Expense.findByIdAndDelete(slug);
        if (expense && expense.budget) {
            await Budget.updateOne(
                { _id: expense.budget },
                { $pull: { expense: expense._id } }
            );
        }
        return NextResponse.json({ message: "Expense Deleted" });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}

