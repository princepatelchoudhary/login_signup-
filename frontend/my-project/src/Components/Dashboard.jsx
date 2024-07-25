import React from 'react'

const Dashboard = (props) => {
  return (
    <div className='grid place-items-center text-zinc-300	font-black text-7xl	 text-3xl h-screen'>Hi {props.data.firstName} {props.data.lastName}</div>
  )
}

export default Dashboard