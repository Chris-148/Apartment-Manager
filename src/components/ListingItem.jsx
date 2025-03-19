import { Link } from "react-router-dom";


const ListingItem = ({oneItem, handleDelete}) => {
  

  return (
    <div className = "listing-item">
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
          <button className="item-button" onClick={()=>handleDelete(oneItem.id)}>Delete Listing</button>
          <Link to={`/Details/${oneItem.id}`}>
          <button className="item-button">Show Details</button>
          </Link>
          <Link to={`/UpdateListingPage/${oneItem.id}`}>
          <button className="item-button">Update Listing</button>
          </Link>
        </div>
    </div>
  );
}

export default ListingItem

