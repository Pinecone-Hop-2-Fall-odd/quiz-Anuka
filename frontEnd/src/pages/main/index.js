"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-[black] h-[100vh] w-[100vw] flex justify-center relative">
      <img src="/quiz-bg copy.jpeg" className="fixed z-0 h-[950px] w-[100%]" />
      <div className="w-[50%] h-[100%] bg-no-repeat flex justify-center items-center flex-col ml-[17%] mt-[8%] z-[1] ">
        <img
          src="/Crime-qu-zzs-12-1-2023.png"
          className="w-[60%] h-[20%]  mt-[0%] mr-[35%]"
        ></img>{" "}
        <img
          src="/Log-in-11-24-2023.png"
          className="w-[10%] h-[5%] mr-[35%] mb-[2%] "
        ></img>
        <div className="w-[40%] h-[30%] flex flex-col rounded-[10px] mr-[25%] ">
          <p className="text-red-900 ">Email:</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Email"
            type="text"
          ></input>
          <p className="text-red-900">Password:</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Password"
            type="text"
          ></input>

          <img
            src="/Log-in-11-24-2023.png"
            className="w-[20%]  active:bg-gray-700 rounded-[8px] ml-[58%] mt-[5%]" 
            onClick={() => router.push("/open")}
          ></img>
        </div>
        <div className="mt-[25%] mb-[15%] text-[white] mr-[35%] text-xs">
          If you don't have an account.
          <Link href="signup">
            <button className="text-[red] active:bg-gray-700">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
