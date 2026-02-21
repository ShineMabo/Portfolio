import person from "../assets/person.jpg"
function Home (){
    return(
        <><h1>hellow</h1>
        <img src ={person} alt="logo" classname="image1"
        style= {{width: '200px', height: '200px', objectFit: 'cover'}}
        /> </>
    );
}

export default Home;