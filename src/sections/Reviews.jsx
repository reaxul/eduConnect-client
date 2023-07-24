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
        fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    },[])
    console.log(reviews);

  return (
    <div className="my-10">
      <p className="text-center font-bold text-3xl">Feedback</p>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center">
                    <p className="font-bold text-3xl">{review.collegeName}</p>
                    <p><span className="font-bold">{ review.userName}:</span>{ review.feedback}</p>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default Reviews;
