import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient text-primary 
    outline-none font-poppins font-medium text-[18px] rounded-[10px] 
    ${styles} border-2 border-[#5CE1E6] hover:bg-none 
    hover:text-secondary transition-all duration-300`}>
      Get Started
    </button>
  )
}

export default Button