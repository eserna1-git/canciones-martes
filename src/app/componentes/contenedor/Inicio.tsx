import JoeArroyo from "../../../assets/img/joearroyo.png"
import KarolG from "../../../assets/img/karolg.jpg"
import GrupoNiche from "../../../assets/img/gruponiche.jpg"

export const Inicio = () => {
    return (
        <>
            <div className="card-group">
                <div className="card">
                    <img src={JoeArroyo} className="card-img-top" alt="joearroyo" />
                    <div className="card-body">
                        <h5 className="card-title">Joe Arroyo</h5>
                        <p className="card-text">Álvaro Arroyo González, más conocido como Joe Arroyo, fue un cantante y compositor colombiano de música salsa y tropical.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={KarolG} className="card-img-top" alt="karolg" />
                    <div className="card-body">
                        <h5 className="card-title">Karol G</h5>
                        <p className="card-text">Carolina Giraldo Navarro, conocida artísticamente como Karol G, es una cantante, compositora y empresaria colombiana.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={GrupoNiche} className="card-img-top" alt="gruponiche" />
                    <div className="card-body">
                        <h5 className="card-title">Grupo Niche</h5>
                        <p className="card-text">El Grupo Niche es un grupo de salsa colombiano.</p>
                    </div>
                </div>
            </div>
        </>
    )
}