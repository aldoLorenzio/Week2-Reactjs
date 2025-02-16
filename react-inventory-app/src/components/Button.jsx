import React from 'react'

const Button = ({bgcolor, href, border, px ,py, content}) => {
  return (
    <a href={href} className={`border-2 rounded-full text-center text-lg hover:cursor-pointer ${px} ${py} ${bgcolor} $ ${border || 'border-black font-semibold'}`}>{content}</a>
  )
}

export default Button