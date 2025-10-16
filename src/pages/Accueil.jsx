import Card from "../components/card"

const logements = [
    {
        titre : "logemet1"
    
    },
     {
        titre : "logemet2"
    
    },
     {
        titre : "logemet3"
    
    }
]

function Accueil() {
    return (
        <div>
            <h1>Accueil</h1>
            {
                logements.map((logement) => {
                    return <Card titre={logement.titre}/>
                })
            }
            
        </div>
    )
}

export default Accueil