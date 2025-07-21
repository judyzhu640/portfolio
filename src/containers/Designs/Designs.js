// import React from "react";
// import { designs } from "../../assets/images/pinkworld_landingpage.jpeg";
// import "./Designs.scss";

// export default function Designs() {
//   return (
//     <div className="main" id="designs">
//       <h1 className="section-title">Design Gallery LALALA</h1>
//       <div className="designs-container">
//         {designs.map((design, index) => (
//           <div className="design-card" key={index}>
//             <img src={design.image} alt={design.title} className="design-image" />
//             <h2 className="design-title">{design.title}</h2>
//             <p className="design-description">{design.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import landingImage from "../../assets/images/pinkworld_landingpage.jpeg";
import posterImage from "../../assets/images/pinkworld_poster.jpeg";
import "./Designs.scss";

const designs = [
  {
    image: landingImage,
    title: "Pink World Landing Page",
    description: "A vibrant landing page design for Pink World."
  },
  {
    image: posterImage,
    title: "Pink World Poster",
    description: "A creative poster showcasing the theme of Pink World."
  }
];

export default function Designs() {
  return (
    <div className="main" id="designs">
      <h1 className="section-title">Design Gallery LALALA</h1>
      <div className="designs-container">
        {designs.map((design, index) => (
          <div className="design-card" key={index}>
            <img src={design.image} alt={design.title} className="design-image" />
            <h2 className="design-title">{design.title}</h2>
            <p className="design-description">{design.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}