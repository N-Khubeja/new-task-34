import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_GAMES } from '../graphql/queries/get-games'
import { IGetgames } from '../interface/Getgames'
import GamesList from '../components/GamesList'

const GamesPage:React.FC = () => {
  const {loading,error,data} = useQuery<{games:IGetgames[]}>(GET_GAMES)
  if(loading) return <h1>...LOADING</h1>
  if(error) return <h1>ERROR:{error.message}</h1>
  return (
    <div>
      <GamesList games={data?.games}/>
    </div>
  )
}

export default GamesPage