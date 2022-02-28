import {
  Box,
  Input,
  Heading,
  InputGroup,
  Stack,
  FormLabel,
  Textarea,
  Flex
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { v4 as uuid } from 'uuid'

import { Container, FormCarousel, SpaceButton } from '@/presentation/components'

import { formDateOne, formDateTwo } from './new-page.data'
import { clinicValidation } from './new-page-validations'
import { AddClinicPayload } from '@/domain/models'

export const NewPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AddClinicPayload>()

  const formData = [formDateOne, formDateTwo, 'last-item']

  const onSubmit: SubmitHandler<AddClinicPayload> = async (data) => {
    try {
      const isValid = await clinicValidation.validate(data)

      if (isValid) {
        toast.success(`Clinic ${data.name} was added with success`)
      }
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <Box>
      <Box w="100%" h="45vh" bg="linear-gradient(to bottom right, #002b54, #1660a5)" />
      <Container>
        <Heading
          position="relative"
          top="-5rem"
          left="2rem"
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
          <FormCarousel items={formData}>
            <Flex justifyContent="center" alignItems="center" w="100%">
              <Stack spacing={3}>
                {formDateOne.map(item => (
                  <InputGroup key={uuid()}>
                    <Input
                      type="text"
                      size="lg"
                      placeholder={item.placeholder}
                      {...register(item.name)}
                    />
                    {errors[item.name] && <FormLabel>{errors[item.name]?.message}</FormLabel>}
                  </InputGroup>
                ))}
              </Stack>
            </Flex>
            <Box>
              {formDateTwo.map(item => (
                <Stack key={uuid()}>
                  <Textarea
                    size="lg"
                    placeholder={item.placeholder}
                    {...register(item.name)}
                  />
                </Stack>
              ))}
            </Box>
            <Box>
              <SpaceButton dark onClick={handleSubmit(onSubmit)}>Send</SpaceButton>
            </Box>
          </FormCarousel>
        </Box>
      </Container>
    </Box>
  )
}
