import React from 'react'
import Card from './Card'

const CardList = ({list}) => {
  return (
    <div>
    {list.map((el)=>(
        <Card mov={el} key={el.id} />
    )
        )}
    </div>
  )
}

export default CardList