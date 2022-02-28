import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

export const GradientTitle: React.FC<HeadingProps> = ({ children, ...rest }) =>
  <Heading
    fontSize="6rem"
    color="whiteAlpha.900"
    bg="linear-gradient(to bottom right, #002b54, #1660a5)"
    boxShadow="0 0 1rem rgba(0,0,0, .5)"
    display="inline-block"
    p="1rem 2rem"
    {...rest}
  >
    {children}
  </Heading>
