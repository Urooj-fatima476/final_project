import React, { useEffect } from 'react';
import AboutUs from './AboutUs';

const Categories = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <div className="visme_d"
           data-title="Untitled Project"
           data-url="90xz08yg-untitled-project?fullPage=true"
           data-domain="forms"
           data-full-page="true"
           data-min-height="100vh"
           data-form-id="16652">
      </div>
      <AboutUs />
    </div>
  );
}

export default Categories;

// // <div class="visme_d" data-title="Untitled Project" data-url="90xz08yg-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="16652"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>

// import React from 'react'
// import AboutUs from './AboutUs';
// const Categories = () => {
//   return (
//     <div>
//       <h1>hello</h1>
    
//       <AboutUs />
//     </div>
//   )
// }

// export default Categories
