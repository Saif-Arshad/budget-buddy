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


// update endpint 


export async function PATCH(req:NextRequest){
        const data = await req.json()
        console.log(data)
        connectDB()
        try{
            const updatedBudget = await Budget.findOneAndUpdate({_id:data.id},{
                title:data.title,
                amount:data.amount,
            })
            console.log(updatedBudget)
            await updatedBudget.save()
            return NextResponse.json({
                message:"Budget Updated Sucessfully",
                updated:true
            })
        }
        catch(e){
            return NextResponse.json({
                Error:e
            })
        }

    }
