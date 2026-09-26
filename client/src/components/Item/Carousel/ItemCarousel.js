import Carousel from 'react-bootstrap/Carousel';
import './ItemCarousel.css';

const ProductCarousel = (props) => {
    const images = props.item?.image || [];

    return (
        <div className="product__carousel__container">
            <div className="product__carousel">
                {images.length > 0 ? (
                    <Carousel variant="dark" interval={4000}>
                        {images.map((image, index) => (
                            <Carousel.Item key={image.filename || index}>
                                <div className="carousel__image__container">
                                    <img
                                        className="carousel__image"
                                        src={`http://localhost:5000/${props.item.category}/${image.filename}`}
                                        alt={props.item.name}
                                    />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                ) : (
                    <p>No image available</p>
                )}
            </div>
        </div>
    );
};

export default ProductCarousel;