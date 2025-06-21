// // import React from 'react';
// // import SectionHeading from './SectionHeading';

// // export default function Experience({ data }) {
// //   const { sectionHeading, allExperience } = data;

// //   return (
// //     <section className="section gray-bg">
// //       <div className="container">
// //         <SectionHeading
// //           miniTitle={sectionHeading.miniTitle}
// //           title={sectionHeading.title}
// //         />
// //         <div className="row gy-3">
// //           {allExperience?.map((item, index) => (
// //             <div
// //               className="col-12"
// //               key={index}
// //               data-aos="fade-up"
// //               data-aos-duration="1200"
// //               data-aos-delay={index * 100}
// //             >
// //               <div className="ex-box">
// //                 <div className="row gy-4">
// //                   <div className="col-md-4 col-lg-3">
// //                     <div className="ex-left">
// //                       <h4>{item.designation}</h4>
// //                       <span>{item.company}</span>
// //                       <p>{item.duration}</p>
// //                       <label>{item.jobType}</label>
// //                     </div>
// //                   </div>
// //                   <div className="col-md-8 col-lg-9">
// //                     <div className="ex-right">
// //                       <h5>{item.companyTitle}</h5>
// //                       <p className="m-0">{item.companyDescription}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import React from 'react';
// import SectionHeading from './SectionHeading';

// export default function Experience({ data }) {
//   const { sectionHeading, allExperience } = data;

//   return (
//     <section className="section gray-bg">
//       <div className="container">
//         <SectionHeading
//           miniTitle={sectionHeading.miniTitle}
//           title={sectionHeading.title}
//         />
//         <div className="row gy-4">
//           {allExperience?.map((item, index) => (
//             <div
//               className="col-3"
//               key={index}
//               data-aos="fade-up"
//               data-aos-duration="1200"
//               data-aos-delay={index * 100}
//             >
//               <div className="ex-box">
//   <div>
//     <div>
//       <div className="ex-left">
//         {/* <h4>{item.designation}</h4> */}
//         {/* <span>{item.company}</span> */}
//         {/* <p>{item.duration}</p> */}
//         {/* <label>{item.jobType}</label> */}
//       </div>
//     </div>
//     <div>
//       <div className="ex-right">
//         <h5>
//           {item.companyTitle}
//           <span className="download-icon" onClick={() => downloadCertificate("./html certificate.jpg")}>
//             ⬇️
//           </span>
//         </h5>
//         <p>{item.companyDescription}</p>
//       </div>
//     </div>
//   </div>
// </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// import React from 'react';
// import SectionHeading from './SectionHeading';

// // Import the certificate image if it's inside src/assets/
// import certificateImage from './html certificate.jpg';

// export default function Experience({ data }) {
//   const { sectionHeading, allExperience } = data;

//   // Download function
//   const downloadCertificate = () => {
//     const link = document.createElement("a");
//     link.href = certificateImage; // Use imported image
//     link.download = "html_certificate.jpg"; // Set download filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="section gray-bg">
//       <div className="container">
//         <SectionHeading
//           miniTitle={sectionHeading.miniTitle}
//           title={sectionHeading.title}
//         />
//         <div className="row gy-4">
//           {allExperience?.map((item, index) => (
//             <div
//               className="col-3"
//               key={index}
//               data-aos="fade-up"
//               data-aos-duration="1200"
//               data-aos-delay={index * 100}
//             >
//               <div className="ex-box">
//                 <div className="ex-left">
//                   {/* Display image */}
//                   <img src={certificateImage} alt="Certificate" className="certificate-img" />
//                 </div>
//                 <div className="ex-right">
//                   <h5>
//                     {item.companyTitle}
//                     <span className="download-icon" onClick={downloadCertificate}>
//                       ⬇️
//                     </span>
//                   </h5>
//                   <p>{item.companyDescription}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import SectionHeading from './SectionHeading';

// export default function Experience({ data }) {
//   const { sectionHeading, allExperience } = data;

//   // Certificate image paths
//   const certificateImages = [
//     './images/html certificate.jpg',
//     './images/java oracle.png',
//     './images/python certficate.jpg',
//     '/images/JS.jpg',
//     '/images/redhatfinalexam.jpg',
//     '/images/ccna.jpg',
//     '/images/cisco c.jpg',
//     './images/nptel_dbms.jpg'

//   ];

//   // Download function
//   const downloadCertificate = (imageUrl) => {
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = imageUrl.split('/').pop(); // Extract filename dynamically
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="section gray-bg" id="certificate">
//       <div className="container">
//         <SectionHeading
//           miniTitle={sectionHeading.miniTitle}
//           title={sectionHeading.title}
//         />
//         <div className="row gy-4">
//           {allExperience?.map((item, index) => (
//             <div
//               className="col-3"
//               key={index}
//               data-aos="fade-up"
//               data-aos-duration="1200"
//               data-aos-delay={index * 100}
//             >
//               <div className="ex-box">
//                 <div className="ex-left">
//                   {/* Assign different certificate images dynamically */}
//                   <img 
//                     src={certificateImages[index % certificateImages.length]} 
//                     alt="Certificate" 
//                     className="certificate-img" 
//                   />
//                 </div>
//                 <div className="ex-right">
//                   <h5>
//                     {item.companyTitle}
//                     <span 
//                       className="download-icon" 
//                       onClick={() => downloadCertificate(certificateImages[index % certificateImages.length])}
//                     >
//                       ⬇️
//                     </span>
//                   </h5>
//                   <p>{item.companyDescription}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import SectionHeading from './SectionHeading';

export default function Experience({ data }) {
  const { sectionHeading, allExperience } = data;

  // Certificate image paths
  const certificateImages = [
    './images/html certificate.jpg',
    './images/java oracle.png',
    './images/python certficate.jpg',
    '/images/JS.jpg',
    '/images/redhatfinalexam.jpg',
    '/images/ccna.jpg',
    '/images/cisco c.jpg',
    './images/nptel_dbms.jpg'
  ];

  // Download function
  const downloadCertificate = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop(); // Extract filename dynamically
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section gray-bg" id="certificate">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-4">
          {allExperience?.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={index}
              // data-aos="fade-up"
              // data-aos-duration="1200"
              // data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <div className="ex-left">
                  {/* Assign different certificate images dynamically */}
                  <img 
                    src={certificateImages[index % certificateImages.length]} 
                    alt="Certificate" 
                    className="certificate-img" 
                  />
                </div>
                <div className="ex-right">
                  <h5>
                    {item.companyTitle}
                    <span 
                      className="download-icon" 
                      onClick={() => downloadCertificate(certificateImages[index % certificateImages.length])}
                    >
                      ⬇️
                    </span>
                  </h5>
                  <p>{item.companyDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
