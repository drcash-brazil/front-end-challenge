import { ClinicsPage } from '@/presentation/pages'
import { makeRemoteLoadClinics } from '@/main/usecases'

export const MakeClinicsPage = () => <ClinicsPage loadClinics={makeRemoteLoadClinics()}/>
