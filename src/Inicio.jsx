
import Conheca from "./conheca";
import vetorNaf from"./assets/img/vetorNaf.png";
import Calendario from "./calendario";


function Inicio() {
    return (
        <div id='Capa'>
            <section id="/">
                <img id="imgUni" src={vetorNaf} />
                <p>
                    O prazo para realizar a declaração do Imposto de Renda de Pessoa Física (IRPF) está valendo e, para ajudar 
                    nessa missão, o Centro Universitário Serra dos Órgãos (Unifeso) oferece um núcleo especializado que presta o
                     serviço de forma gratuita. O interessado deve entrar em contato pelo telefone (21) 2743-6751 para se informar
                      sobre as condições e agendar um horário. <br />
                    O atendimento acontece, às quartas-feiras, das 16h às 17h30, sendo que, excepcionalmente em março e abril, o
                     atendimento será estendido para as segundas, quartas e sextas-feiras no mesmo horário.
                    O Núcleo de Apoio Contábil e Fiscal (NAF) conta com o atendimento de estudantes supervisionados por professores dos 
                    cursos de Administração e de Ciências Contábeis, e que são capacitados regularmente pela Receita Federal. 
                    Além das orientações para declaração de IRPF, o NAF trabalha com serviços de atendimento de orientação às Pessoas
                     Físicas, MEI e instituições sem finalidades lucrativas para esclarecimentos pertinentes à Receita Federal.
                    O NAF fica localizado no campus Antonio Paulo Capanema de Souza (Av. Oliveira Botelho, 111, Alto).
                </p></section>
            <section id="conheca">
                <h4>Empresa Júnior</h4>
                <p>
                    Além do NAF, os estudantes e professores dos cursos de Administração e de Ciências Contábeis do Unifeso atuam na 
                    Empresa Júnior, direcionada à capacitação e ao treinamento desses alunos em ações de extensão. Ela também está
                     fazendo a declaração de imposto de renda (valores sob consulta), além de pesquisas de mercado e consultorias 
                     administrativa e contábil.
                    Para obter mais informações e agendar horário para atendimento na Empresa Júnior, basta entrar em contato através 
                    do e-mail facilconsultoriajr@hotmail.com. 
                </p>
            </section>
            <Conheca />
            <br/>
        </div>
    )
}


export default Inicio;