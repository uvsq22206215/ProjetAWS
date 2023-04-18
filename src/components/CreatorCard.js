import '../assets/css/CreatorCard.css'

function CreatorCard(props) {
  return (
  <div className='hp-creator'>
    <div className='img-container'>
      <img className='creator-img' src={props.image} alt='recipe creator image'/>
    </div>
    <h1>{props.name}</h1>
    <h3>{props.status}</h3>
  </div>
  );
}
export default CreatorCard;