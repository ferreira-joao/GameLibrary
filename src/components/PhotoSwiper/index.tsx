import React from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Container } from "./styles";

interface IPhoto {
  source: { id: number; image: string }[] | undefined;
}

const PhotoSwiper: React.FC<IPhoto> = ({ source }) => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      spaceBetween={20}
      style={{ padding: 10 }}
    >
      {source?.map((s, i) => (
        <SwiperSlide key={i}>
          <Container>
            <img src={s.image} className="photo" />
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoSwiper;
