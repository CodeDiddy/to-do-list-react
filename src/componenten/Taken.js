const Taken  = (data) => {
    const taken = data.data
   

    console.log(taken)
    
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