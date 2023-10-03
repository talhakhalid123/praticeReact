import "./App.css";
import Card from "./Card";
import List from "./List";
import Sdata from "./Sdata";
import Ternary from "./Ternary";
import Use from "./Use";
import Time from "./Time";
import Trying from "./Trying";
import FormsTesting from "./FormsTesting";
import Pasta from "./assets/images/pasta.jpg";
import Todo from "./Todo";
import User from "./User";
import Search from "./Search";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Menus from "./Menus";

const name = "talha khalid";

const currentDate = new Date();
const formattedDate = currentDate.getHours();
const formattedTime = currentDate.toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/240/300";
const img3 = "https://picsum.photos/300/300";

const heading = {
  color: "red",
  textTransform: "capitalize",
  fontFamily: "Josefin Sans, sans-serif",
};

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>First Challange</h1>
          <p>list of five netflix series</p>
          <ol style={{ width:"10%", textAlign:"left", margin:"auto"}}>
            <li>Drak</li>
            <li>Extra</li>
            <li>My Name</li>
            <li>Enemy</li>
            <li>Horror</li>
          </ol>
          <div>
            <h2 style={heading}> {`my name is  ${name}`} </h2>
          </div>
          <p>my lucky number is {5 * 2}</p>

          <h1> Second Challange</h1>

          <h2>Current Date and Time</h2>
          <p>Date: {formattedDate}</p>
          <p>Time: {formattedTime}</p>
        </header>

        <div style={{width:"100%", textAlign:"center"}}>
        <img src={img1} alt="notpermanent" />
        <img src={img2} alt="notpermanent" />
        <img src={img3} alt="notpermanent" />
        </div>

        <List />

        {Sdata.map((val) => {
          return (
            <Card
              key={val.id}
              imgsrc={val.imgsrc}
              name={val.name}
              titel={val.titel}
              button={val.button}
            />
          );
        })}

        <img
          src={Pasta}
          alt="noted"
          style={{ width: "300px", height: "auto" }}
        />

        <Ternary x="😄" y="😄" z="😄" />
        <Ternary x="😠" y="🐱" z="💇‍♂️" />
        <Ternary x="happy" y="moody" z=" oofmood" />
        <Ternary x="💑" y="💑" z="👩‍❤️" />

        <Use />

        <Time />
        <Trying />

        {/* <FormsTesting /> */}
<Menus/>
        <Routes>
          <Route exact path="/" Component={FormsTesting} />
          <Route exact path="/todo" Component={Todo} />
          <Route exact path="/User/:cricket/:hockey" Component={User}/>
          <Route exact path="/Search" Component={Search}/>

        </Routes>

        <div className="okkkk text-center mt-3">
          <button className="btn btn-danger  text-capitalize  text-light">
          
            with bootstrap
          </button>
          
        </div>
      </div>
    </>
  );
}

export default App;
