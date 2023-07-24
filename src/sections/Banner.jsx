
const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-md" style={{backgroundImage: 'url(https://i.ibb.co/HCpD9x9/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Edu<span className="text-green-500">Connect</span></h1>
            <p className="mb-5">Explore, book, and review colleges easily. Engaging interface with diverse facilities. Join EduConnect for seamless college experiences.</p>
            <button className="btn b text-green-500">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;