import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: null,
        email: null,
        image: '',
        userId: 1,
        password: null,

    })


    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);
