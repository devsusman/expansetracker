import { useEffect, useState } from "react";

export function useStorage(key,initialData){
const [data, setdata] = useState(initialData)
useEffect(()=>{
    const existingData = JSON.parse(localStorage.getItem(key))
if(existingData){
    setdata(existingData)
}else{
    localStorage.setItem(key,JSON.stringify(initialData))
}
},[])

const updateStorage = (newdata) =>{
    if(typeof newdata === 'function'){
        localStorage.setItem(key,JSON.stringify(newdata(data)))
    }else{

        localStorage.setItem(key,JSON.stringify(newdata))
    }
setdata(newdata)
}
return [data,updateStorage]
}