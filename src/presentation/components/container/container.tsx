import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const Container: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box maxWidth="142rem" width="100%" m="0 auto" {...rest}>{children}</Box>
  )
}
