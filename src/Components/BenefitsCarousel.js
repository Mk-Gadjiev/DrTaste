import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BenefitsCarousel.css';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

const benefits = [
  {
    title: "Innovazione Rapida",
    description: "Accelera i test e lancia nuovi prodotti in tempi record.",
    color: "linear-gradient(135deg, #f79533 0%, #f37055 100%)",
  },
  {
    title: "Decisioni Veloci",
    description: "Ottieni insight istantanei per decisioni informate.",
    color: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
  },
  {
    title: "Analisi Profonda",
    description: "Comprendi i consumatori con dati approfonditi.",
    color: "linear-gradient(135deg, #3a1c71 0%, #d76d77 100%, #ffaf7b 100%)",
  },
  {
    title: "Valore Garantito",
    description: "Massimizza il ritorno sugli investimenti.",
    color: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
  },
];

export default function BenefitsCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      effect="fade"
      className="benefits-swiper"
    >
      {benefits.map((benefit, index) => (
        <SwiperSlide key={index}>
          <div
            className="benefit-card"
            style={{ background: benefit.color }}
          >
            <h2 className="benefit-title">{benefit.title}</h2>
            <p className="benefit-description">{benefit.description}</p>
            <button className="scopri-di-piu-btn">Scopri di più</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

