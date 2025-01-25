import React from 'react'

function CustomMenu({menuPosition,setmenuPosition,rowid,setdata}) {
 
if(!menuPosition.left) return 
  return (
    <div style={{left : menuPosition.left, top : menuPosition.top}} className={`cursor-pointer w-fit absolute border-2 z-20 backdrop-blur-3xl bg-white border-slate-700 rounded   h-fit`}>
       
        <div className=' px-4 hover:bg-slate-500/20' onClick={()=> {setmenuPosition({});
      setdata((pre)=> pre.filter((val)=> val.id !== rowid))
      }}>Delete</div>
    </div>
  )
}

export default CustomMenu