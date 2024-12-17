import { gql } from "@apollo/client";

export const ADD_GAME = gql`
    mutation CreateGame($game: AddGameInput!) {
    addGame(game: $game) {
    id
    title
    platform  
    }
}
`