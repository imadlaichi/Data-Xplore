import React, {useState} from "react";


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'Comunidad',
    info: [
      {
        title: '- 🌍Comunidad llena de gente emprendedora y de alto valor',
        
      
      },
      {
        title: '- 🛠️Staff Activo y soporte 24/7',
        
      },
      {
        title: '- 🖥️ Código libre',
        
      },
      {
        title: '- 📣Publicitate',
        
      },
      {
        title: '- 👷Busca Trabajo',
        
      },
       {
        title: '- 💼Ofrece tus servicios',
        
      },
      {
        title: '- 🌐Propuestas',
        
      },
      {
        title: '- 📈Reuniones',
        
      },
      
    ],
  },
  {
    title: 'Lenguajes',
    info: [
      {
        title: '- ⚫ Bash',
        
      },
      {
        title: '- 🟡 Javascript',
        
      },
      {
        title: '- 🟠 HTML',
        
      },
      {
        title: '- 🔵 C++',
        
      },
      {
        title: '- 🔵 C',
        
      },
      {
        title: '- 🟡 C',
        
      },
      
    ],
  },
  {
    title: 'Sistemas',
    info: [
      {
        title: '- 🔵 Windows',
        
      },
      {
        title: '- 🟠 Linux',
        
      },
      {
        title: '- 🟣 Mac Os',
        
      },
      
      
    ],
  },
  
  
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py/32 text-center xl:text-left">
    <Circles/>
    
    {/* logo img */}
    <motion.div variants={fadeIn("right", 0.2, )} initial="hidden"animate="show" exit="hidden"
    className="hidden xl:flex absolute bottom-0 
    -left-[370px] ">
      <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
    
     {/* text */}     
     <div className="flex-1 flex flex-col justify-center text-center sm:text-left mt-4 sm:mt-0">
      <motion.h2 variants={fadeIn("right", 0.2, )} initial="hidden"animate="show" exit="hidden"
      className="h2">Todo <span>en un solo </span>lugar para ti </motion.h2>

      <motion.p variants={fadeIn("right", 0.4, )} initial="hidden"animate="show" exit="hidden"
      className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">Data-Xplore es el lugar que siempre has buscado para dominar la tecnología, liberar tu potencial y alcanzar nuevas alturas 🚀. Aprende, explora y conviértete en el experto que siempre quisiste ser. ¡Tu futuro está en tus manos! 💻</motion.p>
     
      {/* counters */} 
        <motion.div variants={fadeIn("right", 0.6, )} initial="hidden"animate="show" exit="hidden"
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-1">
            {/* miembros */}
            <div className="reative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 
            after:right-0 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1200} duration={5}/> +
                </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Miembros</div>
            </div>
            {/* cursos */}
            <div className="reative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 
            after:right-0 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={100} duration={5}/> +
                </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Codigos gratuitos </div>
            </div>
            {/* valor */}
            <div className="reative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 
            after:right-0 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2000} duration={5}/> €+
                </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Valor</div>
            </div>

          </div>
        </motion.div>
      </div>
      {/* info */} 
      <motion.div 
      variants={fadeIn("left", 0.4, )} initial="hidden"animate="show" exit="hidden"
      className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex)=> {
            return (
              <div key={itemIndex} className={`${index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration:300"}
              cursor-pointer capitalize xl:text-lg relative after:w-8 
              after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={()=> setIndex(itemIndex)}
              >
                {item.title}
              
              </div>
            )
          })}
        </div>
        <div className="py-2 xl:py-6 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-y-2 xl:gap-y-4 items-center xl:items-start">
  {aboutData[index].info.map((item, itemIndex) => {
    return (
      <div key={itemIndex} className="flex flex-col">
        {/* title */}
        <div>{item.title}</div>
        <div className="hidden md:flex"></div>
        <div>{item.stage}</div>
      </div>
    );
  })}
</div>

      </motion.div>
    </div>
  </div>
  );
};

export default About;
