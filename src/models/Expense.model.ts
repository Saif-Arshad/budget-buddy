import mongoose from 'mongoose';

const expenses = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        budget: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Budget'
        }
    },
    { timestamps: true }
);

const Expense = mongoose.models.Expense || mongoose.model('Expense', expenses);
export default Expense;
