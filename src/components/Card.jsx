import img1 from './Card/images/img1.webp';
import img2 from './Card/images/img2.webp';
import img3 from './Card/images/img3.webp';
import img4 from './Card/images/img4.webp';
import img5 from './Card/images/img5.webp';
import img6 from './Card/images/img6.webp';
import img7 from './Card/images/img7.webp';
import img8 from './Card/images/img8.webp';
import img9 from './Card/images/img9.webp';
import img10 from './Card/images/img10.webp';
import btnArrow from '../components/Hero/images/btn-arrow.svg';
import './Card/style.css';

function Card() {
  return (
    <>
      <section className="cardMain">
        <h3 className="cardMainHeading">
          Latest reports from the Capgemini Research Institute
        </h3>
        <div className="rowOne">
          <div className="cardContent">
            <img className="cardImg" src={img1} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">The people experience advantage</h4>
              <p className="cardPara">
                How companies can make life better for their most important
                assets
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img2} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Intelligent products and services</h4>
              <p className="cardPara">
                Progress in digital technologies and rapidly evolving customer
                demand have led to a new level of interconnectivity
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img3} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Data for net zero</h4>
              <p className="cardPara">
                The growing urgency around climate change has placed it at the
                forefront of global issues.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img4} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Sustainable product design</h4>
              <p className="cardPara">
                Sustainability is a cornerstone of today’s manufacturing
                operations, but are organizations doing enough?
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img5} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Cloud sovereignty</h4>
              <p className="cardPara">
                The journey to cloud sovereignty – Assessing cloud potential to
                drive transformation and build trust
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img6} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Cybersecurity in smart factories</h4>
              <p className="cardPara">
                Smart factories are increasingly being utilized by industry as
                part of the transition toward digitization.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img7} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Reflect, rethink, reconsider</h4>
              <p className="cardPara">
                Food loss or waste continues to be a major problem across the
                lifecycle of food.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img8} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Digital twins</h4>
              <p className="cardPara">
                Digital twins, virtual replicas of physical systems that can
                model, simulate, monitor, analyze, and constantly optimize the
                physical world, will be at the core of this transformation.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img9} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Quantum technologies</h4>
              <p className="cardPara">
                How to prepare your organization for a quantum advantage now
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={img10} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">
                Unlocking the Value in Connected Health
              </h4>
              <p className="cardPara">
                Accelerated digital healthcare adoption amid the pandemic means
                now is the time for biopharma companies to transform their
                connected health portfolios
              </p>
            </div>
          </div>
        </div>
        <div className="heroCard-ButtonMain btnCardPos">
          <a href="#" className="heroCard-Button">
            See more reports <img src={btnArrow} className="ml-2" alt="" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Card;
