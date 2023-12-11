"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const onClickSignin = async () => {
    if(age >= 16) {
      const { data } = await axios.post("http://localhost:2015/user", {
        age: age,
        name: name,
        email: email,
      });
    } else {
      alert("nas buruu baina")
    }
  };
  return (
    <div className="bg-[black] h-[100vh] w-[100vw] flex justify-center relative">
      <img src="/quiz-bg copy.jpeg" className="fixed z-0 h-[950px] w-[100%]" />
      <div className="w-[50%] h-[100%] bg-no-repeat flex justify-center items-center flex-col ml-[17%] mt-[8%] z-[1] gap-[3%] ">
        <img
          src="/Crime-qu-zzs-12-1-2023.png"
          className="w-[40%] h-[15%]  mt-[-39%] mr-[35%]"
        ></img>{" "}
        <div className="w-[40%] h-[30%] flex flex-col rounded-[10px] mr-[25%] gap-[20px] ">
          <p className="text-red-900 mb-[-5%]">Username:</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Username"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className="text-red-900 mb-[-5%]">Email or Phone:</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Email or Phone"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="text-red-900 mb-[-5%]">How Old Are You??</p>
          <input
            className="w-[75%] h-[10%] rounded-[5px]"
            placeholder="Huh?"
            type="text"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
          <Link href={age >= 16 ? "next" : ""} onClick={onClickSignin}>
            <img
              src="/Next-11-27-2023.png"
              className="w-[20%]  active:bg-gray-700 rounded-[8px] ml-[58%] mt-[5%]"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
