import mongoose from 'mongoose';


const budget = new mongoose.Schema({
        title:{
            type: 'string',
            required: true
        },
        amount: {
            type: 'number',
            required: true
        },
        slug:{
            type:String,
            required:true,
            unique:true
        },
        expense:
        [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Expense',
        }],
        owner:{
            type:String,
            required:true
        }
      
    },
    {timestamps:true}
)
const Budget = mongoose.models.Budget || mongoose.model('Budget',budget);
export default Budget;