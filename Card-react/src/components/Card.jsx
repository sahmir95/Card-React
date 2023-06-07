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
      <div className='btn'>
        <button>
            <a href="#">SHARE</a>
        </button>
        <button>
            <a href="#">LEARN MORE</a>
        </button>
      </div>
    </div>
  );
};

export default Card;