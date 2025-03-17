import { useState } from "react"
// import cities from "../assets/cities.json"


const CreateNewListing = ({ListingData}) => {

    const [name, setName] = useState("");
    const [picture_url, setPicture_url] = useState("");
    const [neighbourhood, setNeighbourhood] = useState(false); // checkbox
    const [price, setPrice] = useState("");
    const [minimum_nights, setMinimum_nights] = useState("");
    const [review_scores_ratings, setReview_scores_ratings] = useState("");
    const [description, setDescription] = useState("");

  return (
    <form>
        <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event)=>{setName(event.target.value)
          }}
        />
      </label>

      <label>
        Picture:
        <input
          type="url"
          placeholder="URL"
          value={picture_url}
          onChange={(event)=>{setPicture_url(event.target.value)
          }}
        />
      </label>

      

      {/* <select onChange={(event)=>{setNeighbourhood(event.target.value)}}>
        City:
      {cities.map((city, index)=>
        <option key = {index} value={city.name}>{city.name}
        </option>
      )}
      </select> */}
        <colgroup></colgroup>
    </form>
  )
}

export default CreateNewListing


{/* <div className = "listing-item">
      <div className="listing-details">
        <img src={oneItem.picture_url} alt={oneItem.name} className='listing-image'/>
        <div className = "small-details">
            {oneItem.host_is_superhost && <div className = "super-host-conditional"> ✨ Super Host</div>}
            <p>Neighbourhood: {oneItem.neighbourhood}</p>
            <p>Price:{oneItem.price}</p>
            <p>Minimum Nights:{oneItem.minimum_nights}</p>
            <p>Review Score:{oneItem.review_scores_ratings}</p>
        </div>
        </div>
        <h3>{oneItem.name}</h3>
        <p>{oneItem.description}</p>
        <div className = 'listing-item-btns'>
          <button className="item-button" onClick={()=>handleDelete(oneItem.id)}>Delete</button>
          <Link to={`/Details/${on}*/}


        
 
          