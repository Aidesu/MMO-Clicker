import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './assets/Pages/Home/Home'
import PlayerCard from './components/PlayerCard/PlayerCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PlayerCard user="Deafiaa" class="Witch" level="299" experience="1982/4000" life="756/994" userTitle="Bloody Queen" mana="500/500" image="https://wallpapers-clan.com/wp-content/uploads/2022/07/kuromi-pfp-1.jpg" />
      <Home user="Deafiaa"/>
    </>
  )
}

export default App
