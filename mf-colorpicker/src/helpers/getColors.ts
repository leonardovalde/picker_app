export const getColorsList = () =>
  JSON.parse(localStorage.getItem('colors') || '[]')

export const getLastColor = () => getColorsList()[0] || '#732821'

