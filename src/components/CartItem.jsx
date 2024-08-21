import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed successfully");
    };

    return (
        <div className="flex gap-4 border-b-4 py-2 m-4 max-w-[650px]">
            <div className="md:max-w-[150px] max-w-[75px] p-2">
                <img 
                src={item.image} alt="product" />
            </div>

            <div className="flex flex-col max-w-xl justify-evenly" >
                <div>
                    <h1 className="text-gray-700 font-bold text-xl text-left w-90 mt-1">
                        {item.title}
                    </h1>
                    <h1 className="w-50 text-gray-400 font-normal text-[16px] text-left">
                        {item.description.split(" ").slice(0, 15).join(" ") + "..."} 
                    </h1>
                </div>

                <div className="flex gap-x-48 max-w-[650px] justify-between">
                <p className="text-green-600 font-semibold text-2xl">${item.price} </p>
                <div className="text-4xl"
                onClick={removeFromCart}>
                    <FcDeleteDatabase />
                </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
