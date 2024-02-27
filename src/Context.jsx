"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { usePathname } from 'next/navigation'
export let SessionProvider = createContext()
const Context = ({children}) => {
    const [user,setUser] = useState()
const pathname = usePathname()
   const fetchuser = async()=>{
    try {
        const res = await axios.get("/api/user/profile")
     setUser(res.data.message)
    } catch (error) {
        console.log(error)
    }
   }
   console.log(pathname)

   useEffect(() => {
     fetchuser()
   }, [pathname])
   
  return (
   <>
   <SessionProvider.Provider data={{user,setUser}}>

    {children}
   </SessionProvider.Provider>
   
   </>
  )
}

export default Context