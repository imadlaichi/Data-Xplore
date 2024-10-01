import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  
  RxArrowTopRight
} from "react-icons/rx";

const serviceData = [
  {
    icon: "⚫",
    title: 'Bash',
    description: ' Aprende a automatizar tareas y gestionar sistemas Unix con comandos y scripts, optimizando la administración de servidores y archivos.',
  },
  {
    icon: "🟡",
    title: 'Javascript',
    description: 'Aprende a añadir interactividad a tus páginas web, controlando el comportamiento dinámico de elementos y mejorando la experiencia del usuario.',
  },
  {
    icon: "🟠",
    title: 'HTML',
    description: 'Domina la estructura básica de páginas web creando y organizando contenido mediante etiquetas y elementos esencialesㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  
  {
    icon: "🔵",
    title: 'C++',
    description: ' Domina la programación orientada a objetos y el manejo eficiente de recursos para desarrollar aplicaciones de alto rendimiento.',
  },
  {
    icon: "🔵",
    title: 'C',
    description: 'Aprende a programar en un lenguaje de bajo nivel para desarrollar aplicaciones rápidas y eficientes, gestionando memoria y recursos directamente.',
  },
  {
    icon: "🟡",
    title: 'Python',
    description: 'Aprende a desarrollar código limpio y legible para aplicaciones web, análisis de datos y automatización, con una sintaxis intuitiva y poderosa.',
  },

  

];

const ServiceSlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='bg-gradient-to-b from-[#919191] to-[#000000] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300'>
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
