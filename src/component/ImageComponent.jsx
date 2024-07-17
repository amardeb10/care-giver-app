import "./Quiz.css";
const ImageComponent = ({ url }) => {
  return (
    <div>
      <img className="image-component" src={url} alt="GCP Image" />
    </div>
  );
};

export default ImageComponent;
