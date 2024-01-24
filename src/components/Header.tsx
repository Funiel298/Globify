'use client'
import { CgMenuGridR } from "react-icons/cg";

export default function Header(){
    return(
        <div className="absolute z-10 text-start p-10 text-4xl ">
            <CgMenuGridR className='cursor-pointer'  />
        </div>
    )
}