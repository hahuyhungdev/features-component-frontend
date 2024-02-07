import { Events, Link } from 'react-scroll'
import './App.css'
import React, { useEffect, useState } from 'react'

type items = {
  id: number | string
  content: string
}
const data: items[] = [
  { id: 1, content: 'item 1' },
  {
    id: 2,
    content: 'item 2'
  },
  {
    id: 3,
    content: 'item 3'
  },
  {
    id: 4,
    content: 'item 4'
  },
  {
    id: 5,
    content: 'item 5'
  }
]
function App() {
  return (
    <div id='app'>
      <header>
        <ul>
          {data.map((item) => (
            <Link
              to={item.id as string}
              key={item.id}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.content}
            </Link>
          ))}
        </ul>
      </header>
      <div className='main'>
        {data.map((item) => (
          <section key={item.id} id={item.id as string}>
            <h2>{item.content}</h2>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App
