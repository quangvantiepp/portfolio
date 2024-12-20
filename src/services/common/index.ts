import { client } from "../../hooks/client"

export interface CustomerInfoDataType {
    fullname:string;
    email:string;
    message:string;
}

export const commonService = {
    customerInfoRegister:(props:CustomerInfoDataType)=>{
        return client.post(`/api/customer/register?fullName=${props.fullname}&email=${props.email}&message=${props.message}`)
    }
}
