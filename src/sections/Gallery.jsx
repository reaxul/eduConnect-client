import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="py-12">
      <h2 className=" text-3xl md:text-5xl text-center font-bold">
        From the Edu<span className="text-green-500">Connect</span> community
      </h2>
      <p className="text-center text-3xl mb-4">
        124+ million people have already joined EduConnect
      </p>
      <hr className="mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              data-aos="fade-down"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/wM0DrqD/side-view-group-graduated-students.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="fade-right"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/nRDjMfm/group-diverse-grads-throwing-caps-up-sky-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="fade-left"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/Jc58BNZ/girls-graduation-showing-their-certificates.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              data-aos="fade-up-right"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/Tq3fRgw/portrait-group-students-celebrating-their-graduation-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="fade-up-left"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/7CQyMMW/students-graduated.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="fade-down-right"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/4MWrhvX/two-international-graduate-celebrating-graduation-university-campus-looking-camera.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              data-aos="fade-down-left"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/9cL5zTX/students-posing-back-back.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="zoom-left"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/f14Trfw/portrait-group-students-celebrating-their-graduation.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="fade-right"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/hdZsfhs/three-happy-graduates-smiling-holding-diplomas.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              data-aos="fade-right"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/0Bc4dQ5/three-gradutes-friends-graduation-gowns-walking-campus.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="flip-right"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/YhNzkZs/happy-friends-gratuating.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="flip-left"
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/VQTN4FV/low-angle-graduated-students.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
