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
import toast from 'react-hot-toast';
function DeleteButton(props:any) {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const deleting = useSelector((item:any)=>item.deleteBudget)
    const {id} = props
    const deleteHandler = ()=>{
        dispatch(deleteBudget(id))
        toast.success('Budget Deleted SucessFully')
    }
    return (
        <AlertDialog>
  <AlertDialogTrigger>
  <button className="bg-red-600 hover:bg-red-500 transition-all text-white  items-center gap-1 flex px-3 py-2 font-semibold rounded-lg">

        <MdOutlineDelete size={17}  />Delete
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
