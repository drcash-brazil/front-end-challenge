import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Box, Grid, Flex } from '@chakra-ui/react'

type FormCarouselProps = {
  items: any[]
}

export const FormCarousel: React.FC<FormCarouselProps> = ({ children, items }) => {
  const [index, setIndex] = useState(0)

  const numberOfSlides = items.length

  return (
    <Box
      position="relative"
      pb="5rem"
    >
      <Box
        position="relative"
        maxWidth="50rem"
        width="100%"
        m="0 auto"
        overflow="hidden"
        border="2px solid"
        borderColor="gray.900"
      >
        <Grid
          pb="4rem"
          h="100%"
          w={`calc(100% * ${numberOfSlides})`}
          gridTemplateColumns={`repeat(${numberOfSlides}, 1fr)`}
          transition="all ease-in-out .25s"
          transform={`translateX(-${index * 33.3}%)`}
        >
          {children}
        </Grid>
        <Flex
          position="absolute"
          left="0"
          bottom="0"
          bg="gray.900"
          padding="1rem"
          w="100%"
          justifyContent="center"
        >
          {items.map((_, currentIndex) => (
            <Box
              key={uuid()}
              onClick={() => setIndex(currentIndex)}
              cursor="pointer"
              w="10px"
              h="10px"
              bg={currentIndex === index ? 'whiteAlpha.900' : 'whiteAlpha.500'}
              m=".5rem"
              borderRadius="100%"
              transition="all ease-in-out .25s"
              _hover={{ transform: 'scale(1.04)', bg: 'whiteAlpha.900' }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
