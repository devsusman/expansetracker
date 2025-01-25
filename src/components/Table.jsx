import React, { useState } from 'react'
import { UseFilter } from './Hooks/UseFilter'
import CustomMenu from './CustomMenu';

function Table({data,setdata,setrowid,rowid}) {

  
   const [result,setquery] = UseFilter(data,(data) => data.category)
   const [menuPosition, setmenuPosition] = useState({})
const total = result.reduce(
  (acc,curr) => acc + Number(curr.amount), 0
)

    const handleCategory = (e) => {
      setquery(e.target.value)
    }
  return (
    <>
    <section className='w-full '>
    <CustomMenu menuPosition={menuPosition} setmenuPosition={setmenuPosition} setdata={setdata} rowid={rowid} />
        <div className='mt-3'>
            <table onClick={()=>{if(menuPosition.left){setmenuPosition({})}}} className='w-full relative text-center capitalize'>
              <thead><tr><th>items</th><th><select onChange={handleCategory} className='w-full' name="category" id="category">
                <option value="" >All</option>
                <option value="grocery">Grocery</option>
                <option value="medicine">Medicine</option>
                <option value="education">Education</option>
                </select></th><th className='flex items-center justify-around'>amount 
               
                  <div className='foo'>
                  <svg onClick={()=>{setdata((pre)=> [...pre.sort((a,b)=>a.amount - b.amount)])}}
                className='h-9' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z"/>
                </svg>
                  </div>
             
               
                  <div className='foo'>
                  <svg onClick={()=>{setdata((pre)=> [...pre.sort((a,b)=>b.amount - a.amount)])}}
                className='h-9' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/>
                </svg>
                  </div>
                 
                </th></tr></thead>
                <tbody  >
                {result.map(({item,id,category,amount})=> <><tr  onContextMenu={(e) => {e.preventDefault(); 
                setrowid(id)
                
              
                 setmenuPosition({left :e.clientX , top :e.clientY})
               }} key={id}><td >{item}</td><td >{category}</td><td>{amount}</td></tr>
               
                </>)}
                <tr><td>Total</td><td></td><td>{total}</td></tr>
                </tbody>
               
            </table>
        </div>
    </section>
    </>
  )
}

export default Table