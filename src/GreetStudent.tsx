type GreetStudentProps = {
    name:string
    age:number
}
export default function GreetStudent(props:Readonly<GreetStudentProps>) {

    return(
        <>
            <h2>Hello {props.name}</h2>
            <p>Your are {props.age} years old!</p>
        </>
    )
}