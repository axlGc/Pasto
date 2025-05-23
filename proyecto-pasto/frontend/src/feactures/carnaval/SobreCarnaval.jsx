import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
//import '../../assets/style/StyleCarnaval.css'; // Importa el nuevo archivo CSS
import corpocarnImages from '../../assets/images/corpocarn.jpg';
import baileImage from'../../assets/images/baile.jpg';

function SobreCarnaval() {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">CARNAVAL DE NEGROS Y BLANCOS</h1>
                            <img
                                src={corpocarnImages}
                                alt="Carnaval"
                                className="img-fluid rounded mt-3"
                            />
                            <br></br>
                            <br></br>

                            <h3 className="card-subtitle text-muted mb-3">HISTORIA Y ORIGEN DEL CARNAVAL</h3>
                            <p className="card-text text-justify">
                                El Carnaval de Negros y Blancos tiene sus raíces en las celebraciones precolombinas de los pueblos indígenas Pastos y Quillacingas, quienes realizaban rituales en honor al Sol y la Luna. Con la llegada de los españoles, estas tradiciones se fusionaron con influencias europeas y africanas, creando un sincretismo cultural que dio lugar al Carnaval actual. El origen formal del Carnaval se remonta al siglo XVI, aunque la fecha oficial de celebración se estableció en el siglo XIX.
                            </p>
                            <br></br>
                            <br></br>

                            <h3 className="card-subtitle text-muted mb-3"> DIAS MAS IMPORTANTES</h3>
                            <p className="card-text text-justify">
                                <strong>Día de Negros (5 de enero):</strong> Este día se celebra con pintura negra, simbolizando la unión y la igualdad. Tiene sus raíces en la tradición africana de pintar las paredes blancas de Popayán de negro.
                            </p>
                            <p className="card-text text-justify">
                                <strong>Día de Blancos (6 de enero):</strong> Iniciado en 1912, este día se caracteriza por el uso de polvos blancos, simbolizando la alegría y la diversión.
                            </p>
                            <p className="card-text text-justify">
                                <strong>Desfile Magno:</strong> Es el evento central del Carnaval, donde se despliegan comparsas, disfraces y figuras gigantes, mostrando la riqueza cultural de la región.
                            </p>
                            <br></br>
                            <br></br>

                            <h3 className="card-subtitle text-muted mb-3 ">PERSONAJES EMBLEMATICOS</h3>
                            <p className="card-text text-justify">
                            </p>
                            <p className="card-text text-justify">
                                <strong>Rey Momo y la Reina:</strong> Son figuras centrales en el Carnaval, representando la alegría y la tradición.En el Carnaval de Negros y Blancos, el Rey Momo y la Reina son figuras centrales que personifican la alegría y la tradición. El Rey Momo, representación de la burla y el sarcasmo, es el encargado de abrir el carnaval, invitando a la gente a disfrutar de la fiesta. La Reina, elegida anualmente,
                                simboliza la belleza, la cultura y el espíritu festivo de la región. Además de estos, otros personajes emblemáticos incluyen a El Afilador, aunque no siempre mencionado, que encarna el ingenio y la picardía popular. Estos personajes, a través de sus disfraces, comparsas y actos, transmiten la esencia del carnaval y su rica herencia cultural.
                            </p>
                            <br></br>
                            <br></br>

                            <h3 className="card-subtitle text-muted mb-3 ">TRADICIONES Y RITUALES DEL CARNAVAL</h3>
                            <p className="card-text text-justify">
                            Las tradiciones y rituales del Carnaval de Negros y Blancos incluyen el uso de pinturas negra y blanca, que simbolizan la unión e igualdad y la alegría y diversión respectivamente, así como desfiles, comparsas y la coronación de la Reina.
                            Adicionalmente, el pre-carnaval se celebra con actividades como conciertos y carreras. Durante los días del carnaval, las calles de Pasto se llenan de música, danzas y representaciones teatrales, donde participan personas de todas las edades.
                            Las familias y comunidades se unen para construir carrozas y disfraces elaborados, mostrando la creatividad y el espíritu festivo de la región. Los rituales también incluyen ofrendas a la Pachamama (Madre Tierra), agradeciendo por la abundancia y prosperidad.
                            </p>
                            <br></br>
                            <br></br>

                            <h3 className="card-subtitle text-muted mb-3">MUSICA Y DANZAS TIPICAS </h3>
                            <p className="card-text text-justify">
                            La música y las danzas en el Carnaval de Negros y Blancos son una expresión vibrante de la rica herencia cultural de la región. Los ritmos tradicionales, como el son sureño, el bambuco y el vals, se fusionan con influencias indígenas, africanas y europeas, creando melodías únicas que invitan a bailar y celebrar.
                            Las comparsas, grupos de bailarines y músicos, desfilan por las calles mostrando trajes coloridos y coreografías elaboradas. Los bailes al son de la música regional son una parte esencial del carnaval, donde personas de todas las edades se unen para disfrutar y compartir la alegría de esta festividad.
                            </p>
                            <br></br>
                            <br></br>

                            <h3 className="card-subtitle text-muted mb-3">ARTESANIA RELACIONDA CON EL CARNAVAL</h3>
                            <p className="card-text text-justify">
                            La artesanía en el Carnaval de Negros y Blancos es fundamental, destacándose las figuras gigantes que desfilan y que son elaboradas por artesanos locales. Estas esculturas monumentales, a menudo hechas de papel maché, madera y otros materiales, representan personajes, mitos y motivos del carnaval.
                            Su creación requiere meses de trabajo y simboliza la creatividad, la tradición y el ingenio de los artesanos. Además de las figuras gigantes, se elaboran máscaras, disfraces, carrozas y otros elementos decorativos que enriquecen la experiencia visual del carnaval y reflejan la identidad cultural de la región.
                            </p>

                            <img
                                src={baileImage}
                                alt="Carnaval"
                                className="img-fluid rounded mt-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreCarnaval;