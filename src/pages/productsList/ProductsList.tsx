import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Product from "../../components/Product";

// Api call
import { getProductsCount, getProductsList } from "../../api/getProductsList";

// TODO: skeleton loaders 

const ProductsList = () => {
    const [offset, setOffset] = useState(0);
    const productListQuery = useQuery(['productListQuery', offset], () => getProductsList(offset));
    const productListCountQuery = useQuery(['productListCountQuery'], getProductsCount); 

    // Ref used to scroll into view when changing page
    const scrollTopRef: any = useRef(null);
    const scrollTop = () => scrollTopRef.current.scrollIntoView({block: "end", behavior: "auto"});

    return (
        <>
            <NavBar />
            <span ref={scrollTopRef}></span>
            <div className="flex justify-center mt-5 mb-10">
                <h1 className="text-4xl font-bold">Products List</h1>
            </div>
            {
                productListQuery.isLoading 
                ?
                    <LoadingSpinner />  
                :
                <>
                    <div className="flex justify-center">
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-10">
                        {
                            productListQuery.data.map((product: any, index: number) => (
                                <Product
                                    key={index}
                                    product={product} 
                                /> 
                            ))
                        }
                        </div>
                    </div>   
                    <div className="flex justify-center m-10">
                        <div className="btn-group grid grid-cols-2">
                            <button className={"btn " + (offset <= 0 ? "btn-disabled" : "")} onClick={() => (setOffset((prevOffset: number) => prevOffset - 21), scrollTop())}>Previous page</button>
                            <button className={"btn " + (offset >= (productListCountQuery?.data - 21) ? "btn-disabled" : "")} onClick={() => (setOffset((prevOffset: number) => prevOffset + 21), scrollTop())}>Next</button>
                        </div>
                    </div>   
                </>
            }            
            <Footer />
        </>
    )
}

export default ProductsList;