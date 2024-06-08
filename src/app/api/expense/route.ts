import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Expense from "@/models/Expense.model";
import Budget from "@/models/Budget.model";

export async function GET() {
    await connectDB();
    try {
        const expenses = await Expense.find().populate("budget");
        return NextResponse.json({ expenses });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}

export async function DELETE(request: NextRequest) {
    const data = await request.json();
    console.log(data);
    await connectDB();
    try {
        const expense = await Expense.findByIdAndDelete(data.id);
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

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log(data);
    await connectDB();
    try {
        const expense = new Expense({
            title: data.title,
            amount: data.amount,
            budget: data.budgetId
        });
        await expense.save();
        if (data.budgetId) {
            await Budget.updateOne(
                { _id: data.budgetId },
                { $push: { expense: expense._id } }
            );
        }
        return NextResponse.json({
            message: "Expense Added",
            added: true,
            expense
        });
    } catch (error) {
        return NextResponse.json({
            message: "There are some errors in adding expense",
            error: error,
        });
    }
}
