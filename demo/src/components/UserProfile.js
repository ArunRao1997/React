import React from 'react'

function UserProfile(props) {
    console.log(props)
  return (
    <div>
      <h3>Name: {props.name}, Age:{props.age}, occupation: {props.age}</h3>
    </div>
  )
}

export default UserProfile
