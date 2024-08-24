import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from '@gsap/react';
import './Home.css';
import Cover from '../../assets/Cover.mp4';

const Home = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 992) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: '.home-bg',
          scroller: 'body',
          start: 'top top',
          end: '100% 20%',
          scrub: true,
          markers: false
        },
        backgroundColor: 'rgba(0,0,0,1)',
        duration: 1
      });
    }
  }, []);

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

  // }, []);

  return (
    <>

      <video
        src={Cover}
        muted
        loop
        // autoPlay
        className="home-bg"
      ></video>
      <div className='home-all'>
        <div className='hero'>
          <div className='hero-creative'>
            creative <br /> DESIGNER & <br /> DEVELOPER
          </div>
          <div className='hero-intro'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book.
          </div>
        </div>

        <div className='intro'>
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
            DIGITAL BUSINESS. ADVISOR AND PARTNER OF
            SOME DIGITAL AND FINTECH STARTUPS. ALSO,
            JUDGE AT CSSDA AND THE WEBBY.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
