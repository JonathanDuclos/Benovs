import axios from "axios";
import { ILoginForm, ILoginResponse } from "../utils/interfaces";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
  });

export async function auth(data: ILoginForm){
    try {
        const result = await instance.post('/auth/login', data)
        const response: ILoginResponse = {message: result.statusText, okay: true, data: result.data[0], token: result.data[0].id}
        
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}