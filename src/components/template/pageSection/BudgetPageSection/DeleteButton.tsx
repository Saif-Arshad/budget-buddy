import React from 'react'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux'
import { deleteBudget } from '@/store/features/DeleteBudget.Slice';
function DeleteButton(props:any) {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const deleting = useSelector((item:any)=>item.deleteBudget)
    console.log(deleting)
    const {id} = props
    console.log(id)
    const deleteHandler = ()=>{
        dispatch(deleteBudget(id))
    }
    return (
        <button onClick={deleteHandler} >
        <MdOutlineDelete size={30} color='blue' />
     </button>
  )
}

export default DeleteButton
