import React from "react"

type Props = {
  children?: React.ReactNode,
  className?: string
}

export default function Container({ children, className  }: Props) {
  return (
    <div className={`p-4 sm:p-0 container mx-auto${className ? className : ''}`}>{ children }</div>
  )
}
