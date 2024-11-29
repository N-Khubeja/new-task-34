import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_GAME } from '../graphql/queries/get-game'
import { IGetgames } from '../interface/Getgames'

const GamePage:React.FC = () => {
  const {id} = useParams()
  const {loading,error,data} = useQuery(GET_GAME,{
    variables: {gameId:id}
  })

  console.log(data)

  if(loading) return <h1>....LOADING</h1>
  if(error) return <h1>ERROR:{error.message}</h1>
  const {title,platform} = data ? data.game : ({} as IGetgames)

  return (
    <div >
      <h1>{title}</h1>
      <ul style={{listStyle:'none'}}>
        {platform.map((li:string) => (
          <li key={li}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GamePage