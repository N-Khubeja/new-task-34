import React from 'react'
import AddForm, { Iinput } from './form/AddForm'
import { useMutation } from '@apollo/client'
import { ADD_GAME } from '../graphql/mutation/add_game'
import { GET_GAMES } from '../graphql/queries/get-games'
import { IGetgames } from '../interface/Getgames'

const CreateGame:React.FC = () => {
    const [CreateGame,{loading,error}] = useMutation(ADD_GAME,{
        update(cache,{data:CreateGame}){
            const data = cache.readQuery({
                query:GET_GAMES
            }) as {games:IGetgames[]}

            cache.writeQuery({
                query:GET_GAMES,
                data:{
                    games:[CreateGame,data?.games]
                }
            })
        }
    })

    const inputInfo:Iinput[] = [
        {name:'title',type:'text',placeholder:'enter title',label:'title'},
        {name:'platform',type:'text',placeholder:'enter platform',label:'platform'}
    ]

    const onSubmit = (formdata:Record<string,string>) => {
        CreateGame({
            variables:{game:{...formdata}}
        })
    }

    const formBTN = () => {
        return <button type='submit' >submit</button>
    }

  if(loading) return <h1>....LOADING</h1>
  if(error) return <h1>ERROR:{error.message}</h1>
  return (
    <div>
        <AddForm onSubmit={onSubmit} formBTN={formBTN()} inputInfo={inputInfo}/>
    </div>
  )
}

export default CreateGame