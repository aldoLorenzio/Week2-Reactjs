import React from 'react'

const Button = ({className = "" , type ="button", href, content}) => {

  const defaultStyle = `border-2 text-center rounded-full text-lg hover:cursor-pointer text-black `

  const classes  = `px-32 py-4 border-black font-semibold`

  const finalClass = `${defaultStyle} ${classes} ${className}`

  if(href){
    return <a href={href} className={finalClass} >{content}</a>
  }

  return <button className={classes} type={type}>{content}</button>
}

export default Button