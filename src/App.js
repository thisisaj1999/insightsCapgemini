import Research from './components/Research';
import Conversations from './components/Conversations';
import StayInformed from './components/StayInformed';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <>
      {/* <div>
        <h2 className="mainPageHeading">
          Explore our latest thought leadership, ideas, and insights on the
          issues that are shaping the future of business and society.
        </h2>
      </div> */}
      <Hero />
      <Card />
      <Hero />
      {/* <Conversations></Conversations>
      <Research></Research>
      <StayInformed></StayInformed> */}
    </>
  );
}

export default App;
