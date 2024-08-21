import React from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

const Category = ({ item }) => {
    // const { productCart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const naviagte = useNavigate(); 

    const clickHandler = () => {
        dispatch(emptyCart());
        naviagte("/")
        // dispatch(remove(item.id));

    };

    return (
        <div className="flex flex-col justify-center items-center text-black text-center h-[100vh] max-w-full mx-auto bg-green-800">
            <p className="font-bold text-4xl text-center">Thanks for Shopping</p>
            <br />
            <span className="text-gray-900 font-semibold text-xl" >Your order has been placed succesfully</span> <br />
            <button className="text-black  font-semibold text-xl bg-green-500 p-2 px-3 rounded-full" onClick={clickHandler}>Shop Again</button>
        </div>
    );
};

export default Category;
