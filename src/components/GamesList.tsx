import React from 'react'
import { IGetgames } from '../interface/Getgames'
import GamesItem from './GamesItem'

interface IGameslist {
    games:IGetgames[] | undefined
}

const GamesList:React.FC<IGameslist> = ({games}) => {
  return (
    <div>
        {games?.map(({id,platform,title}) => (
            <GamesItem key={id} title={title} platform={platform} id={id}/>
        ))}
    </div>
  )
}

export default GamesList