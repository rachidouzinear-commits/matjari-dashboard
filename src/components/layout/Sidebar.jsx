import { NavLink } from "react-router-dom";

function Sidebar(){
    const navLinks = [
        {
            name : "Dashboard",
            path : "/",
        },
        {
            name : "Products",
            path : "/products",
        },
        {
            name : "Orders",
            path : "/orders",
        },
        {
            name : "Customers",
            path : "/customers",
        },
        {
            name : "Analytics",
            path : "/analytics",
        },
        {
            name : "Setting",
            path : "/setting",
        }
    ]
    return(
        <aside className="h-screen w-64 bg-slate-900 p-6 text-white">
            <div className="text-white font-bold text-3xl">matjari</div>
            <ul className="mt-8 space-y-2">
                {navLinks.map((link) => 
                    <li key={link.path}>
                        <NavLink to={link.path} className={({isActive}) => `block py-2 px-3 rounded-md ${isActive ? "bg-green-400" : "bg-slate-800 hover:bg-slate-700"}`}>
                            {link.name}
                        </NavLink>
                    </li>
                )}
                
            </ul>
        </aside>
    )
}
export default Sidebar;