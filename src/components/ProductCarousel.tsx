import React from "react";

const ProductCarousel = ({ product }: any) => {

    return (
        <div className="group card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={ product.images[1] } alt="Product" />
            </figure>
            <div className="card-body flex-row justify-between align-center">
                <h2 className="card-title">{ product.title }</h2>
            </div>
        </div>
    )
}

export default ProductCarousel;