import React from 'react'


function Card  ({title, imageSource, url}) {

  return (
    <div className='card text-center bg-secondary'>
       <img src={imageSource} />
      <div className='card-body text-light'>
       
        <h3 className='card-title'>{title}</h3>
        
        <a href={url} className='btn btn-outline-dark' target='_blank'>Ir a la página</a>



  
      </div>


    
    </div>
  )
}

export default Card