import { NavLink } from "react-router-dom";
import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosSettings, IoMdAnalytics } from "react-icons/io";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { RiMenuUnfold3Line } from "react-icons/ri";

import { useState } from "react";

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = [
        {
            name : "Dashboard",
            path : "/",
            icon : <MdDashboard />,
        },
        {
            name : "Products",
            path : "/products",
            icon : <AiFillProduct />,
        },
        {
            name : "Orders",
            path : "/orders",
            icon : <MdOutlineProductionQuantityLimits />,
        },
        {
            name : "Customers",
            path : "/customers",
            icon : <RiCustomerService2Line />,
        },
        {
            name : "Analytics",
            path : "/analytics",
            icon : <IoMdAnalytics />,
        },
        {
            name : "Setting",
            path : "/setting",
            icon : <IoIosSettings />,
        }
    ]
    return(
        <>
        <button className={`fixed top-4 ${isOpen ? "left-[90%]" : "left-4"} transitoin-all duration-300 ease-in-out z-50 md:hidden cursor-pointer bg-slate-800 p-3 rounded-md text-white hover:bg-slate-700`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiMenuUnfold4Line /> : <RiMenuUnfold3Line />}
        </button>
        {isOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}

        <aside
        className={`h-screen w-[89%] md:w-64 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-slate-900 p-6 text-white z-50`}
        >
            <div className="text-white font-bold text-3xl">matjari</div>
            <ul className="mt-8 space-y-2">
                {navLinks.map((link) => 
                    <li key={link.path}>
                        <NavLink to={link.path} className={({isActive}) => `block py-2 px-3 flex gap-4 items-center rounded-md ${isActive ? "bg-green-400" : "bg-slate-800 hover:bg-slate-700"}`}>
                            {link.icon} {link.name}
                        </NavLink>
                    </li>
                )}
                
            </ul>
        </aside>
        </>
    )
}
export default Sidebar;