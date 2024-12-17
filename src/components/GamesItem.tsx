import { Reference, useMutation } from '@apollo/client'
import React, { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { DELETE_GAME } from '../graphql/mutation/delete_game'

interface IGamesitem {
    id:string
    title:string
    platform:string[]
}

const GamesItem:React.FC<IGamesitem> = ({id,platform,title}) => {
    const navigate = useNavigate()

    const [DeleteGame,{loading,error}] = useMutation(DELETE_GAME,{
        update(cache){
            cache.modify({
                fields:{
                    games(cache = [],{readField}){
                        return cache.filter((ref:Reference) => id !== readField("id",ref) )
                    }
                }
            })
        }
    })

    const deletegame = (e:MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        DeleteGame({
            variables:{deleteGameId:id}
        })
    }

    if(loading) return <h1>...LOADING</h1>
    if(error) return <h1>ERROR:{error.message}</h1>
  return (
    <div key={id} style={{border:'solid 1px black',width:"300px",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}} onClick={() => navigate(`/${id}`)}>
        <button
        onClick={deletegame}
        style={{
            position:"absolute",
            right:"5px",
            top:"5px",
            color:"red",
            border:"solid 1px black",
            padding:"5px"
        }}
        >X</button>
        <h1 style={{fontSize:"30px"}}>{title}</h1>
        <ul style={{listStyle:'none'}}>
            {platform.map((li) => (
                <li key={li}>{li}</li>
            ))}
        </ul>
    </div>
  )
}

export default GamesItem