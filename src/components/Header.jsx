import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";
import yaasir from "../images/yaasir.jpg";
import maxamed from "../images/maxamed.jpg";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from './footer';
import faarax from "../images/faarax.jpg"
 import jilaato from "../images/jilaato.jpg"
 import coofe from "../images/coofe.jpg"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Technical Skills (Progress Bars)
  const technicalSkills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '80%' },
    { name: 'JavaScript', level: '55%' },
    { name: 'React', level: '75%' },
    { name: 'mongodb', level: '50%' },
  ];

  // Professional Skills (Circular Progress)
  const professionalSkills = [
    { name: 'Creativity', value: 90 },
    { name: 'Communication', value: 55 },
    { name: 'Problem Solving', value: 65 },
    { name: 'Teamwork', value: 85 },
  ];

  // // Projects
  // const projects = [
  //   { title: 'Project One', description: 'Description of project one.', link: '#' },
  //   { title: 'Project Two', description: 'Description of project two.', link: '#' },
  //   { title: 'Project Three', description: 'Description of project three.', link: '#' },
  // ];


  const projects = [
    {
      name: "Start learning with us now",
      description: " Mashruuca: Waxaan ku dhisay mashruucan HTML iyo  CSS si aan u helo naqshad casri ah oo nadiif ah..",
      githubLink: "https://yaasir65.github.io/web-/",
      image: faarax, // Sawirka mashruucaaga halkan ku soo geli
    },
    {
      name: " jiilaato shop",
      description: " Mashruuca: Waxaan ku dhisay mashruucan HTML iyo Tailwind CSS si aan u helo naqshad casri ah oo nadiif ah",
      githubLink: " https://yaasir65.github.io/jilaato/",
      image: jilaato, // Sawirka mashruucaaga halkan ku soo geli
    },
    {
      name: " web blog cofe",
      description: "Mashruuca: Waxaan mashruucan ku dhisay HTML iyo Tailwind CSS, taasoo ii suurtagelinaysa inaan helo naqshad fudud oo casri ah",
      githubLink: "https://yaasir65.github.io/blog/",
      image: coofe, // Sawirka mashruucaaga halkan ku soo geli
    },
  ];;

  return (
    <div>
      {/* Home Section */}
     
      <section id='#'>
        
        <div className={`fixed flex w-full h-[75px] py-3 pt-5 text-white justify-between sm:justify-around ${isScrolled ? 'bg-red-500' : 'bg-black'}`}>
        
          <div>
          <a href="#" className="hover:text-orange-500 transition duration-300">
        
              <h1 className={`text-3xl mx-10 transition-colors duration-300 ${isScrolled ? 'hover:text-black' : 'text-white hover:text-red-600'}`}>
                MY
              </h1>
        </a>
           
          </div>

          <div className="hidden md:flex mx-10">
            <ul className="flex gap-16 text-2xl">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <ScrollLink key={section} to={section} smooth={true} duration={100}>
                  <li className={`${isScrolled ? 'hover:text-black' : 'hover:text-red-600'}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</li>
                </ScrollLink>
              ))}
            </ul>
          </div>

          <div className="md:hidden mx-5">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-[75px] left-16 w-full text-3xl bg-white text-black py-5 pl-8">
              <ul className="flex flex-col gap-8 text-2xl">
                {['about', 'skills', 'projects', 'contact'].map((section) => (
                  <ScrollLink key={section} to={section} smooth={true} duration={100} onClick={() => setIsMenuOpen(false)}>
                    <li className="hover:text-red-600">{section.charAt(0).toUpperCase() + section.slice(1)}</li>
                  </ScrollLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Hero Section */}
      <section className="sm:h-screen w-full h-[870px] bg-[#f1f1f1]">
        <div className="sm:flex">
          <div className="sm:pt-[210px] pt-[180px] sm:ml-[150px] ml-[80px]">
            <p className="text-xl text-black">Hello, my <span className="font-bold text-[#d94e0a]">name is</span></p>
            <h1 className="sm:text-8xl text-4xl mt-3 text-black">
              Mohamed <span className="font-bold text-[#d94e0a]">Ahamed</span>
            </h1>
            <div className="text-black mt-[20px] sm:ml-2">
              <TypeAnimation
                sequence={["I am a full stack developer.", 2000, "", 2000]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '2em', display: 'block' }}
                repeat={Infinity}
              />
            </div>
          </div>

          <div
            className="bg-cover bg-center sm:h-[500px] sm:w-[580px] h-[300px] w-[300px] mt-7 ml-[40px] sm:mx-0 sm:mt-[120px] rounded-full sm:mr-[100px] hover:bg-gray-500"
            style={{ backgroundImage: `url(${yaasir})` }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="flex flex-col lg:flex-row justify-center sm:pt-[10px] pt-[110px] items-center min-h-screen bg-black text-white p-4">
          <div className="flex justify-center sm:mt-[160px] items-center mb-6 lg:mb-0">
            <img src={maxamed} alt="Profile" className="rounded-full border-8 border-red-600 h-48 w-48 sm:h-64 sm:w-64" />
          </div>

          <div className="lg:ml-10 text-center lg:text-left">
            <h2 className="text-3xl ml-2 sm:pt-[90px] pt-16 text-white sm:text-6xl font-bold">
              About <span className="text-orange-500">Me</span>
              <div className="border-2 sm:mr-[190px] mx-[90px] sm:mx-0 mt-2 border-orange-500"></div>
            </h2>

            <h3 className="text-4xl sm:text-5xl font-bold sm:mt-[70px] mt-16 whitespace-nowrap">
              Full stack <span className="text-orange-500">
                <TypeAnimation
                  sequence={["developer.", 2000, "", 2000]}
                  wrapper="span"
                  speed={40}
                  style={{ fontSize: '1.em', display: 'inline' }}
                  repeat={Infinity}
                />
              </span>
            </h3>

            <p className="mt-4 text-gray-400 max-w-lg mx-auto lg:mx-0">
              Junior Fullstack Web Developer with a passion for building responsive, user-friendly web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. Experienced in both front-end and back-end development, with a goal to continuously learn and innovate to create digital solutions that help businesses grow. Proven ability to work independently or in a team to deliver high-quality projects on time.
            </p>
            <button 
  className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded mt-6" 
  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
>
  Contact me
</button>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className='bg-[#f1f1f1] '>
              <h1 className='  text-center     text-6xl pt-[120px]'>  <span className='text-orange-500 '>My</span> skills</h1>
              <div className="border-2 sm:mx-[490px] mx-[90px]  mt-2 border-orange-500"></div>
        <div className="p-8   justify-between bg-[#f1f1f1] mt-[100px]  sm:flex">
          {/* Technical Skills */}
          <div>
            <h2 className="text-5xl font-bold mb-4">Technical Skills</h2>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <p className="mb-1">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div className="mt-">
            <h2 className="text-4xl font-bold mb-4">Professional Skills</h2>
            <div className="flex space-x-4">
              {professionalSkills.map((skill) => (
                <div key={skill.name} className="w-24">
                  <CircularProgressbar
                    value={skill.value}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: `#3b82f6`,
                      textColor: '#3b82f6',
                      trailColor: '#d6d6d6',
                    })}
                  />
                  <p className="text-center mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-2 bg-gray-100">
  <div className="min- sm:h-[670px]  h-[1500px] bg-gray-900  text-white flex flex-col items-center">
    <h1 className="text-4xl font-bold mt-[96px]">My Projects</h1>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg  hover:scale-105" // Animation here
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">{project.name}</h2>
          <p className="text-gray-400">{project.description}</p>
          <a
            href={project.githubLink}
            className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            GitHub
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="min-h-screen   flex flex-col justify-center  items-center bg-black text-white p-8">
      <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full sm:mt-[80px]">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Contact <span className="text-orange-500">Me</span>
        </h1>
        <form className="bg-transparent sm:w-[700px] p-8 border border-orange-500 rounded-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none"
            />
            <span className="absolute top-3 right-4 text-white cursor-pointer">
              🗑
            </span>
          </div>
        
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none h-32"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-black font-bold rounded-full hover:bg-lime-400 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
 </div>

      </section>
      <Footer/>
    </div>
  );
}

export default Header;
