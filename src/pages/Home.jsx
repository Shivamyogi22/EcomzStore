import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = ({darkMode}) => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            // console.log(data);
            setPosts(data);
        } catch (error) {
            console.log("Error ay rhi h yr");
            console.log(error.message);
            setPosts([]);
        }
        setLoading(false);
    }
   

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="mt-12">
            {loading ? (
                <div className="flex flex-col items-center justify-center h-[100vh] max-w-full ">
                    <Spinner />
                </div>
            ) : posts.length > 0 ? (
                <div className= {`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-8 min-h-[80vh]  ${darkMode ? "dark" : "light"}`} >
                    {posts.map((post) => (
                        <Product darkMode={darkMode} key={posts.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center"> 
                    <p>NO DATA FOUND</p>{" "}
                </div>
            )}
        </div>
    );
};

export default Home;
