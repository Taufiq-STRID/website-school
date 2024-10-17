import { Carousel } from "react-bootstrap";
import hero1 from './../aset/sma.jpg';
import hero2 from './../aset/sma1.jpg';
import hero3 from './../aset/sma2.jpg';

const Hero = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Gedung Pondok Informatika 2025</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Kelas Pondok Informatika 2025</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Gedung Ke Dua Pondok Informatika 2026</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
