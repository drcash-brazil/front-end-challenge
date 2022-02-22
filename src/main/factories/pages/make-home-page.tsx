import { HomePage } from '@/presentation/pages'
import { makeRemoteLoadClinics } from '@/main/usecases'

export const MakeHomePage = () => <HomePage loadClinics={makeRemoteLoadClinics()}/>
