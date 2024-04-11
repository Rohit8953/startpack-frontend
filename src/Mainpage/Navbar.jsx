import React from "react";
import { Link } from 'react-scroll';
import {useNavigate} from 'react-router-dom'



const Navbar = () => {

  const navigate=useNavigate();
  const clickHandler4=()=>{
       navigate('/');
   }

  return (
    <div className="flex flex-row bg-slate-300 justify-around h-[5rem] items-center">
      <div onClick={clickHandler4} className=" cursor-pointer">
        Logo
      </div>
      <div className="flex flex-row gap-5">
        <Link activeClass="active" spy={false} smooth={true} to="doctor">
          <p className=" cursor-pointer ">Find doctor</p>
        </Link>
        <Link activeClass="active" spy={false} smooth={true} to="medicine">
          <p className=" cursor-pointer ">Medicine</p>
        </Link>
        <Link activeClass="active" spy={false} smooth={true} to="tests">
          <p className=" cursor-pointer ">Lab test</p>
        </Link>
        <Link activeClass="active" spy={false} smooth={true} to="surgery">
          <p className=" cursor-pointer ">Surgery</p>
        </Link>
        <Link activeClass="active" spy={false} smooth={true} to="patient">
          <p className=" cursor-pointer ">Patient details</p>
        </Link>
      </div>
      <div>
        login signin
      </div>
    </div>
  );
};

export default Navbar;
