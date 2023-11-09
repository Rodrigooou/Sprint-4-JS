import './Dados.css';
import Furtos from '../assets/Roubos_furtos-grafico-4.png';
import Roubos from '../assets/image.png'


export default function ConteudoDados(){
    //Área declarativa
    return (
        <>
            <main class="main-dados">
                <section class="um">
                    <p>TOTAL DE FURTOS DIVIDIDOS POR PERIODOS</p>
                    <img src={Furtos}></img>
                </section>
                <section class="dois">
                    <p>TOTAL DE ROUBOS DIVIDIDOS POR PERIODOS</p>
                    <img src={Roubos}></img>
                </section>
            </main>
        </>
    );
}