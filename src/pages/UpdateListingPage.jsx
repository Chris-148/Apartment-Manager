import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";

export const UpdateListingPage = ({listingDataState, setListingDataState}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [picture_url, setPicture_url] = useState("");
    const [neighbourhood, setNeighbourhood] = useState(""); // checkbox
    const [price, setPrice] = useState("");
    const [minimum_nights, setMinimum_nights] = useState("");
    const [review_scores_ratings, setReview_scores_ratings] = useState("");
    const [description, setDescription] = useState("");
    const nav = useNavigate();
    
    // listing Id to be updated
    const { listingId } = useParams();

    // console.log(listingDataState)

    useEffect(() => {
      const theFoundListing = listingDataState.find((oneListing)=>{
         if (oneListing.id === Number(listingId)) {
          return true;
        };
        
    })
    
    setId(theFoundListing.id),
    setName(theFoundListing.name),
    setPicture_url(theFoundListing.picture_url),
    setNeighbourhood(theFoundListing.neighbourhood),
    setPrice(theFoundListing.price),
    setMinimum_nights(theFoundListing.minimum_nights),
    setReview_scores_ratings(theFoundListing.review_scores_ratings),
    setDescription(theFoundListing.description)
      },[])

    function handleUpdateListing(event) {
      event.preventDefault()
    
      
      const updatedListing = {
        //Problem: The original object has way more properties and we are not dragging along existing (not updated) properties
        id,
        name,
        picture_url,
        neighbourhood,
        price,
        minimum_nights,
        review_scores_ratings,
        description
      };

      // console.log(updatedListing)
      const updatedArrayofListing = listingDataState.map((oneListing) => {
        if (oneListing.id === Number(listingId)) {
          return updatedListing;
        } else {
          return oneListing;
        }
      });
      console.log(updatedArrayofListing)
      setListingDataState(updatedArrayofListing)
      

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
    <form onSubmit = {handleUpdateListing}>
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
        type="text"
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
       <button type="submit">Update</button>
    </form>
  )
}
