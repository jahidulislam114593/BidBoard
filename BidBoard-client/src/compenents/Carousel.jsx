import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Slider from "./Slider";
import img1 from "../assets/caro1.jpg";
import img2 from "../assets/caro2.jpg";
import img3 from "../assets/caro3.jpg";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            image={img1}
            text="Get Your Web Develpment Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={img2}
            text="Get Your Graphic Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={img3}
            text="Start Your Digital Marketing Campaigns up n running"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
