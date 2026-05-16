import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../context/projectsData';
import '../styles/projects.css';
export default function Projects() {
  const [paginationImg, setPaginationImg] = useState({});

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
    <section className='container-page-projects'>
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
              <img src={el.imgs[paginationImg[el.id] || 0]} className='img-project' alt={el.name} />
              <div className='container-icon-direction'>
                <FaArrowLeft onClick={() => handleMinusPaginationImg(el)} className='icon-direction' />
                <FaArrowRight onClick={() =>handlePlusPaginationImg(el)} className='icon-direction' />
              </div>
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
