import './funcionamento.css';

export default function ConteudoFuncionamento(){
    return(
        <>
            <main class="main-func">
                <div class="func-p1">
                    <p>Durante as horas noturnas, o funcionamento do semáforo é automatizado, ativando-se quando o sensor de luz detecta a escuridão. Durante esse período, o semáforo para pedestres permanece aberto por padrão, permitindo que os pedestres atravessem a via com segurança. Contudo, a presença de um veículo se aproximando da interseção aciona o fechamento imediato do semáforo de pedestres, assegurando que o veículo tenha tempo suficiente para passar com segurança.</p>
                </div>
                <div class="func-p2">
                    <p>Um elemento-chave desse sistema é o botão de pedestre, estrategicamente posicionado próximo à faixa de travessia. Esse botão deve ser acionado apenas quando o sinal do semáforo de pedestres estiver fechado. Quando um pedestre pressiona o botão e não há veículos se aproximando, o semáforo de pedestres abre instantaneamente. No entanto, se um veículo estiver se aproximando e o botão for pressionado, o semáforo de pedestres aguardará até que o veículo tenha passado antes de abrir. O tempo de abertura após o acionamento do botão é ajustado para garantir uma travessia segura.</p>
                </div>
                <div class="func-p3">
                    <p>Adicionalmente, na ausência de veículos se aproximando e sem pressionamento do botão, o semáforo de pedestres permanecerá aberto. A segurança dos pedestres é priorizada, e o semáforo para veículos concede prioridade ao semáforo de pedestres quando nenhum veículo está se aproximando e um botão é pressionado.</p>
                </div>
                <div class="func-p4">
                    <p>Para fins de gerenciamento e análise, o controlador do semáforo registra quantas vezes cada botão de pedestre é acionado, possibilitando a avaliação da demanda e a tomada de decisões de ajuste. Em caso de falha do botão de pedestre, o semáforo de pedestres continua operando normalmente, abrindo e fechando automaticamente, garantindo a segurança dos pedestres mesmo em situações de mau funcionamento</p>
                </div>
            </main>
        </>
    )
}