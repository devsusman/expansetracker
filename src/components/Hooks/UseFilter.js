import React, { useState } from 'react'

export function UseFilter(data,callback) {
  const [query, setquery] = useState("")
  const filteredata = data.filter((e)=> callback(e).toLowerCase().includes(query))
    
  return [filteredata,setquery]
}

