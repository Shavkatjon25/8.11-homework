import React from 'react'

function Card(props) {
    console.log(props);
  return (
    <div className='flex flex-col bg-white rounded-2xl p-6 w-[341px]'>
      <div className='border-b pb-2 mb-4'>
        <h2>{props.mal.name}</h2>
      </div>
      <div className='flex gap-4 items-start justify-start'>
        <img src={props.img} width={48} height={48} alt="" />
        <p>{props.mal.text}</p>
      </div>
      <input type="checkbox" className="toggle toggle-success ml-auto"  />
    </div>
  )
}

export default Card
