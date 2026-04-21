import React, { useContext } from 'react'
import { counterContext } from './context/context'

const components1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>
        {counter}
    </div>
  )
}

export default components1