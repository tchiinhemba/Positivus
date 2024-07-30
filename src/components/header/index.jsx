import React from "react";
import logoBlack from '../../assets/svg/logo/logo-black.svg'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="container mx-auto py-4 flex ">
            <div className="basis-1/4">
                <img src={logoBlack} alt="" />
            </div>
            <div className="flex">
                <div className="basis-1/2">
                    <ul className="flex">
                        <li className="">
                            <Link>About Us</Link>
                        </li>
                        <li className="">
                            <Link>Services</Link>
                        </li>
                        <li className="">
                            <Link>Use Cases</Link>
                        </li>
                        <li className="">
                            <Link>Pricing</Link>
                        </li>
                        <li className="">
                            <Link>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/4">
                    <button className="border-solid border-2 border-black rounded p-3">Request a quote</button>
                </div>
            </div>
        </div>
    )
}


export default Header;