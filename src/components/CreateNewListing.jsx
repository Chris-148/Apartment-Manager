import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
// import cities from "../assets/cities.json"


const CreateNewListing = ({listingDataState, setListingDataState}) => {

    const [name, setName] = useState("");
    const [picture_url, setPicture_url] = useState("");
    const [neighbourhood, setNeighbourhood] = useState(""); // checkbox
    const [price, setPrice] = useState("");
    const [minimum_nights, setMinimum_nights] = useState("");
    const [review_scores_ratings, setReview_scores_ratings] = useState("");
    const [description, setDescription] = useState("");
    const nav = useNavigate();
    

    function handleCreateListing(event) {
      event.preventDefault()

      const newListingToAdd = {
        id: uuidv4(),
        name,
        picture_url,
        neighbourhood,
        price,
        minimum_nights,
        review_scores_ratings,
        description
      };

      console.log(newListingToAdd)
      setListingDataState([newListingToAdd, ...listingDataState])
      

      setName("");
      setPicture_url("");
      setNeighbourhood(""); 
      setPrice("");
      setMinimum_nights("");
      setReview_scores_ratings("");
      setDescription("");

      nav("/");
      
    }




  return (
    <form onSubmit = {handleCreateListing}>
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
        City:
        <input
          type="text"
          placeholder="City"
          value={neighbourhood}
          onChange={(event)=>{setNeighbourhood(event.target.value)
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

      <label>
      Price:
        <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(event)=>setPrice(event.target.value)}
        />
       </label>


       <label>
      Minimum Nights:
        <input
        type="number"
        placeholder="minimum nights"
        value={minimum_nights}
        onChange={(event)=>setMinimum_nights(event.target.value)}
        />
       </label>


       <label>
      Review Score:
        <input
        type="number"
        placeholder="Review Score"
        min = "1"
        max = "10"
        value={review_scores_ratings}
        onChange={(event)=>setReview_scores_ratings(event.target.value)}
        />
       </label>

       <label>
      Description:
        <textarea
        placeholder="description"
        value={description}
        onChange={(event)=>setDescription(event.target.value)}
        />
       </label>
       <button type="submit">Submit</button>
    </form>
  )
}

export default CreateNewListing


      {/* <select onChange={(event)=>{setNeighbourhood(event.target.value)}}>
        City:
      {cities.map((city, index)=>
        <option key = {index} value={city.name}>{city.name}
        </option>
      )}
      </select> */} 
        
 
          