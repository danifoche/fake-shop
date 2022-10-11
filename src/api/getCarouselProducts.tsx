import axios from "axios";
import VARIABLES from "./api.config";

export const getCarouselProducts = async () => {
    // get random offset for carousel
    const offset: number = Math.floor(Math.random() * 100);

    // set display number products
    const limit: number = 5;

    try {
        const result: any = await axios.get(VARIABLES.ENDPONT + `/products?offset=${offset}&limit=${limit}`);
        return result.data;
    } catch (error: any) {
        return error;
    }
}