"use client";
import { Separator } from "@/components/ui/separator"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useCurrentUser from "@/customHooks/useCurrentUser";
import { IoSearchOutline } from "react-icons/io5";
import { getBudget } from "@/store/features/GetBudget.Slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
function SearchInput() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("Search");
  const { userEmail } = useCurrentUser();
  const [data, setData] = useState<any>([]);
  console.log("🚀 ~ SearchInput ~ data:", data);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { allBudget } = useSelector((state: any) => state.getBudget);

  useEffect(() => {
    setData(allBudget);
  }, [allBudget]);

  const budget = useSelector((state: any) => state.budget);
  const { deletebudget } = useSelector((state: any) => state.deleteBudget);
  const newBudget = useSelector((state: any) => state.updateBudget);
  const { deleteExpense } = useSelector((state: any) => state.deleteExpense);
  const { expense } = useSelector((state: any) => state.addExpense);

  console.log(userEmail);

  useEffect(() => {
    if (userEmail) {
      dispatch(getBudget(userEmail));
    }
  }, [userEmail, budget, deletebudget, newBudget, deleteExpense, expense]);

  const [search, setSearch] = useState("");
  console.log("🚀 ~ SearchInput ~ search:", search);

  const filtereditems = data?.budget?.filter((item: any) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  console.log("🚀 ~ SearchInput ~ filtereditems:", filtereditems);
  const SearchLength = search?.length;
  console.log("🚀 ~ SearchInput ~ SearchLength:", SearchLength);
  const searchHandler = (e: any) => {
    e.preventDefault();
    if(search==""){
      toast.error("Enter Something to search")
      return
    }
    router.push(`/dashboard/search/${search}`);
    setSearchText("Redirecting...");
    setSearch("");

    setTimeout(() => {
      setSearchText("Search");
    }, 1500);
  };
  const searchLink = () => {
    setSearch("");
    setSearchText("Redirecting...");
    setTimeout(() => {
      setSearchText("Search");
    }, 1500);
  };
  return (
    <>
      <div className="relative">
        <form
          onSubmit={searchHandler}
          className=" px-6 py-1 rounded-full bg-gray-50 border flex focus-within:border-gray-300"
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
            name="topic"
          />
          <button
            type="submit"
            className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#167070] text-white font-medium tracking-wide border-transparent py-1 h-[38px] -mr-3"
          >
            {searchText}
          </button>
        </form>
        <div
          className={`${
            SearchLength > 0 ? "block top-14" : "hidden"
          } bg-slate-50 z-50 transition-all rounded-md py-5 min-w-64 max-h-64 overflow-x-hidden overflow-y-auto absolute `}
        >
          {!filtereditems || filtereditems?.length == 0 ? (
            <p className="text-center font-semibold">No Data Found</p>
          ) : (
            filtereditems?.map((item: any, index: number) => (
              <Link
                href={`/dashboard/budget/${item._id}`}
                key={index}
                onClick={searchLink}
              >
                <div className=" px-5 p-2 hover:bg-slate-100  cursor-pointer ">
              <div className="flex flex-col w-full ">
                <span className=" flex items-center  gap-x-3 mb-2 ">
                <IoSearchOutline size={18} />
                  <p className="capitalize font-semibold">{item.title}</p>
                 </span>
                  <Separator />

              </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SearchInput;
