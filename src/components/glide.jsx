import Glider from 'react-glider'

const Glide = ({ slides }) => {
  const gliderConfig = {
    slidesToShow: 1,
    scrollLock: true,
    hasDots: true,
    draggable: true,
    resizeLock: true,
    exactWidth: true,  // Esta opción puede ayudar a prevenir el desbordamiento
  };

  return (
    <div className="container">
      <Glider {...gliderConfig}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-text">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Glider>
    </div>
  );
};

export default Glide