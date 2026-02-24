import star from "../assets/star.svg";
import location from "../assets/location.svg";
import work from "../assets/work.svg";
function AboutMe() {
  return (
    <>
      <div className="info">
        <div className="info-card">
          <h1>Who</h1>
          <li>
            I’m an IT graduate and aspiring software developer focused on
            building real-world applications.
          </li>
          <li>
            I work with Flutter and React to create clean, user-friendly
            interfaces, and use Django with REST APIs on the backend to bring
            ideas to life.
          </li>
        </div>

        <div className="info-card">
          <h1>What</h1>
          <li>
            I enjoy hands-on learning and have worked on multiple projects that
            helped me understand how design, functionality, and performance come
            together.
          </li>
          <li>
            Currently, I’m focused on improving my skills, following best
            practices, and building practical, problem-solving applications.
          </li>
        </div>

        <div className="info-card">
          <h1>Why</h1>
          <li>
            I’m motivated by solving real problems through technology and
            creating applications that genuinely help people.
          </li>
          <li>
            Writing clean code and crafting meaningful user experiences is what
            drives me to keep learning and improving every day.
          </li>
        </div>
      </div>
      <div className="info-two">
        <h2 className="info-txt-two">
          An aspiring developer focused on bridging the gap between clean code
          and meaningful user experiences
        </h2>
      </div>
      <div className="info-three">
        <div className="info-img">
          <img src={star} alt="star"></img>
          <h3 className="info-txt">3 Years of building</h3>
          <img src={location} alt="location"></img>
          <h3 className="info-txt">Nakhipot-14, Lalitpur</h3>
          <img src={work} alt="star"></img>
          <h3 className="info-txt" >Open to work</h3>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
