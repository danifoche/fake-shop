import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }: any) => {
    return (
        <Link to={`/products/${product.id}`}>
            <div className="group card card-compact w-96 bg-base-100 hover:bg-gray-300 ease-in duration-100 shadow-xl hover:shadow-2xl cursor-pointer">
                <figure>
                    <img src={ product.images[0] } alt="Product" />
                </figure>
                <div className="card-body flex-row justify-between align-center">
                    <h2 className="card-title group-hover:text-black ease-in duration-100 whitespace-nowrap overflow-hidden">{ product.title }</h2>
                    <span className="text-lg group-hover:text-black ease-in duration-100">€{ product.price }</span>
                </div>
            </div>
        </Link>
    )
}

export default Product;