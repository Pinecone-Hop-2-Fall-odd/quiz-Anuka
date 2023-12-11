"use client"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"

export default function Signup() {
  const [password, setPassword]= useState([])
  const [checkpassword, setcheckPassword] = useState([])
  const onClickSignin = async()=>{
    const{data} =await axios.post("http://localhost:2015/user",{
      body:{password:password, checkpassword:checkpassword}
    })
  }
    return(
        <div className="bg-[black] h-[100vh] w-[100vw] flex justify-center relative">
      <img src="/quiz-bg copy.jpeg" className="fixed z-0 h-[950px] w-[100%]" />
      <div className="w-[50%] h-[100%] bg-no-repeat flex justify-center items-center flex-col ml-[17%] mt-[8%] z-[1] gap-[2%] ">
        <img
          src="/Crime-Qu-zzs-12-1-2023.png"
          className="w-[40%] h-[15%]  mt-[-35%] mr-[35%]"
        ></img>{" "}
        <div className="w-[40%] h-[30%] flex flex-col rounded-[10px] mr-[25%] gap-[20px] ">
          <p className="text-red-900 mb-[-5%]">Password:</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className="text-red-900 mb-[-5%]">Check password:</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Just In Case"
            type="text"
            onChange={(e) => setcheckPassword(e.target.value)}
          ></input>
          <Link href="main">
          <img src="/Next-11-27-2023.png" className="w-[20%]  active:bg-gray-700 rounded-[8px] ml-[58%] mt-[5%]"></img>
          </Link>
        </div>
      </div>
    </div>
    )
  }