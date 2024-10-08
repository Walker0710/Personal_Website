import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMicrosoftazure } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import './Home.css';
import Cover2 from '../../assets/Portfolio.mp4';
import event from '../../assets/Projects/event.png';
import nexus from '../../assets/Projects/nexus.png';
import pathway from '../../assets/Projects/pathway.png';
import sai from '../../assets/Projects/sai.png';



gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const endingRef = useRef(null);
  const workRefs = useRef([]);
  const workListRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 992) {
      gsap.to(homeRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '100%',
          scrub: 2,
        },
        backgroundColor: 'rgba(0,0,0,1)',
        duration: 3,
        ease: 'power2.inOut'
      });

      gsap.to(homeRef.current, {
        scrollTrigger: {
          trigger: endingRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        backgroundColor: 'rgba(0,0,0,0)',
        duration: 3,
        ease: 'power2.inOut',
        onEnter: () => {
          // containerRef.current.play();
        }
      });
    }
  }, []);

  

  useEffect(() => {
    const handleScroll = () => {
      workRefs.current.forEach((imgRef, index) => {
        const rect = imgRef.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          workListRefs.current.forEach((workItem) => workItem.classList.remove('highlight'));
          workListRefs.current[index].classList.add('highlight');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={homeRef}>

      <video
        src={Cover2}
        muted
        loop
        // autoPlay
        className="home-bg"
        ref={containerRef}
      ></video>
      <div id='home-all' className='home-all'>
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

        <div id='intro' className='intro'>
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

        <div id='work' className='work'>
          <h1 className='work-heading'>Works</h1>
          <div className='work-container'>
            <div className='work-list'>
              <div className='work-item' ref={el => workListRefs.current[0] = el}>
                SAIRAMA KRISHNA
              </div>
              <div className='work-item' ref={el => workListRefs.current[1] = el}>
                PATHWAYS
              </div>
              <div className='work-item' ref={el => workListRefs.current[2] = el}>
                EVENT RADAR
              </div>
              <div className='work-item' ref={el => workListRefs.current[3] = el}>
                ELAN PORTALS
              </div>
            </div>
            <div className='work-images'>
              <img ref={el => workRefs.current[0] = el} src={sai} alt="SAIRAMA KRISHNA" />
              <img ref={el => workRefs.current[1] = el} src={pathway} alt="PATHWAYS" />
              <img ref={el => workRefs.current[2] = el} src={event} alt="EVENT RADAR" />
              <img ref={el => workRefs.current[3] = el} src={nexus} alt="ELAN PORTALS" />
            </div>
          </div>
        </div>

        <div className='skillset'>
          <h1 className='skillset-heading'>SKILLSET</h1>
          <div className='skillset-list'>
            <div className='skillset-list-icon'>
              <DiJavascript1 size={150} />
            </div>
            <div className='skillset-list-icon'>
              <DiGit size={130} />
            </div>
            <div className='skillset-list-icon'>
              <BiLogoMongodb size={130} />
            </div>
            {/* <div className='skillset-list-icon'>
              <TbBrandCpp size={130} />
            </div> */}
            <div className='skillset-list-icon'>
              <DiNodejs size={130} />
            </div>
            <div className='skillset-list-icon'>
              <FaReact size={130} />
            </div>
            <div className='skillset-list-icon'>
              <SiMicrosoftazure size={130} />
            </div>
            <div className='skillset-list-icon'>
              <IoLogoFirebase size={130} />
            </div>
            <div className='skillset-list-icon'>
              <SiVercel size={130} />
            </div>
            <div className='skillset-list-icon'>
              <SiNetlify size={130} />
            </div>
          </div>
        </div>

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
            <div ref={endingRef} className='footer'>
              <div className='footer-contact'>
                <h2 className='footer-contact-heading'>ARE YOU PLANNING A PROJECT?</h2>
                <button className='connect-button'>CONTACT ME</button>
              </div>
              <div className='footer-social'>
                <a href="mailto:ankushsingh00710@gmail.com" target="_blank" rel="noopener noreferrer">
                  <p>EMAIL</p>
                </a>
                <a href="https://github.com/Walker0710" target="_blank" rel="noopener noreferrer">
                  <p>GITHUB</p>
                </a>
                <a href="https://www.linkedin.com/in/ankush-singh-8a43482a4/" target="_blank" rel="noopener noreferrer">
                  <p>LINKEDIN</p>
                </a>
                <a href="https://www.instagram.com/4nkush_singh" target="_blank" rel="noopener noreferrer">
                  <p>INSTAGRAM</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

