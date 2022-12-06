import React, { useEffect, useState } from "react";
import GithubUsers from "./GithubUsers";
import Loading from "./Loading";

const UseEffect=()=>{
    
    const url='https://api.github.com/users';
    const [users ,setUsers] = useState([]);
    const [loading,setLoading] =useState(true);

    
    const getUsers=async ()=>{

        try{
        
        const response=await fetch(url);
        setLoading(false);
        const data= await response.json();
        setUsers(data);

        }
        catch(error){
            setLoading(false);
            console.log("Error is " + error);
        }
        
  
    }

    useEffect(()=>{
       getUsers();

    },[])

    if(loading){
        return <Loading/>;
    }
    return(

        <>
<GithubUsers users={users}/>
        </>
)
}

export default UseEffect;