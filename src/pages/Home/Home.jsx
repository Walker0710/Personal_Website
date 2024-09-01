// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { useGSAP } from '@gsap/react';
// import './Home.css';
// import Marquee from 'react-fast-marquee';

// import Cover from '../../assets/Cover.mp4';
// import work1 from '../../assets/work1.png';
// import work2 from '../../assets/work2.png';

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {

//   const containerRef = useRef(null);
//   const homeRef = useRef(null);

//   // useEffect(() => {
//   //   gsap.registerPlugin(ScrollTrigger);

//   //   if (window.innerWidth > 992) {
//   //     gsap.to(containerRef.current, {
//   //       scrollTrigger: {
//   //         trigger: '.home-bg',
//   //         scroller: 'body',
//   //         start: 'top top',
//   //         end: '100% 20%',
//   //         scrub: true,
//   //         // markers: true
//   //       },
//   //       backgroundColor: 'rgba(0,0,0,1)',
//   //       duration: 1
//   //     });
//   //   }
//   // }, []);

//   // useGSAP(() => {
//   //   if (window.innerWidth > 992) {
//   //     gsap.to(containerRef.current, {
//   //       scrollTrigger: {
//   //         trigger: '.home-bg',
//   //         scroller: 'body',
//   //         start: 'top top',
//   //         end: '100% 20%',
//   //         scrub: true,
//   //         markers: false
//   //       },
//   //       backgroundColor: 'rgba(0,0,0,1)',
//   //       duration: 1
//   //     });
//   //   }

//   // }, []);

//   return (
//     <>

//       <video
//         src={Cover}
//         muted
//         loop
//         // autoPlay
//         className="home-bg"
//         ref={containerRef}
//       ></video>
//       <div className='home-all'>
//         <div className='hero'>
//           <div className='hero-creative'>
//             <h1 className='hero-first font-style-2'>creative</h1>
//             <div className='hero-yoo'>
//               <h1 className='hero-second font-style-1'>DESIGNER </h1>
//               <h1 className='hero-third font-style-2'>& </h1>
//             </div>
//             <h1 className='hero-fourth font-style-1'>DEVELOPER </h1>
//           </div>
//           <div className='hero-intro'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//             when an unknown printer took a galley of type and scrambled it to make a type specimen
//             book.
//           </div>
//         </div>

//         <div className='intro'>
//           <div className='intro-details'>
//             <h1 className='intro-heading'>YOO, I AM ANKUSH</h1>
//             <p className='intro-content'>I USE MY PASSION AND SKILLS
//               TO CREATE DIGITAL PRODUCTS AND
//               EXPERIENCES. NATIONAL AND INTERNATIONAL
//               CUSTOMERS RELY ON ME FOR DESIGN,
//               IMPLEMENTATION, AND MANAGEMENT OF
//               THEIR DIGITAL PRODUCTS. AS AN
//               INDEPENDENT, I WORK ALSO WITH WEB
//               AGENCIES, COMPANIES, STARTUPS AND
//               INDIVIDUALS TO CREATE A BLUEPRINT FOR THE
//               DIGITAL BUSINESS.</p>
//           </div>
//           <div className='intro-structure'>
//             photo
//           </div>
//         </div>

//         <div className='work'>
//           <h1 className='work-heading'>Works</h1>
//           <div className='work-list'>
//             <div className='work-list-div sairama'>
//               <h2 className='work-list-heading'>SAIRAMA KRISHNA</h2>
//               <img className='work-img' src={work1} alt="work" />
//             </div>
//             <div className='work-list-div pathway'>
//               <h2 className='work-list-heading'>PATHWAYS</h2>
//               <img className='work-img' src={work2} alt="work" />
//             </div>
//             <div className='work-list-div event-radar'>
//               <h2 className='work-list-heading'>EVENT RADAR</h2>
//               <img className='work-img' src={work1} alt="work" />
//             </div>
//             <div className='work-list-div portals'>
//               <h2 className='work-list-heading'>ELAN PORTALS</h2>
//               <img className='work-img' src={work2} alt="work" />
//             </div>
//           </div>
//         </div>


//         <div className='skillset'>
//           <h1>Skillset</h1>
//           <div>
//             <div>
//               , AZURE
//             </div>
//             <div>
//               , C++
//             </div>
//             <div>
//               , JS
//             </div>
//             <div>
//               , NodeJS
//             </div>
//             <div>
//               , ReactJS
//             </div>
//             <div>
//               , MONGODB
//             </div>
//             <div>
//               , GIT & GITHUB
//             </div>
//             <div>
//               , MONGODB
//             </div>
//             <div>
//               , MONGODB
//             </div>
//           </div>
//         </div>

//         <div className='tool-i-use'>
//           <h1>Tools i use</h1>
//           <Marquee autoFill speed={100} direction={'right'}>
//             <div>
//               , VS CODE
//             </div>
//             <div>
//               , FIREBASE
//             </div>
//             <div>
//               , NETLIFY
//             </div>
//           </Marquee>
//         </div>

//         {/* wapas video chalegi */}
//         <div className='ending'>
//           <div className='ending-connect'>
//             <h1 className='connect-head connect-first'>LET'S</h1>
//             <h1 className='connect-head connect-second'>CONNECT</h1>
//           </div>
//           <div className='ending-inter-foot'>
//             <div className='connect-interested'>
//               <h2 className='connect-interested-heading'>WHAT INTEREST'S ME</h2>
//               <div className='connect-interested-list'>
//                 <div className='connect-interested-list-first'>
//                   <button className='connect-button'>FRONTEND DEVELOPMENT</button>
//                   <button className='connect-button'>BACKEND DEVELOPMENT</button>
//                   <button className='connect-button'>UX/UI DESIGN</button>
//                 </div>
//                 <div className='connect-interested-list-second'>
//                   <button className='connect-button'>STARTUPS</button>
//                   <button className='connect-button'>PIZZA</button>
//                 </div>
//               </div>
//             </div>
//             <div className='footer'>
//               <div className='footer-contact'>
//                 <h2 className='footer-contact-heading'>ARE YOU PLANNING A PROJECT?</h2>
//                 <button className='connect-button'>CONTACT ME</button>
//               </div>
//               <div className='footer-social'>
//                 <p>EMAIL</p>
//                 <p>GITHUB</p>
//                 <p>LINKEDIN</p>
//                 <p>INSTAGRAM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;




import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import './Home.css';
import Marquee from 'react-fast-marquee';

import Cover from '../../assets/Cover.mp4';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const containerRef = useRef(null);
  const homeRef = useRef(null);

    // useGSAP(() => {
  //   if (window.innerWidth > 992) {
  //     gsap.to(containerRef.current, {
  //       scrollTrigger: {
  //         trigger: '.home-bg',
  //         scroller: 'body',
  //         start: 'top top',
  //         end: '100% 20%',
  //         scrub: true,
  //         markers: false
  //       },
  //       backgroundColor: 'rgba(0,0,0,1)',
  //       duration: 1
  //     });
  //   }

  // useEffect(() => {
  //   if (window.innerWidth > 992) {
  //     gsap.to(homeRef.current, {
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: 'bottom top', // When the bottom of the video reaches the top of the viewport
  //         end: '+=500', // End 500px after the start
  //         scrub: true,
  //       },
  //       backgroundColor: 'rgba(0,0,0,1)',
  //       duration: 1
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (window.innerWidth > 992) {
      gsap.to(homeRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top', 
          end: '100%', 
          scrub: true,
        },
        backgroundColor: 'rgba(0,0,0,1)',
        duration: 1
      });
    }
  }, []);


  return (
    <div ref={homeRef}>

      <video
        src={Cover}
        muted
        loop
        autoPlay
        className="home-bg"
        ref={containerRef}
      ></video>
      <div className='home-all'>
        <div className='hero'>
          <div className='hero-creative'>
            <h1 className='hero-first font-style-2'>creative</h1>
            <div className='hero-yoo'>
              <h1 className='hero-second font-style-1'>DESIGNER </h1>
              <h1 className='hero-third font-style-2'>& </h1>
            </div>
            <h1 className='hero-fourth font-style-1'>DEVELOPER </h1>
          </div>
          <div className='hero-intro'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book.
          </div>
        </div>

        <div className='intro'>
          <div className='intro-details'>
            <h1 className='intro-heading'>YOO, I AM ANKUSH</h1>
            <p className='intro-content'>I USE MY PASSION AND SKILLS
              TO CREATE DIGITAL PRODUCTS AND
              EXPERIENCES. NATIONAL AND INTERNATIONAL
              CUSTOMERS RELY ON ME FOR DESIGN,
              IMPLEMENTATION, AND MANAGEMENT OF
              THEIR DIGITAL PRODUCTS. AS AN
              INDEPENDENT, I WORK ALSO WITH WEB
              AGENCIES, COMPANIES, STARTUPS AND
              INDIVIDUALS TO CREATE A BLUEPRINT FOR THE
              DIGITAL BUSINESS.</p>
          </div>
          <div className='intro-structure'>
            photo
          </div>
        </div>

        <div className='work'>
          <h1 className='work-heading'>Works</h1>
          <div className='work-list'>
            <div className='work-list-div sairama'>
              <h2 className='work-list-heading'>SAIRAMA KRISHNA</h2>
              <img className='work-img' src={work1} alt="work" />
            </div>
            <div className='work-list-div pathway'>
              <h2 className='work-list-heading'>PATHWAYS</h2>
              <img className='work-img' src={work2} alt="work" />
            </div>
            <div className='work-list-div event-radar'>
              <h2 className='work-list-heading'>EVENT RADAR</h2>
              <img className='work-img' src={work1} alt="work" />
            </div>
            <div className='work-list-div portals'>
              <h2 className='work-list-heading'>ELAN PORTALS</h2>
              <img className='work-img' src={work2} alt="work" />
            </div>
          </div>
        </div>


        <div className='skillset'>
          <h1>Skillset</h1>
          <div>
            <div>
              , AZURE
            </div>
            <div>
              , C++
            </div>
            <div>
              , JS
            </div>
            <div>
              , NodeJS
            </div>
            <div>
              , ReactJS
            </div>
            <div>
              , MONGODB
            </div>
            <div>
              , GIT & GITHUB
            </div>
            <div>
              , MONGODB
            </div>
            <div>
              , MONGODB
            </div>
          </div>
        </div>

        <div className='tool-i-use'>
          <h1>Tools i use</h1>
          <Marquee autoFill speed={100} direction={'right'}>
            <div>
              , VS CODE
            </div>
            <div>
              , FIREBASE
            </div>
            <div>
              , NETLIFY
            </div>
          </Marquee>
        </div>

        {/* wapas video chalegi */}
        <div className='ending'>
          <div className='ending-connect'>
            <h1 className='connect-head connect-first'>LET'S</h1>
            <h1 className='connect-head connect-second'>CONNECT</h1>
          </div>
          <div className='ending-inter-foot'>
            <div className='connect-interested'>
              <h2 className='connect-interested-heading'>WHAT INTEREST'S ME</h2>
              <div className='connect-interested-list'>
                <div className='connect-interested-list-first'>
                  <button className='connect-button'>FRONTEND DEVELOPMENT</button>
                  <button className='connect-button'>BACKEND DEVELOPMENT</button>
                  <button className='connect-button'>UX/UI DESIGN</button>
                </div>
                <div className='connect-interested-list-second'>
                  <button className='connect-button'>STARTUPS</button>
                  <button className='connect-button'>PIZZA</button>
                </div>
              </div>
            </div>
            <div className='footer'>
              <div className='footer-contact'>
                <h2 className='footer-contact-heading'>ARE YOU PLANNING A PROJECT?</h2>
                <button className='connect-button'>CONTACT ME</button>
              </div>
              <div className='footer-social'>
                <p>EMAIL</p>
                <p>GITHUB</p>
                <p>LINKEDIN</p>
                <p>INSTAGRAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


