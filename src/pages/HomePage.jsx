import introText from "../images/intro-text.png";
import introImg from "../images/intro-img.png";

const HomePage = () => {
  return (
    <>
      <div className="intro">
        <img className="intro__img-text" src={introText} alt="Logo" />
        <img className="intro__img" src={introImg} alt="Logo" />
      </div>
    </>
  );
};

export default HomePage;
