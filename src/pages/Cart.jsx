import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react"; 


const Cart = ({darkMode}) => {
    const { cart } = useSelector((state) => state);
    console.log("Printing Cart");
    console.log(cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

   

    return (
        <div className="mt-16 min-h-screen" >
            {cart.length > 0 ? (
                <div className="flex flex-col sm:flex-row max-w-6xl mx-auto">
                    <div>
                        {cart.map((item, index) => {
                            return (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    itemIndex={index}
                                />
                            );
                        })}
                    </div>
                    <div className="flex flex-col w-[350px] max-w-[550px] md:h-[530px] p-10 m-5 md:justify-between">
                        <div className="flex flex-col gap-2 ">
                            <div className="text-green-600 font-semibold uppercase">
                                Your Cart
                            </div>
                            <div className="text-green-600 font-semibold text-4xl">
                                {" "}
                                Summary{" "}
                            </div>
                            <p>
                                <span className="text-gray-600 font-bold">
                                    Total Items: {cart.length}{" "}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">
                                    Total Amount:
                                <span className="text-black font-bold">
                                    ${totalAmount}
                                </span>
                            </p>
                            <Link to={"/exit"}>
                            <button 
                           className="bg-green-600 py-2 p-4 w-full text-white font-bold rounded-full">CheckOut Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-[100vh] max-w-full ">
                    <h1 className={`font-bold text-xl ${darkMode ? 'light' :'light'}`} >Cart Empty</h1>
                    <Link to={"/"}>
                        <button className="bg-green-600 py-2 p-4 w-[220px] text-white font-bold rounded-full">Shop Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
