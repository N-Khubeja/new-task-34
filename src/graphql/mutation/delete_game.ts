import { gql } from "@apollo/client";

export const DELETE_GAME = gql` 
    mutation DeleteGame($deleteGameId: ID!) {
    deleteGame(id: $deleteGameId) {
        id
        title
        platform
    }
    }
`