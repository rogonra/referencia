import React from 'react'
import Card from './Card'
import fideo from '../assets/fideo.jpg'
import fideo2 from '../assets/fideo2.jpg'
import fideo3  from '../assets/fideo3.jpg'

const cards = [
    {
        id: 1,
        title: 'Todos los productos',
        img: fideo ,
        url: 'https://www.mamalucchetti.com.ar/'
    },
    {
        id: 2,
        title: 'Todos los productos',
        img: fideo2,
        url: 'https://diaonline.supermercadosdia.com.ar/'
    },
    {
        id: 3,
        title:'Todos los productos' ,
        img: fideo3,
        url: 'https://pastasbuenamesa.com/'
    },
]
function CardsList() {
    
  return (
    <div className='container d-flex justify-content-center  align-items-center h-100 '>
        <div className='row'>{
            cards.map(
                card => ( <div className='col-md-4' key={card.id} >
            <Card title={card.title} imageSource={card.img} url={card.url}/>
                </div>

                )
            )
        }
           
            
           
        </div>
       
        </div>
  )
}

export default CardsList