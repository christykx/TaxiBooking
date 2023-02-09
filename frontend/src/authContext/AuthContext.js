import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { resolvePath } from "react-router-dom";
// import { makeRequest } from "../axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);



    const login = (details) => {

        return new Promise(async (resolve, reject) => {

            const res = await axios.post('http://localhost:3001/users/login', details, { withCredentials: true })
               setCurrentUser(res.data)
               resolve(res.data)

        })

    };


    useEffect(() => {
        if (currentUser != undefined) {
            localStorage.setItem("user", JSON.stringify(currentUser))
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}