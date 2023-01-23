
import React, {useState,createContext} from 'react'


export const AuthContext = createContext({
    login: ()=>{},
    locationUser:()=>{},
})
export function AuthProvider(props){
    const {children} = props
    const [auth,setAuth] = useState(undefined)
    const [location,setLocation ] = useState(undefined)
    const [estado,setEstado] = useState(false);
    const login = (userData) =>{
        setAuth(userData);  
    };
    const locationUser = (userData)=>{
        setLocation(userData)
    };
    const estadoD =  (datos) =>{
        setEstado(datos);
    }
    const valueContext = {
        auth,
        login,
        location,
        estado,
        locationUser,
        estadoD
    };

    return(
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    );
}