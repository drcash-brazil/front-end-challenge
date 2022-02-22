import { makeRemoteLoadClinicById } from '@/main/usecases'
import { ClinicPage } from '@/presentation/pages'

export const MakeClinicPage = () => <ClinicPage loadClinicById={makeRemoteLoadClinicById()}/>
