import React, { useEffect, useState } from "react";
import style from "./Task.module.css";
import img1 from "../assessts/pattern-divider-desktop.svg";
import img2 from "../assessts/icon-dice.svg";
import axios from "axios";
export default function Task() {
  const [stat, setStat] = useState("");
   async function getSata() {
    let {data} = await axios.get('https://api.adviceslip.com/advice')
    let res= await data.slip
    // console.log(res);
    setStat(res)
    
   
  }
  useEffect(() => {
    getSata();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-12 position-relative ${style.box}`}>
          <p className="mt-4">Active #{stat.id}</p>
          <h3 className=" px-4 text-center my-5">"{stat.advice}"</h3>
          <img src={img1} alt="" className={`mb-5 ${style.im1}`} />
          <button className="position-absolute top-100 start-50 translate-middle ">
            <img src={img2} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
