import axios from "axios"

export const commonStructure=async(method,url,body)=>{
    let requestConfig={
        method,
        url,
        data:body
    }
    return await axios(requestConfig).then(result=>{
        return result
    }).catch(err=>{
        return err
    })
}