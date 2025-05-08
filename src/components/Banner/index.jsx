import defaultImage from '../../assets/image/image-shore.png';

function Banner({ image = defaultImage, showTitle = true, title = "Chez vous, partout et ailleurs" }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-image" />
      {showTitle && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;