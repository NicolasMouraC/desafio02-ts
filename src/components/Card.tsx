import { Center, Input } from "@chakra-ui/react"
import React from "react"

export const Card = () => {
  return(
    <div>
      <React.Fragment>
        <Center>
          <h1>Faça o login</h1>
        </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
      </React.Fragment>
    </div>
  )
}