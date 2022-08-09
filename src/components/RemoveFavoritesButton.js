/*** FREDERICO ALVES @ SHAPE GAMES ***/
import './RemoveFavoritesButton.css'

const RemoveFavoritesButton = () => {

  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
        <span className="trashcan overlay-hidden">
            <svg>
                <g className="trashcan-closed overlay-hidden">
                    <path d="M6.8,8.8h11L17,22.6
                            H7.6L6.8,8.8z 
                            M4.9,7l1,17.4h12.8
                            l1-17.4
                            H4.9z"></path>
                    <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "></polygon>
                    <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "></polygon>
                    <path d="M20.4,4h-4.8l-0.5-1.6
                            H9.5L9,4
                            H4.2
                            L3.5,8.6h17.6
                            L20.4,4z 
                            
                            M9.9,3.2h4.8
                            L14.9,3.9h-5.2z
                            
                            M5.6,6.7l0.2-1 h13l0.2,1
                            H5.6z"></path>
                </g>
            </svg>
        </span>
    </>
  )
}

export default RemoveFavoritesButton
/*** FREDERICO ALVES @ SHAPE GAMES ***/