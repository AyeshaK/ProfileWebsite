import img from "./assets/IMG_8568.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="section1">
          <img src={img} alt="image" className="profile-image"></img>
          <span>Ayesha Karim</span>
        </div>
        <div className="section2">
          <span>
            Frontend Engineer with overall experience of 9 years,including 5
            years in building scalable and responsive user interfaces using
            React.js, Redux and Javascript. Proven expertise in frontend
            architecture, performance optimization, and delivering high-quality
            products
          </span>
        </div>
      </div>
      <div className="main">
        <div>
          Project <br />
          Spearheaded real-time analytics dashboards development, debugging and
          displaying 1million+ network metrics, improving network data
          visualisation by ~25%
        </div>
        <div>
          Project <br />
          Technical leadership of a global team of 4 developers to migrate
          legacy systems to React, resulting in a 25% increase in application
          performance
        </div>
        <div>
          Project <br />
          Engineered a UI performance test tool using Playwright reducing manual
          testing effort by ~70%
        </div>
      </div>
      <div className="footer">Copywright 2025</div>
    </>
  );
}

export default App;
