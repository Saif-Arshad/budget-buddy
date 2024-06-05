import * as yup from 'yup'


export const BudgetYep = yup.object().shape({
    title:yup.string().required("Budget title is required"),
    amount:yup.number().required("Budget amount is Required"),
})