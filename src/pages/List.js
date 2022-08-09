/*** FREDERICO ALVES @ SHAPE GAMES ***/
import getBreeds from "../helpers/getBreeds"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './List.css'

const List = () => {
  //State variables
  const [breeds, setBreeds] = useState([])
  const navigate = useNavigate()

  //Lists breed names when the component is rendered
  useEffect(() => {
    listBreeds()
  },[])

  //Lists breed names from API
  const listBreeds = async () => {
    const breeds = await getBreeds()

    //Uppercase first letter of each breed name
    const prettyBreeds = Object.keys(breeds).map(breed => {
      return breed.charAt(0).toUpperCase() + breed.slice(1)
    })

    //Set breeds state
    setBreeds(prettyBreeds)

  }

  //Navigate to breed page when breed name is clicked
  const handleListChange = (event) => {
    const breedName = event.target.value
    navigate(`/gallery/${breedName}`)
  }

//Renders the list of breeds as a dropdown menu
  return (
    <div>
      <h1 className="page-title">Select one breed</h1>
      
      {/* //Dropdown menu */}
      <div className="select-container-list">
        <select className="select-dropdown select-dropdown-list" onChange={handleListChange}>
          <option value="" disabled selected>Click here</option>

          {/* //Loop through breeds and render as options in the dropdown menu */}
          {breeds.map(breed => {
            return <option value={breed.toLowerCase()} key={breed}>{breed}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default List
/*** FREDERICO ALVES @ SHAPE GAMES ***/