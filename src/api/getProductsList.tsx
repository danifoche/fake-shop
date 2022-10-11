import axios from "axios";
import VARIABLES from "./api.config";

export const getProductsList = async (offset: number) => {
    const limit: number = 21;

    try {
        const result: any = await axios.get(VARIABLES.ENDPONT + `/products?offset=${offset}&limit=${limit}`);
        return result.data;
    } catch (error: any) {
        return error;
    }
}

export const getProductsCount = async () => {
    try {
        const result: any = await axios.get(VARIABLES.ENDPONT + `/products`);
        return result.data.length;
    } catch (error: any) {
        return error;
    }
}