import React from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Container } from "./styles";
import { items } from "./data";

const PhotoSwiper: React.FC = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      spaceBetween={20}
      style={{ padding: 10 }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Container>
            <p>{item.name}</p>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoSwiper;
