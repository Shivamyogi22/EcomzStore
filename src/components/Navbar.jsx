    import { FaCartShopping } from "react-icons/fa6";
    import { useSelector } from "react-redux";
    import { NavLink } from "react-router-dom";
    import { BsSun, BsMoon } from "react-icons/bs";


    const Navbar = ({ darkMode, toggleDarkMode }) => {
        const { cart } = useSelector((state) => state);

        
        return (
            <div >
                <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                    <NavLink to="/">
                        <div className="ml-5">
                            <img src="logo.png" alt="logo cart" className="h-14" />
                        </div>
                    </NavLink>

                    <div className="flex items-center font-medium  text-xl text-slate-100 mr-5 space-x-8">
                        <NavLink to="/">
                            <p>Home</p>
                        </NavLink>

                        {/* <NavLink to="/category">
                            <p>Category</p>
                        </NavLink> */}

                        <NavLink to="/cart">
                            <div className="relative">
                                <FaCartShopping className="text-2xl" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                                        {cart.length}{" "}
                                    </span>
                                )}
                            </div>
                        </NavLink>
                        <button
                            onClick={toggleDarkMode}
                            className="focus:outline-none"
                        >
                            {darkMode ? <BsSun /> : <BsMoon />}
                        </button>
                    </div>
                </nav>
            </div>
        );
    };

    export default Navbar;
