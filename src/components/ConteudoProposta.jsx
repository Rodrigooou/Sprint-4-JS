import './proposta.css';
import imagemSem from '../assets/0e81cb620caa14a0cf17fcacd223ce31.png'


export default function ConteudoProposta(){
    //Área declarativa
    return (
        <>
            <main class="main-proposta">
                <p class="p1">A segurança durante a noite é uma preocupação frequente, devido à falta de sinalização adequada e iluminação insuficiente, o que resulta em uma sincronização deficiente dos semáforos. Esse problema acarreta congestionamentos desnecessários e aumenta os riscos de acidentes. Além disso, os pedestres enfrentam desafios ao atravessar as ruas, tornando-se mais vulneráveis a roubos devido à escuridão. A carência de iluminação também contribui para a incidência de crimes e a ausência de sistemas de alerta dificulta a resposta a situações de emergência.</p>
                <p class="p2">Sem dúvida, para abordar essas questões de segurança e promover um tráfego mais seguro durante a noite, propomos um sistema de semáforo inteligente inovador. Nesse sistema, os semáforos permaneceriam abertos para a passagem de pedestres até que a detecção de um veículo ocorra, garantindo a priorização da segurança dos pedestres. Além disso, para dar aos pedestres ainda mais controle sobre sua segurança, um botão de solicitação de travessia seria instalado. Quando um pedestre apertasse o botão, o semáforo abriria automaticamente, sinalizando claramente aos motoristas a presença de pedestres e permitindo uma travessia segura.</p>
                <p class="p3">Essa abordagem bidirecional, na qual o sistema detecta e responde tanto à presença de veículos quanto à solicitação dos pedestres, tem o potencial de transformar a segurança noturna no trânsito. Afinal, sabemos que, infelizmente, muitos indivíduos não respeitam os semáforos durante a noite, tornando as estradas ainda mais perigosas. Com esse sistema, promovemos um ambiente de tráfego mais seguro, minimizando o risco de acidentes e contribuindo para uma convivência mais harmoniosa entre motoristas e pedestres.</p>
                <p class="p4">Além disso, a implementação de uma tecnologia de comunicação entre semáforos e veículos pode ser considerada para fornecer alertas adicionais aos motoristas sobre a presença de pedestres nas proximidades, melhorando ainda mais a segurança noturna. Esse sistema não só tornaria as ruas mais seguras durante a noite, mas também serviria como um exemplo inovador de como a tecnologia pode ser utilizada para melhorar a vida nas cidades e promover a segurança no trânsito.</p>
                <div class="imgsemaforo">
                    <img src={imagemSem} alt="imagem semáforo" />
                </div>
                
            </main>
        </>
    );
}