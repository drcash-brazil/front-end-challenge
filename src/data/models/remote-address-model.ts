export type RemoteAddressModel = {
  cep: string,
  logradouro: string // Public Place
  complemento: string
  bairro: string
  localidade: string
  uf: string // The city's name is ShortForm. Ex SP (São Paulo)
}
