/*** FREDERICO ALVES @ SHAPE GAMES ***/
const getBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await response.json()
  return data.message
}

export default getBreeds
/*** FREDERICO ALVES @ SHAPE GAMES ***/