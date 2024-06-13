import { SignUp } from "@clerk/nextjs";
import { ASSETS } from '../../../../public/Assets';
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-row overflow-hidden">
      <div
        className="hidden md:flex w-6/12 h-screen relative bg-cover bg-center items-end justify-end" 
        style={{ backgroundImage: `url(${ASSETS.login})` }}
      >
        <div className="  bg-[#2222220f] bg-opacity-5 backdrop-blur-md flex flex-col h-2/4 w-full">
        <div className="w-full flex m-3">
    <div className="bg-white rounded-3xl">

        <Image
            src={ASSETS.logo}
            alt="Logo"
            height={150}
            width={150}
            />
            </div>
            </div>
            <div className="w-full flex items-center justify-center">
    <div className="w-11/12 flex flex-col mt-3">
          <h1 className="text-white text-2xl font-bold">Sign Up for Budget Buddy</h1>
        <p className="text-white text-lg mt-4">
        Take the first step towards mastering your finances. Sign up now and gain access to insightful expense tracking
        </p>
    </div>
            </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 flex items-center justify-center min-h-screen">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
}
