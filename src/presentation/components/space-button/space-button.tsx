import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { thisElseThat } from '@/main/utils/helpers'

type Props = {
  dark?: boolean
}

export const SpaceButton: React.FC<Props & ButtonProps> = ({ children, dark = false, ...rest }) => {
  return (
    <Button
      h="4rem"
      w="15rem"
      bg={thisElseThat(dark, 'whiteAlpha.900', 'transparent')}
      fontSize="1.5rem"
      border="2px solid"
      borderColor={thisElseThat(dark, 'gray.900', 'whiteAlpha.900')}
      color={thisElseThat(dark, 'gray.900', 'whiteAlpha.900')}
      _hover={{ bg: thisElseThat(dark, 'gray.100', 'gray.800') }}
      {...rest}
    >
     {children}
    </Button>
  )
}
