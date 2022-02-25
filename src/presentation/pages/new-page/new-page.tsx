import { useState } from 'react'
import {
  Box,
  Input,
  Heading,
  InputGroup,
  Stack,
  FormLabel,
  Flex,
  Textarea,
  Grid
} from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'

import { useForm } from 'react-hook-form'

import { AddClinicPayload, ClinicEnum } from '@/domain/models'

import { Container, SpaceButton } from '@/presentation/components'

import { formDateOne, formDateTwo } from './new-page.data'

export const NewPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const formData = [formDateOne, formDateTwo, 'last-item']

  const [index, setIndex] = useState(0)

  const onSubmit = (data) => {
    console.log(data)
  }

  const changeIndex = (newIndex: number) => setIndex(newIndex)

  return (
    <Box>
      <Box w="100%" h="45vh" bg="linear-gradient(to bottom right, #002b54, #1660a5)" />
      <Container>
        <Heading
          position="relative"
          top="-5rem"
          fontSize="6rem"
          color="whiteAlpha.900"
          bg="linear-gradient(to bottom right, #002b54, #1660a5)"
          boxShadow="0 0 1rem rgba(0,0,0, .5)"
          display="inline-block"
          p="1rem 2rem"
        >
          Create a new Clinic
        </Heading>
        <Box p="4rem">
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
              p="2rem"
              pb="5rem"
              w={`calc(100% * ${formData.length})`}
              gap="1rem"
              gridTemplateColumns={`repeat(${formData.length}, 1fr)`}
            >
              <Stack spacing={3}>
                {formDateOne.map(item => (
                  <InputGroup key={uuid()}>
                    <Input
                      type="text"
                      size="lg"
                      placeholder={item.placeholder}
                      {...register(item.name)}
                    />
                    {errors[item.name] && <FormLabel>{errors[item.name].message}</FormLabel>}
                  </InputGroup>
                ))}
              </Stack>
              {formDateTwo.map(item => (
                <Stack key={uuid()}>
                  <Textarea
                    size="lg"
                    placeholder={item.placeholder}
                    {...register(item.name)}
                  />
                </Stack>
              ))}
              <Box>
                <SpaceButton dark onClick={handleSubmit(onSubmit)}>Send</SpaceButton>
              </Box>
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
              {formData.map((_, currentIndex) => (
                <Box
                  key={uuid()}
                  onClick={() => changeIndex(currentIndex)}
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
      </Container>
    </Box>
  )
}
