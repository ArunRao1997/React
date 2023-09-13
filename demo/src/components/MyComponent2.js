import React from 'react'

function MyComponent2() {
    const name = 'Mark'
    const showMessage =()=>{
        return 'Hello from showMessage'
    }
  return (
    <div>
      <h3>I am {name} {20*3} {showMessage()}</h3>
    </div>
  )
}

export default MyComponent2
