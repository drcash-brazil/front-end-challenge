import { PagesRoutes } from '@/main/constants'

export const thisElseThat = (item: boolean, doThis: any, doThat: any) => item ? doThis : doThat

export const makeSpecificClinicLink = (name: string) => `${PagesRoutes.Clinics}/${name.replace(' ', '-')}`
