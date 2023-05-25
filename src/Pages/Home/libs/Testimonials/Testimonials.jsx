import React, { useEffect, useState } from "react";
import CentreX from "../CentreX/CentreX";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviewsData, setReviewsData] = useState(null);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json"
    )
      .then((res) => res.json())
      .then((data) => setReviewsData(data));
  }, []);
  return (
    <div>
      <CentreX subHeading="What Our Clients Say" heading="TESTIMONIALS" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviewsData &&
          reviewsData.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="review text-center px-28 my-16">
                  <Rating
                    className="mx-auto mb-8"
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <FaQuoteLeft className="text-8xl mx-auto mb-4" />
                  <p className="font-inter text-xl">{review.details}</p>
                  <h3 className="text-[#CD9003] font-inter font-semibold text-3xl">
                    {review.name}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
