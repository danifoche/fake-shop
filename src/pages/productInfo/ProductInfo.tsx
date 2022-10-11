import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";

// Components
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"

// Api call
import { getProductInfo } from "../../api/getProductInfo";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Utils
import { Toast } from "../../utils/utils";

const ProductInfo = () => {
    // Product Id
    const { id }: any = useParams();

    // Navigate to previus page
    // TODO: store previus page offset
    // const navigate: any = useNavigate();
    // navigate(-1);

    // Get Product
    const productInfoQuery = useQuery(['productInfo', id], () => getProductInfo(id));

    const handleAddToBasket = () => {
          
        Toast.fire({
            icon: 'success',
            title: 'Product Added to Basket'
        });
    }
    
    return (
        <>
            <NavBar />

            {
                productInfoQuery.isLoading
                ?
                    <LoadingSpinner />
                :   
                    <div className="p-2">
                        
                        <div className="card xl:card-side bg-base-100 shadow-xl">
                            
                            <Swiper
                                modules={[ Pagination ]}
                                pagination={{ clickable: true }}
                                grabCursor={true} 
                                effect={"slide"}
                                roundLengths={true}   
                                className="w-full md:h-[28rem] lg:h-[32rem] xl:w-2/3"                            
                            >
                                {
                                    productInfoQuery.data.images.map((product_image: string, index: number) => (
                                        <SwiperSlide key={index}>
                                            <img src={ product_image } alt="Product" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>    
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{ productInfoQuery.data.title }</h2>
                                <p>
                                    { productInfoQuery.data.description }
                                    <br />
                                    <br />
                                    <span className="text-sm">
                                        Quantita:&nbsp;
                                    </span>
                                    <span className="ml-2">
                                        <input 
                                            type="number" 
                                            className="input input-sm border-2 border-neutral font-bold" 
                                            min="0" 
                                            max="20" 
                                            placeholder="Qty"
                                        />
                                    </span>
                                    <br />
                                    <br />
                                    <span className="text-sm">
                                        Prezzo:&nbsp;
                                    </span>
                                    <span className="font-bold ml-2">
                                        { productInfoQuery.data.price }€
                                    </span> 
                                    <br />
                                    <br />                            
                                </p>
                                <div className="card-actions">
                                    <button 
                                        className="btn w-full"
                                        onClick={() => handleAddToBasket()}
                                    >
                                        Add to Basket!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <Footer />
        </>
    )
} 

export default ProductInfo;