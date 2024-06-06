import mongoose from 'mongoose';


const budget = new mongoose.Schema({
        title:{
            type: 'string',
            required: true,
        },
        amount: {
            type: 'number',
            required: true
        },
        currency:{
            type:String,
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