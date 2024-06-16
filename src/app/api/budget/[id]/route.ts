import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Budget from "@/models/Budget.model";
import Expense from "@/models/Expense.model";

export async function GET(req: NextRequest) {
    const { pathname } = new URL(req.url);
    const slug = pathname.split('/').pop();
    await connectDB();
    try {
        const budget = await Budget.find({ owner: slug }).populate('expense');
        return NextResponse.json({ budget });
    } catch (error) {
        return NextResponse.json({
            error: error,
            cause: "user not found"
        });
    }
}

export async function DELETE(request: NextRequest) {
    const { pathname } = new URL(request.url);
    const slug = pathname.split('/').pop();
    await connectDB();

    try {
        const deleteItem = await Budget.findByIdAndDelete(slug);
        if (deleteItem) {
            await Expense.deleteMany({ _id: { $in: deleteItem.expense } });
        }
        return NextResponse.json({
            deleteItem,
            deleted: "successful"
        });
    } catch (e) {
        return NextResponse.json({
            error: e,
        });
    }
}
