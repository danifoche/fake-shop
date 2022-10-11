import axios from "axios";
import VARIABLES from "./api.config";

export const getProductInfo = async (product_id: number) => {
    try {
        const result: any = await axios.get(VARIABLES.ENDPONT + `/products/${product_id}`);
        return result.data;
    } catch (error) {
        return error;
    }
}