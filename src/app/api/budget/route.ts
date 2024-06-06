import { NextResponse,NextRequest} from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Budget from "@/models/Budget.model";


export async function POST (request : NextRequest){
    const data = await request.json()
    console.log(data)
    connectDB()
    try{
        const newBudget = await Budget.create({
            title: data.title,
            amount:data.amount,
            currency:data.currency,
           owner:data.userEmail
    })
    
    await newBudget.save()
        return NextResponse.json({
            message:"Budegt Created Sucessfully",
            added: true,
        })
    }
    catch(e){
        return NextResponse.json({
            Error:e
        })

    }
}
