import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/avtar1.png";
import Avt2 from "../../assets/avtar2.png";
import Avt3 from "../../assets/avtar3.png";
import Avt4 from "../../assets/avtar4.png";

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


//dynamically

const data =[
  {
    avtar:Avt1,
    name:'Sangita Dey',
    review:'important for devlopment ..too good for beginer'
  },
  {
    avtar:Avt2,
    name:'Arif m',
    review:'important for devlopment ..too good for beginer'

  },{
  avtar:Avt3,
  name:'Anushka',
  review:'awesome content ..too good for beginer'
  },
  {
    avtar:Avt4,
    name:'Rima',
    review:'Thnx for this .Awesome content,keep going on'
  }
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients/students</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
>
        {
          data.map(({avtar,name,review},index)=>{

            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="client_avtar">
                <img src={avtar} alt=""/>
                <h5 className="clients-name">{name}</h5>
                </div>
                <small className="clients-review">
                  {review}
                </small>
              
            </SwiperSlide>
            )

          })
        }


















      {/* <article className="testimonials">
          <div className="client_avtar">
            <img src={AVTAR1} alt=" A ONE" />
            <h5 className="clients-name">Awesome Devloper</h5>
            </div>
            <small className="clients-review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              tempore doloribus commodi neque.
            </small>
          
        </article>

        <article className="testimonials">
          <div className="client_avtar">
            <img src={AVTAR2} alt=" A ONE" />
            <h5 className="clients-name">Awesome Devloper</h5>
            </div>
            <small className="clients-review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              tempore doloribus commodi neque.
            </small>
          
        </article>
        <article className="testimonials">
          <div className="client_avtar">
            <img src={AVTAR3} alt=" A ONE" />
            <h5 className="clients-name">Awesome Devloper</h5>
            </div>
            <small className="clients-review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              tempore doloribus commodi neque.
            </small>
          
        </article>
        <article className="testimonials">
          <div className="client_avtar">
            <img src={AVTAR4} alt=" A ONE" />
            <h5 className="clients-name">Awesome Devloper</h5>
            </div>
            <small className="clients-review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              tempore doloribus commodi neque.
            </small>
          
        </article> */}
     
      </Swiper>
    </section>
  );
}

export default Testimonials;
