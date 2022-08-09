/*** FREDERICO ALVES @ SHAPE GAMES ***/
import './Image.css'
const Image = (props) => {

  const FavoriteComponent = props.favoriteComponent;

  return (
    <div className="image-card">
      <img
        src={props.url}
        alt={props.alt}
      />

      {/* //On favorite page the breed name will display bellow the image */}
      {props.breedName ? <p className='favorites-breedName'>{props.breedName}</p> : null}

      <div onClick={() => props.handleFavoritesClick(props.url)} className="overlay">
        <FavoriteComponent />
      </div>

    </div>
  )
}

export default Image
/*** FREDERICO ALVES @ SHAPE GAMES ***/