import './Conteudo.css';
import img1 from'../assets/obj.jpg';


export default function Conteudo(){
    //Área declarativa


    return (
        <>
          <main>
            <article class="pg1">
                <p>    A segurança em nosso país é realmente um caso preocupante. Os assaltos e furtos são um problema que assola, não apenas São Paulo mas como todo o Brasil. E então, segundo algumas pesquisas, foi constatado que a maior parte desses crimes acontecem, pela noite, com 39,91% dos casos, seguido de perto por roubos durante a tarde, com 18,95%. A madrugada também foi um período propenso a roubos, com 18,12% dos casos. Pela manhã e em hora incerta, houve 18,61% e 4,41% dos roubos, respectivamente.</p>
            </article>
            <article class='pg2'>
                <p>    Esses números revelam uma situação alarmante, destacando a frequência dos crimes em diferentes momentos do dia. Essa informação é crucial para entender melhor os padrões de criminalidade e direcionar os esforços de segurança de maneira mais eficaz.</p>
            </article>

            <article class='pg3'>
                <p>     A alta incidência de crimes durante a noite e a tarde aponta a necessidade de medidas urgentes para aumentar a segurança pública e prevenir esses crimes. Isso pode incluir o aumento da presença policial em áreas de alto risco, investimentos em iluminação pública, programas de conscientização e educação para a comunidade sobre prevenção de crimes, além de políticas que abordem as causas subjacentes da criminalidade, como o desemprego e a desigualdade social. É um desafio complexo, mas enfrentá-lo é essencial para garantir a segurança e o bem-estar de todos os cidadãos brasileiros.</p>
            </article>
            <section>
                <img src={img1} alt="imagem ilustrativa"></img>
            </section>
          </main>
        </>
    );
}