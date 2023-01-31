import React from "react"
import Fill from '../../public/Fill 213.png'
export default function Header() {
    return (
        <header className="header">
            <img src={Fill} />
            <h3 className="header--headline">my travel journal</h3>
        </header>
    )
}