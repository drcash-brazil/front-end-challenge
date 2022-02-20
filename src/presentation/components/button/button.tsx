import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
} & ButtonProps

export const SpaceButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      h="4rem"
      w="15rem"
      bg="transparent"
      fontSize="1.5rem"
      border="2px solid"
      borderColor="whiteAlpha.900"
      _hover={{ bg: 'gray.800' }}
      {...rest}
    >
     {children}
    </Button>
  )
}
