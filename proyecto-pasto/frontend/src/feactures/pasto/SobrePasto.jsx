import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import pastoImage from '../../assets/images/pasto.jpg'; 
import lajasImage from '../../assets/images/Lajas.jpg';// Asegúrate de que la ruta sea correcta



function SobrePasto() {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-4">LA CAPITAL DE NARIÑO</h1>
                            <p className="card-text text-justify text-width" >
                                Pasto, la capital del departamento de Nariño en Colombia, es una ciudad rica en cultura, historia y tradiciones. Situada en el sur del país, Pasto es conocida por su impresionante arquitectura colonial y su vibrante vida cultural.
                                La ciudad es famosa por su gastronomía, sus festivales y su gente amable. Entre los platos típicos se encuentran el cuy asado y el helado de paila, que son un deleite para los visitantes.
                            </p>
                            <img 
                                src={pastoImage}//pasto.jpg Asegúrate de actualizar la ruta de la imagen
                                alt="Paisaje Pastuso" 
                                className="img-fluid rounded my-4" 
                            />
                            <br></br>
                            <br></br>
                            <h3 className="card-subtitle text-muted mb-3 " >HISTORIA DE PASTO</h3>
                            <p className="card-text text-justify text-width">
                                Fundada en 1537 por el conquistador español Sebastián de Belalcázar, Pasto ha sido un importante centro cultural y comercial a lo largo de su historia. La ciudad ha mantenido su herencia indígena y colonial, lo que se refleja en su arquitectura y tradiciones.
                                Pasto, durante la época colonial, fue un punto clave en la ruta entre Quito y Bogotá, a pesar de la fuerte resistencia a la conquista española ofrecida por los pueblos indígenas de la región, como los Pastos y Quillacingas. En la Guerra de Independencia de Colombia, Pasto fue un bastión realista, mostrando lealtad a la Corona española hasta después de la Batalla de Ayacucho en 1824. La ciudad también ha sido un centro de producción artística y artesanal, destacándose por su trabajo en madera, tejidos y el barniz de Pasto, y es conocida por mantener vivas muchas de sus tradiciones, incluyendo el Carnaval de Negros y Blancos, reconocido como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.
                            </p>
                            <br></br>
                            <br></br>
                            <h3 className="card-subtitle text-muted mb-3 ">CULTURA Y TRADICIONES</h3>
                            <p className="card-text text-justify text-width">
                                Pasto es conocida por sus festivales, como el Carnaval de Negros y Blancos, que celebra la diversidad cultural de la región. Además, la ciudad alberga diversas manifestaciones artísticas, como la música, la danza y la artesanía.
                            </p>
                            <br></br>
                            <br></br>
                            <h3 className="card-subtitle text-muted mb-3">LUGARES DE INTERES</h3>
                            <p className="card-text text-justify text-width">
                                Entre los lugares más emblemáticos se encuentran el Santuario de Las Lajas, el Parque Arboleda y la Plaza de Nariño, donde se pueden apreciar la arquitectura colonial y la belleza natural de la región.
                                Además del Santuario de Las Lajas, el Parque Arboleda y la Plaza de Nariño, Pasto ofrece otros lugares de interés turístico. El Santuario de Las Lajas es una impresionante basílica de estilo neogótico construida sobre un cañón, atrayendo a peregrinos y turistas por su belleza arquitectónica y significado religioso. 
                                El Parque Arboleda es un pulmón verde en la ciudad, ideal para actividades al aire libre y momentos de relajación. La Plaza de Nariño, ubicada en el corazón de Pasto, está rodeada de edificios coloniales y es un punto de encuentro para eventos culturales y sociales. 
                                También puedes visitar museos como el Museo del Oro de Nariño, que exhibe piezas arqueológicas de culturas precolombinas, y explorar mercados artesanales donde encontrarás productos únicos elaborados por artesanos locales.
                            </p>
                            <img 
                                src={lajasImage}// Asegúrate de actualizar la ruta de la imagen
                                className="img-fluid rounded my-4" 
                                alt="" 
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobrePasto;