/*** FREDERICO ALVES @ SHAPE GAMES ***/
import { useParams } from 'react-router-dom'
import getImages from "../helpers/getImages"
import Image from "../components/Image"
import { useState, useEffect } from "react"
import AddFavoritesButton from "../components/AddFavoritesButton"
import RemoveFavoritesButton from '../components/RemoveFavoritesButton'
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [favorites, setFavorites] = useState([])
  //Get the breed name from the URL
  const { breedName } = useParams()

  //Gets the images when the component is rendered
  useEffect(() => {
    getImages(breedName)
      .then(images => {
        setImages(images)
      })
  })

  //Get images from local storage
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('dogFavorites')
    )

    //Conditionally set favorites if there are any
    if (favorites) {
      setFavorites(favorites)
    }
  }, [])

  //Save image URL to local storage
  const saveToLocalStorage = (image) => {
    localStorage.setItem('dogFavorites',
      JSON.stringify(image)
    )
  }

  //Function that updates our favorites state
  const addFavoriteImage = (imageURL) => {
    const newFavoriteList = [...favorites, imageURL]
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
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

  //Return the images as gallery
  return (
    <div>
      <h1 className='page-title'>{breedName}</h1>
      <div className="image-container">
        {images.map(imageURL => {
          return <Image
            url={imageURL}
            alt={breedName}
            //Handle click event for adding to favorites
            //If the image is in the favorites state, remove it from the favorites state
            //Otherwise, add it to the favorites state
            handleFavoritesClick={favorites.includes(imageURL) ? removeFavoriteImage : addFavoriteImage}
            //Conditionally render the AddFavoritesButton component
            //If the image is in the favorites state, render the RemoveFavoritesButton component
            //Otherwise, render the AddFavoritesButton component
            favoriteComponent={favorites.includes(imageURL) ? RemoveFavoritesButton : AddFavoritesButton}
          />
        })}
      </div>
    </div>
  )
}

export default Gallery
/*** FREDERICO ALVES @ SHAPE GAMES ***/