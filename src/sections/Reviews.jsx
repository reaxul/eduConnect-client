import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Reviews = () => {
  const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch("https://edu-connect-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    },[])

  return (
    <div className="my-10">
      <p className="text-center font-bold text-3xl">Feedback</p>
      <p className="text-center">What people say about our colleges</p>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-10"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center">
                    <p className="font-bold text-3xl">{review.collegeName}</p>
                    <p><span className="font-bold">{ review.userName}:</span>{ review.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
