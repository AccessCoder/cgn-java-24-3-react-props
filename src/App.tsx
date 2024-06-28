import './App.css'
import GreetStudent from "./GreetStudent.tsx";

type Student = {
    name:string,
    age:number
}
function App() {

   const students:Student[]= [
       {name:"Max", age: 14},
       {name:"Maxi",age: 54},
       {name:"Maxim",age: 81},
       {name:"Julia",age: 26},
       {name:"Hubert",age: 77},
       {name:"Sabine",age: 15}]

  return (
    <>
        {students.map((student) => <GreetStudent name={student.name} age={student.age}/>)}
    </>
  )
}

export default App
