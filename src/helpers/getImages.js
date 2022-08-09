/*** FREDERICO ALVES @ SHAPE GAMES ***/
const getImages = async (breedName) => {
  const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images`)
  const data = await response.json()
  return data.message
}

export default getImages
/*** FREDERICO ALVES @ SHAPE GAMES ***/