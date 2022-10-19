import imgBack from './Hero/images/back.webp';
import imgBack2 from './Hero/images/back2.webp';
import imgBack3 from './Hero/images/back3.webp';
import btnArrow from './Hero/images/btn-arrow.svg';
import './Hero/style.css';

function Hero() {
  return (
    <>
      <section className="heroMain">
        <div className="hero">
          <img src={imgBack} className="heroImg" alt="" />
          <img src={imgBack2} className="heroImg2" alt="" />
          <img src={imgBack3} className="heroImg3" alt="" />
          <div className="heroCard">
            <div className="heroCard-Content">
              <h4>Leading sustainability</h4>
              <p className="heroCard-Content-Para">
                In the race to save the planet, we bring insights on how to go
                beyond corporate responsibility to make sustainability a source
                of value.
              </p>
            </div>
            <div className="heroCard-ButtonMain">
              <a href="#" className="heroCard-Button">
                Read More <img src={btnArrow} className="ml-2" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
