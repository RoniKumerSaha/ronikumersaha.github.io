import MyPic from "../assets/roni.png";
const IntroContent = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-10/12">
        <img src={MyPic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">A SQA Engineer</h1>
          <p className="py-6">
            I am a Software Quality Assurance (SQA) engineer with over 5 years
            of working experience. I have tested websites and software using
            various tools and technologies.
          </p>
          <button className="btn btn-primary">View my work</button>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
