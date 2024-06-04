import { NextResponse,NextRequest} from "next/server";
import connectDB from "@/database/MongoDbConnection";
import Expense from "@/models/Expense.model";

export async function GET() {
    await connectDB();
    try{
    const expenses = await Expense.find();
    return NextResponse.json({ expenses });
    }
    catch(error){
        return NextResponse.json({ error: error });
    
    }
}
export async function DELETE(request: NextRequest) {
    const data = await request.json();
    console.log(data);
    await connectDB();
    try {
        await Expense.deleteOne({ 
            _id: data.id 
        });
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
      const ExpenseModel = await Expense.create({
        title: data.title,
        amount: data.amount,
      });
      await ExpenseModel.save();
      return NextResponse.json({
        message: "Expense Added",
        added: true,
      });
    } catch (error) {
      return NextResponse.json({
        message: "There are some error in adding expense",
        error: error,
      });
    }
  }  

  export async function PATCH (request : NextRequest){
    const data = await request.json();
    console.log(data);
    
    await connectDB();
    
    try{
        const expenseToUpdate = await Expense.findById(data.id);
        
        if(!expenseToUpdate) {
            return NextResponse.json({
                message: "Expense not found",
            });
        }
        
        if(data.title || data.amount) {
            expenseToUpdate.title = data.title;
            expenseToUpdate.amount = data.amount;

        }
        
        await expenseToUpdate.save();
        
        return NextResponse.json({
            message: "Expense Updated",
            expense: expenseToUpdate,
        });
    } catch(error) {
        return NextResponse.json({
            message: "There are some error in updating expense",
            error: error,
        });
    }
}