import * as yup from 'yup'


export const ExpenseYep = yup.object().shape({
    title:yup.string().required("Expense title is required"),
    amount:yup.number().required("Expense amount is Required"),
})