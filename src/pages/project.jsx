import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectsData } from '../data/projectsData';
import '../styles/projects.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import { useScrollTOSection } from '../context/scrollToSectionContext';
export default function Projects() {
  const [paginationImg, setPaginationImg] = useState({});
  const { projectRef } = useScrollTOSection();
  const { t } = useTranslation('projects');
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
      <h2 className='title-page-projects dark:text-white-4!'>{t('Projects')}</h2>
    
      <div className='container-card-projects'>
        {projectsData.map((el) => {
          return (
            <div key={el.id} className='card-projects bg-[#E5E7EB]!  dark:bg-black-6! '>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}>
                {el.imgs.map((img, index) => (
                  <SwiperSlide
                    className='relative w-full h-[250px] overflow-hidden rounded-xl dark:bg-gray-800!'
                    key={index}>
                    <img className='w-full h-full object-cover' src={img} alt={el.name} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className='container-details-card-projects'>
                <div className='container-titles'>
                  <span className='project-name dark:text-white!'>{t(el.name)}</span>
                  <a href={el.link} className=' dark:text-gold-4!'>
                    {t('visit project')}
                  </a>
                </div>
                <div className='details dark:text-black-5!'>{t(el.details)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
