import '../assets/css/CreatorCard.css'
import { useNavigate } from "react-router";


function CreatorCard(props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/author/${props.name}`);
  };


  return (
  <div className='hp-creator' onClick={handleOnClick}> 
    <div className='img-container'>
      <img className='creator-img' src={props.image} alt='recipe creator image'/>
    </div>
    <h1>{props.name}</h1>
    <h3>{props.status}</h3>
  </div>
  );
}
export default CreatorCard;