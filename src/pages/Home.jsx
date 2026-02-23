import person from "../assets/person.jpg";
import "/src/App.css";

function Home() {
  return (
    <div className="home">
      <h1>Shine Mabo</h1>

      <img
        src={person}
        alt="profile"
        className="image1"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
}

export default Home;