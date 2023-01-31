import React from 'react'
import Header from './Header'
import Card from './Card'
import data from '../../public/data'

export default function App() {

    let cardList = data.map(destination => {
        return (
            <Card
                key={destination.id}
                destination={destination}
            />
        )
    })
    return (
        <div>
            <Header />
            {cardList}
        </div>
    )
}