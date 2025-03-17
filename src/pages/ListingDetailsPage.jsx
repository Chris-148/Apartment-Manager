import { useParams } from "react-router-dom"


const ListingDetailsPage = ({listingData}) => {
  const { listingId } = useParams();
  // const listingDetails = listingData.find((item) => item.id === Number(listingId));
  const listingDetailsArray = (listingData.filter((listingItem)=>{
    if (listingItem.id === Number(listingId)) {
      return true;
    }
  }))
  
const listingDetails = listingDetailsArray[0]
  
  

  return (
    <>
    <div>{listingDetails.id}</div>
    </>
  )
}

export default ListingDetailsPage