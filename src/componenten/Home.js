import { useState, useEffect } from "react";
import Taken from "./Taken";


const Home = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3002/taken')
            .then(res => res.json())
            .then(result => setData(result))
    },[])

    // console.log(data)
    

    return ( 
        <div className="content">
            <h1>Homepage</h1>
            <div>Hier komen de taken!</div>
            {/* {console.log(data)} */}
            <Taken data={data} />
        </div>
    );
}
 
export default Home;