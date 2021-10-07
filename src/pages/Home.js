import React, { useState, useEffect } from 'react'
import itemAPI from '../server/itemAPI'

//Components
import Card from '../components/Card'
import Modal from '../components/Modal'

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
    <Modal
      total={items.reduce((a, b) => a + b.price, 0)
        .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    >
      {items.map(item => {
        return (
          <Card
            title={item.name}
            img={item.imageUrl}
            price={item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        )
      })}
    </Modal>
  )
}

export default Home