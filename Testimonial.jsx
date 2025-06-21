// import React from 'react';
// import SectionHeading from './SectionHeading';
// import Slider from 'react-slick';

// export default function Testimonial({ data }) {
//   const { sectionHeading, allTestimonial } = data;
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 4000,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//   };
//   return (
//     <section className="section effect-section pb-0">
//       <div className="effect-3">
//         <img src="/images/effect-3.svg" title alt="" />
//       </div>
//       <div className="effect-4">
//         <img src="/images/effect-4.svg" title alt="" />
//       </div>
//       <div className="container">
//         <SectionHeading
//           miniTitle={sectionHeading.miniTitle}
//           title={sectionHeading.title}
//           variant="text-center"
//         />
//         <div data-aos="fade" data-aos-duration="1200" data-aos-delay="300">
//           <Slider {...settings}>
//             {allTestimonial?.map((item, index) => (
//               <div key={index}>
//                 <div className="testimonial-box">
//                   <div className="t-user">
//                     <img src={item.avatarImg} alt="Avatar" />
//                   </div>
//                   <div className="t-text">{item.reviewText}</div>
//                   <div className="t-person">
//                     <h6>{item.avatarName}</h6>
//                     <span>{item.avatarCompany}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState, useEffect } from 'react';

// export default function SkillsSection() {
//   const skillsData = [
//     { name: 'React', level: 90 },
//     { name: 'Node.js', level: 85 },
//     { name: 'JavaScript', level: 80 },
//     { name: 'Python', level: 75 },
//     { name: 'Git', level: 75 },
//     { name: 'Java', level: 70 },
//     { name: 'SQL', level: 70 },
//   ];

//   const [progress, setProgress] = useState(
//     skillsData.map(() => 0) // Initialize progress at 0%
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress.map((value, index) =>
//           value < skillsData[index].level ? value + 1 : value
//         )
//       );
//     }, 50); // Adjust speed for smooth growth

//     return () => clearInterval(interval);
//   }, [skillsData]);

//   return (
//     <section className="section effect-section pb-0">
//       {/* Animation Effects */}
//       <div className="effect-3">
//         <img src="/images/effect-3.svg" title="" alt="" />
//       </div>
//       <div className="effect-4">
//         <img src="/images/effect-4.svg" title="" alt="" />
//       </div>

//       {/* Skills Section */}
//       <div className="container">
//         <div style={{color:'white',fontSize:'30px',textAlign:"center",fontFamily:'serif'}}>Skills</div>
//         <div style={{ marginTop: '40px',width: 700,marginLeft:'350px',color:'white' }}>
//           {skillsData.map((skill, index) => (
//             <div
//               key={index}
//               style={{
//                 marginBottom: '20px',
//               }}
//             >
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   marginBottom: '6px',
//                   fontSize: '1rem',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 <span>{skill.name}</span>
//                 <span>{progress[index]}%</span>
//               </div>
//               <div
//                 style={{
//                   backgroundColor: '#e0e0e0',
//                   borderRadius: '10px',
//                   overflow: 'hidden',
//                   height: '8px',
//                 }}
//               >
//                 <div
//                   style={{
//                     backgroundColor: '#007bff',
//                     height: '100%',
//                     width: `${progress[index]}%`,
//                     transition: 'width 0.1s linear',
//                     borderRadius: '10px',
//                   }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from 'react';

export default function SkillsSection() {
  const skillsData = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 70 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'Java', level: 75 },
    // { name: 'Git', level: 75 },
    { name: 'SQL', level: 60 },
  ];

  const [progress, setProgress] = useState(
    skillsData.map(() => 0) // Initialize progress at 0%
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress.map((value, index) =>
          value < skillsData[index].level ? value + 1 : value
        )
      );
    }, 50); // Adjust speed for smooth growth

    return () => clearInterval(interval);
  }, [skillsData]);

  return (
    <section className="section effect-section pb-0" id="skills">
      {/* Animation Effects */}
      <div className="effect-3">
        <img src="/images/effect-3.svg" title="" alt="" />
      </div>
      <div className="effect-4 right-animation">
        <img src="/images/effect-4.svg" title="" alt="" />
      </div>

      {/* Skills Section */}
      <div className="container">
        <div
          style={{
            color: 'white',
            fontSize: '30px',
            textAlign: 'center',
            fontFamily: 'serif',
          }}
        >
          Skills
        </div>
        <div
          style={{
            marginTop: '40px',
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'white',
            padding: '0 15px',
          }}
        >
          {skillsData.map((skill, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '6px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                <span>{skill.name}</span>
                <span>{progress[index]}%</span>
              </div>
              <div
                style={{
                  backgroundColor: '#e0e0e0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '8px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#007bff',
                    height: '100%',
                    width: `${progress[index]}%`,
                    transition: 'width 0.1s linear',
                    borderRadius: '10px',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
