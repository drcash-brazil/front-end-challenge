import { PagesRoutes } from '../constants'

export const thisElseThat = (item: boolean, doThis: any, doThat: any) => item ? doThis : doThat

export const makeSpecifiClinicLink = (name: string) => `/${PagesRoutes.Clinics}/${name.replace(' ', '-')}`
