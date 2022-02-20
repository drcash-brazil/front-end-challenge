export const makeApiUrl = (path: string): string => `${import.meta.env.VITE_API_URL}api/v1/${path}`
