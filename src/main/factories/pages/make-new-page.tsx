import { makeRemoteLoadAddressByZipCode } from '@/main/usecases'
import { NewPage } from '@/presentation/pages'

export const MakeNewPage = () => <NewPage loadAddress={makeRemoteLoadAddressByZipCode()} />
