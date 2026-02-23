import "/src/App.css";
import person from "../assets/person.jpg";
function Home() {
  return (
    <>
    <div className="intro">
        <div className="intro-text">
      <h1>I’m Shine Mabo</h1>
      <p>
        I am an IT graduate who loves turning ideas into interactive digital
        experiences.
      </p>
      <p>
        From building sleek Flutter apps to dynamic React interfaces, I enjoy
        crafting solutions that are both functional and user-friendly.
      </p>
      <p>
        Curious, driven, and always learning, I’m on a journey to create
        applications that make a real impact.
      </p>
      </div>
      <div className="img1">
        <img src={person} alt="Myphoto" width="300" height="400"></img>
      </div>
    </div>
    <div className="extra-txt">testing</div></>
  );
}

export default Home;
