import { Box, Flex } from '@chakra-ui/react'

type FormCarouselProps = {
  item: any
}

export const FormCarousel = ({ item }: FormCarouselProps) => {
  return (
    <Box
      position="relative"
      pb="5rem"
    >
      <Flex
        position="absolute"
        left="0"
        bottom="0"
        bg="gray.900"
        padding="1rem"
        w="100%"
      >
        []
      </Flex>
    </Box>
  )
}
