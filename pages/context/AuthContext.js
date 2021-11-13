import { createContext, useState, useReact } from "react";
import {useRouter} from 'next/router';


const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] =  useState(null)
    const [error, setError] = useState(null)



    //Register user
    const re


    //Login user


    //Logout user

    
    //Check if the user is logged in
}