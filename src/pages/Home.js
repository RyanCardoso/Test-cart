import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import itemAPI from '../server/itemAPI'

//Components
import Card from '../components/Card'

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItemAPI()
  }, [])

  const getItemAPI = async () => {
    const response = await itemAPI.get()
    setItems(response.data)
  }

  return (
    <div>
      {items.map(item => (
        <Card 
          title={item.name}
          img={item.imageUrl}
          price={item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        />
      ))}
    </div>
  )
}

export default Home