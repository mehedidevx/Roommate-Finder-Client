import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FiSun, FiSearch, FiHome } from "react-icons/fi";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const btns = [
    <Link to="/browse" key="browse">
      <button className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded shadow hover:opacity-90 transition">
        <FiSearch /> Explore Listings
      </button>
    </Link>,

    <Link to="/add-listing" key="list">
      <button className="flex cursor-pointer items-center gap-2 border border-purple-400 text-purple-300 hover:text-white px-6 py-2 rounded hover:bg-purple-700 transition">
        <FiHome /> List Your Space
      </button>
    </Link>,
  ];

  return (
    <div className="w-full h-[420px] md:h-[520px]">
      <Swiper
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full bg-cover bg-center flex items-center justify-center bg-[url('https://i.postimg.cc/bwBW57Rg/steptodown-com571196.jpg')]">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 bg-[#2a0e61]/70 text-white p-3 md:p-12 rounded-xl shadow-lg max-w-3xl text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                <Typewriter
                  words={[" Find Your Perfect Space"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Connect with like-minded individuals, discover ideal living
                situations, and make your housing journey seamless and
                enjoyable.
              </p>
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                {btns}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full bg-cover bg-center flex items-center justify-center bg-[url('https://i.postimg.cc/bNY5wyCL/steptodown-com231447.jpg')]">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 bg-[#2a0e61]/70 text-white p-8 md:p-12 rounded-xl shadow-lg max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
               <Typewriter
                  words={["List Your Space with Ease"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p>
                Have an extra room? Post it in seconds and find a reliable
                roommate without the hassle.
              </p>
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                {btns}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full bg-cover bg-center flex items-center justify-center bg-[url('https://i.postimg.cc/7ZGm5fg1/steptodown-com352528.jpg')]">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 bg-[#2a0e61]/70 text-white p-8 md:p-12 rounded-xl shadow-lg max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
               <Typewriter
                  words={["Your Comfort, Our Priority"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p>
                We value your safety and satisfaction. Experience a seamless
                roommate finding journey.
              </p>
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                {btns}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
