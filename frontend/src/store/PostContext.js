import {createContext, useState} from 'react'

export const  PostContext=createContext(null)

 function Post({children}){
    
const [bookingDetails,setBookingDetails]=useState()

    return(
        <PostContext.Provider value={{bookingDetails,setBookingDetails}}>
            {children}
        </PostContext.Provider>
    )

} 

export default Post
