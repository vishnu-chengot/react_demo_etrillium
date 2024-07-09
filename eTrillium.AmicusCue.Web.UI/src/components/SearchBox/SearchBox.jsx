// // src/components/SearchBox.jsx
// import React, { useState } from 'react';
// import './SearchBox.css'; // Create this CSS file for styling

// const SearchBox = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleFocus = () => {
//     setExpanded(true);
//   };

//   const handleBlur = () => {
//     setExpanded(false);
//   };

//   return (
//     <div className={`search-box ${expanded ? 'expanded' : ''}`}>
//       <input
//         type="text"
//         placeholder="Search..."
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//       />
//     </div>
//   );
// };

// export default SearchBox;
// src/components/SearchBox.jsx
// import React, { useState } from 'react';
// // import './SearchBox.css'; // Create this CSS file for styling

// const SearchBox = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleFocus = () => {
//     setExpanded(true);
//   };

//   const handleBlur = () => {
//     setExpanded(false);
//   };

//   return (
//     <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
//       <div className="row">
//         <div className="col-lg-12">
//           <input
//             type="text"
//             className="cs_form_field"
//             placeholder="Search..."
//           />
//           <div className="cs_height_42 cs_height_xl_25" />
//         </div>
//         <div className="col-lg-12">
//           <div className="cs_height_18" />
//           <button className="cs_btn cs_style_1">
//             <span>Search</span>
//             <i>
//               <img src="/images/icons/arrow_white.svg" alt="Icon" />
//               <img src="/images/icons/arrow_white.svg" alt="Icon" />
//             </i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;





import React, { useState } from 'react';
// import './SearchBox.css'; // Make sure this CSS file is created and imported

const SearchBox = () => {
  const [expanded, setExpanded] = useState(false);

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
      <div className="row">
        <div className="col-lg-12">
          <input
            type="text"
            className={`cs_form_field ${expanded ? 'expanded' : ''}`}
            placeholder="Search..."
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="col-lg-12">
          <div className="cs_height_18" />
          <button className="cs_btn cs_style_1">
            <span>Search</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;


