import React from 'react'
import { useNavigate } from 'react-router-dom'

interface IGamesitem {
    id:string
    title:string
    platform:string[]
}

const GamesItem:React.FC<IGamesitem> = ({id,platform,title}) => {
    const navigate = useNavigate()

  return (
    <div key={id} style={{border:'solid 1px black'}} onClick={() => navigate(`/${id}`)}>
        <h1>{title}</h1>
        <ul style={{listStyle:'none'}}>
            {platform.map((li) => (
                <li key={li}>{li}</li>
            ))}
        </ul>
    </div>
  )
}

export default GamesItem