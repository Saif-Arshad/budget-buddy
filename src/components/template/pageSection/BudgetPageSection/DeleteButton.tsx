import React from 'react'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux'
import { deleteBudget } from '@/store/features/DeleteBudget.Slice';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
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
        <AlertDialog>
  <AlertDialogTrigger>
  <button >
        <MdOutlineDelete size={30} color='blue' />
     </button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your budget
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction
       onClick={deleteHandler}
      >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
       
  )
}

export default DeleteButton
