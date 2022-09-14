import useFetch from "./useFetch";


const Taken  = (uri) => {

    const taken = useFetch(uri)
     
    return (
        <div className="takenlijst">
            {taken ? 
                taken.map((taak) => (
                    <div className="taak" key={taak.id}>
                        <p>{taak.taak}</p>
                        <p>{taak.einddatum}</p>
                    </div>
            )):
                <div className="noTask">
                    <h3>Geen openstaande taken</h3>
                </div>
            }          
        </div>
    );
}
 
export default Taken ;