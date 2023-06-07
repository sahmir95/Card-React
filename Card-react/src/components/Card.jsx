import './Card.css'
const Card = ({ title, image, description }) => {
  return (
    <div className="card-container">
      <img className="image"
        src={image} 
        alt={title} 
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

export default Card;