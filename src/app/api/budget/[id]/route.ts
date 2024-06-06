import { NextResponse,NextRequest} from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Budget from "@/models/Budget.model";


export async function GET(req:NextRequest) {
    const {pathname } = new URL(req.url);
  const slug = pathname.split('/').pop(); 
  console.log(slug,pathname)
    await connectDB();
    try{
    const budget = await Budget.find(
        {
            owner: slug
        }
    );
    return NextResponse.json({ budget });
    }
    catch(error){
        return NextResponse.json({ 
            error: error,
            cause:"user not find"
         });
    
    }
}