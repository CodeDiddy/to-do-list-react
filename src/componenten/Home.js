import Taken from "./Taken";


const Home = () => {
    const uri = 'http://localhost:3001/taken'    

    return ( 
        <div className="content">
            <h1>Openstaande Taken</h1>
            <Taken uri={uri} />
        </div>
    );
}
 
export default Home;