import {
  Box,
  Input,
  Heading,
  InputGroup,
  Stack,
  FormLabel
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { v4 as uuid } from 'uuid'

import { AddClinicPayload } from '@/domain/models'
import { AddClinic, LoadAddressByZipCode } from '@/domain/usecases'

import { Container, FormCarousel, SpaceButton } from '@/presentation/components'

import { formDateOne, formDateTwo } from './new-page.data'
import { clinicValidation } from './new-page-validations'

type Props = {
  loadAddress: LoadAddressByZipCode
  addClinic: AddClinic
}

export const NewPage = ({ loadAddress, addClinic }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<AddClinicPayload>()

  const formData = [formDateOne, formDateTwo, 'last-item']

  const onSubmit: SubmitHandler<AddClinicPayload> = async (data) => {
    try {
      const isValid = await clinicValidation.validate(data)
      const isLocationValid = await loadAddress.load(isValid.address)
      const newAddedClinic = await addClinic.add(isValid)
      console.log({ isLocationValid, isValid, newAddedClinic })

      // console.log('newAddedClinic', newAddedClinic)
      // if (isValid && isLocationValid) {
      // }
      toast.success(`Clinic ${data.name} was added with success`)
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
            <Stack spacing={3} p="2rem" w="100%" h="100%">
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
            <Box>
              {formDateTwo.map(item => (
                <Stack key={uuid()} p="2rem" w="100%" h="100%">
                  <InputGroup>
                    <FormLabel>{item.name}</FormLabel>
                    <Input
                      d="block"
                      size="lg"
                      placeholder={item.placeholder}
                      {...register(item.name)}
                    />
                  </InputGroup>
                </Stack>
              ))}
            </Box>
            <Box p="2rem" w="100%" h="100%">
              <SpaceButton dark onClick={handleSubmit(onSubmit)}>Send</SpaceButton>
            </Box>
          </FormCarousel>
        </Box>
      </Container>
    </Box>
  )
}
