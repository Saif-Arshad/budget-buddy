import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Budget from "@/models/Budget.model";

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log(data);
    await connectDB();
    try {
        const newBudget = new Budget({
            title: data.title,
            amount: data.amount,
            currency: data.currency,
            owner: data.userEmail
        });
        await newBudget.save();
        return NextResponse.json({
            message: "Budget Created Successfully",
            added: true,
        });
    } catch (e) {
        return NextResponse.json({
            error: e
        });
    }
}

export async function PATCH(req: NextRequest) {
    const data = await req.json();
    console.log(data);
    await connectDB();
    try {
        const updatedBudget = await Budget.findOneAndUpdate(
            { _id: data.id },
            {
                title: data.title,
                amount: data.amount,
            },
            { new: true }
        );
        return NextResponse.json({
            message: "Budget Updated Successfully",
            updated: true,
            budget: updatedBudget
        });
    } catch (e) {
        return NextResponse.json({
            error: e
        });
    }
}
