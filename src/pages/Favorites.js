/*** FREDERICO ALVES @ SHAPE GAMES ***/
import { useState, useEffect } from "react"
import Image from "../components/Image"
import RemoveFavoritesButton from "../components/RemoveFavoritesButton"
import './Favorites.css'

const Favorites = () => {
  //State variables
  const [favorites, setFavorites] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [uniqueBreeds, setUniqueBreeds] = useState([])

  //Always runs when the component is rendered
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('dogFavorites')
    )

    //Conditionally set favorites if there are any
    if (favorites) {
      setFavorites(favorites)

      //Get all the breeds from the favorites
      const breeds = favorites
        .map(favorite => {
          return altText(favorite)
        })

      //Remove duplicates from the breeds array
      const uniqueBreeds = Array.from(new Set(breeds)).sort()
      setUniqueBreeds(uniqueBreeds)
    }
  }, [])

  //Save image URL to local storage
  const saveToLocalStorage = (image) => {
    localStorage.setItem('dogFavorites', JSON.stringify(image))
  }

  //Remove image URL from favorites state
  const removeFavoriteImage = (imageURL) => {
    const newFavoriteList = favorites.filter(
      favorite => favorite !== imageURL
    )

    //Update favorites state
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
  }

  //Provides alt text for images through subtracting the breed name from the image URL
  const altText = (imageURL) => {
    let splitURL = imageURL.split('/')[4].split('-')[0]
    splitURL = splitURL.charAt(0).toUpperCase() + splitURL.slice(1)
    return `${splitURL}`
  }

  //Handle change in the breed dropdown
  const handleBreedSelected = (event) => {
    setSelectedBreed(event.target.value)
  }


  //Return the images liked by the user
  return (
    <div>
      <h1 className="page-title">Favorites</h1>
      <div className="select-container-favorites"> 
        <select className="select-dropdown" onChange={handleBreedSelected}>
          <option value="">Show all</option>
          {/* //Loop through the breeds and display them in the dropdown */}
          {uniqueBreeds.map(uniqueBreed => {
            return <option value={uniqueBreed} key={uniqueBreed}>{uniqueBreed}</option>
          })}
        </select>
      </div>

      <div className="image-container">
        {favorites
          //Filter out images that don't match the selected breed or if no breed is selected
          .filter(favorite => altText(favorite) === selectedBreed || selectedBreed === '')
          //Map through the favorites and return the images
          .map(favorite => {
            //Return the image with the remove button
            return <>
              <Image
                url={favorite}
                alt={altText(favorite)}
                handleFavoritesClick={removeFavoriteImage}
                favoriteComponent={RemoveFavoritesButton}
                breedName={altText(favorite)}
              />
            </>
          })}
      </div>
    </div>
  )
}

export default Favorites
/*** FREDERICO ALVES @ SHAPE GAMES ***/