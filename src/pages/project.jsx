import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectsData } from '../context/projectsData';
import '../styles/projects.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useAppContext } from '../context/AppContext';
export default function Projects() {
  const [paginationImg, setPaginationImg] = useState({});
const {projectRef}=useAppContext()
  function handlePlusPaginationImg(el) {
    const currentImg = paginationImg[el.id] || 0;

    if (currentImg < el.imgs.length - 1) {
      setPaginationImg((prev) => ({
        ...prev,
        [el.id]: currentImg + 1,
      }));
    }
  }

  function handleMinusPaginationImg(el) {
    const currentImg = paginationImg[el.id] || 0;
    if (currentImg > 0) {
      setPaginationImg((prev) => ({
        ...prev,
        [el.id]: currentImg - 1,
      }));
    }
  }
  return (
    <section ref={projectRef} className='container-page-projects'>
      <h2 className='title-page-projects'>projects</h2>
      {/**
      <div className='container-btns-filter-projects'>
        <button className='btn-filter-skills'>All</button>
        <button className='btn-filter-skills'>css</button>
        <button className='btn-filter-skills'>js</button>
        <button className='btn-filter-skills'>React</button>
        <button className='btn-filter-skills'>supabase</button>
        <button className='btn-filter-skills'>node</button>
      </div>
      */}
      <div className='container-card-projects'>
        {projectsData.map((el) => {
          return (
            <div key={el.id} className='card-projects'>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}>
                {el.imgs.map((img, index) => (
                  <SwiperSlide className='relative w-full h-[250px] overflow-hidden rounded-xl bg-gray-800' key={index}>
                    <img className='w-full h-full object-cover' src={img} alt={el.name} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className='container-details-card-projects'>
                <div className='container-titles'>
                  <span className='project-name'>{el.name}</span>
                  <a href={el.link} className='link-project'>
                    visit project
                  </a>
                </div>
                <div className='details'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo libero error esse alias doloribus,
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
