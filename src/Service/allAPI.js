import { base_url } from "./base_url";
import { commonStructure } from "./commonStructure";

export const userLoginAPI=async()=>{
    return await commonStructure('GET',`${base_url}/users`,{})
}

export const productsAPI=async()=>{
    return await commonStructure('GET',`${base_url}/products`,{})
}

export const productsViewAPI=async(id)=>{
    return await commonStructure('GET',`${base_url}/products/${id}`,{})
}
