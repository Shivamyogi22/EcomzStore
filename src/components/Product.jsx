import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post, darkMode }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success(`Item added to cart`);
    };
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    };

    
    return (
        <div className= {`flex flex-col items-center  justify-between hover:scale-110 transition duration-200 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 mt-10 gap-3 ml-5 rounded-xl ${darkMode ? 'darker' : 'light'}`}>
            <div>
                <p className="text-gray-700 font-bold text-xl text-left  truncate w-60 mt-1 ">
                {post.title.split(" ").slice(0, 14).join(" ") + " ...."}
                </p>
            </div>

            <div className="w-50 text-gray-400 font-normal text-[16px] text-left">
                {" "}
                {post.description.split(" ").slice(0, 15).join(" ") + " ...."}
            </div>

            <div className="w-[200px] mix-blend-">
                <img className="h-full w-full" src={post.image} alt="prod" />
            </div>

            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold"> $ {post.price} </p>
                </div>

                
                    {cart.some((p) => p.id === post.id) ? (
                        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-2 px-9 uppercase hover:bg-gray-700
                        hover:text-white transition duration-100 ease-in"  
                        onClick={removeFromCart}>Remove Item</button>
                    ) : (
                        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-2 px-9 uppercase hover:bg-gray-700
                        hover:text-white transition duration-100 ease-in"  
                        onClick={addToCart}>Add to Cart</button>
                    )}
               
            </div>

        </div>
    );
};

export default Product;
