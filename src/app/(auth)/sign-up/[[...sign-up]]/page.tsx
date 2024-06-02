import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import {ASSETS} from '../../../../../public/Assets'
export default function Page() {
  return (
  
    <div className="min-h-screen min-w-screen flex flex-row ">
            <div className="hidden md:w-6/12 md:flex items-center justify-center min-h-screen relative">

<Image
src={ASSETS.login}
alt="signIn Now"
layout="fill"
/>
      </div>
      <div className="w-full md:w-6/12 flex items-center justify-center min-h-screen">
      <SignUp path="/sign-up" />;
      </div>
</div>
  )
  
  

}