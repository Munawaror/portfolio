import React from 'react'

const ButtonComp = ({text, bg, onclick}) => {
  return (
    <button   
    type="button"
    onClick={onclick}
    className={` border-none flex items-center justify-center text-[#FFFFFF] font-bold text-sm bg-[#142850] cursor-pointer rounded-[50px] w-[70px]`}
    style={{
      backgroundColor:bg,
      
    }}
    >
      {text}

    </button>
  )
}

export default ButtonComp



// const ButtonComp = ({text, bg, onclick}) => {
//   return (
//     <button
//     type="button"
//     onClick={onclick}
//     className={`p-[10px] border-none flex items-center justify-center text-[#142850] font-bold text-sm cursor-pointer rounded-[10px] w-full`}
//     style={{
//       backgroundColor:bg,
      
//     }}
//     >
//       {text}

//     </button>
//   )
// }

// export default ButtonComp