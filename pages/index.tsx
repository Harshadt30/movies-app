import { Swiper, SwiperSlide } from "swiper/react";
import Discover from "../components/Discover";

export default function Home() {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
      {/* <Discover type="movie" /> */}
      {/* <Discover type="tv" /> */}
    </>
  );
}
