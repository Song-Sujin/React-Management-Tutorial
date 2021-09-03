import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: "홍길동",
    birtyday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: "송수진",
    birtyday: "950820",
    gender: "여자",
    job: "프로그래머",
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: "이순신",
    birtyday: "921205",
    gender: "남자",
    job: "디자이너",
  },
];

// customers객체 사용 불가?
// function App() {
//   return;
//   <>
//     <Customer id={customers[0].id} image={customers[0].image} name={customers[0].name} birthdaty={customers[0].birtyday} gender={customers[0].gender} job={customers[0].job} />
//     <Customer id={customers[1].id} image={customers[1].image} name={customers[1].name} birthdaty={customers[1].birtyday} gender={customers[1].gender} job={customers[1].job} />
//     <Customer id={customers[2].id} image={customers[2].image} name={customers[2].name} birthdaty={customers[2].birtyday} gender={customers[2].gender} job={customers[2].job} />
//   </>;
// }

class App extends Component {
  render() {
    return (
      // <div>
      //   <Customer id={customers[0].id} image={customers[0].image} name={customers[0].name} birthdaty={customers[0].birtyday} gender={customers[0].gender} job={customers[0].job} />
      //   <Customer id={customers[1].id} image={customers[1].image} name={customers[1].name} birthdaty={customers[1].birtyday} gender={customers[1].gender} job={customers[1].job} />
      //   <Customer id={customers[2].id} image={customers[2].image} name={customers[2].name} birthdaty={customers[2].birtyday} gender={customers[2].gender} job={customers[2].job} />
      // </div>
      <div>
        {customers.map((c) => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birtyday} gender={c.gender} job={c.job} />;
        })}
      </div>
    );
  }
}

export default App;
