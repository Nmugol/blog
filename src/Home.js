import { useState } from "react";

const Home = () => {

    //let name = 'Marian';
    const [name, setName] = useState('Marian');
    const [age, setAge] = useState('50');

    const handleClick = () =>{

        setName('Andrzej');
        setAge('45');
    }


    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;