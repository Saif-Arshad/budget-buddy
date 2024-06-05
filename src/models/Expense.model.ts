import mongoose from 'mongoose';


const expenses = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true,
            unique:true
        },
        amount:{
            type:Number,
            required:true
        },


        
    },
    { timestamps: true }
)

const Expense = mongoose.models.Expense || mongoose.model('Expense', expenses);

export default Expense;