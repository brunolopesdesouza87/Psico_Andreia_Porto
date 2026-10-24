import { useEffect, useState } from 'react';

const CONFIG = {
  whatsapp: '5547996473690',
  mensagens: {
    geral: 'Olá, Andréia! Vim pelo seu site e gostaria de saber mais sobre o atendimento.',
    fora: 'Olá, Andréia! Vim pelo seu site. Moro fora do Brasil e gostaria de saber mais sobre a terapia on-line.',
    ansiedade: 'Olá, Andréia! Vim pelo seu site e gostaria de saber mais sobre a terapia para ansiedade.',
    sobrecarga: 'Olá, Andréia! Vim pelo seu site. Tenho me sentido sobrecarregada e gostaria de saber mais sobre o atendimento.',
    autoestima: 'Olá, Andréia! Vim pelo seu site e gostaria de conversar sobre autoestima e limites.',
    primeira: 'Olá, Andréia! Vim pelo seu site e gostaria de agendar a primeira sessão.',
    online: 'Olá, Andréia! Vim pelo seu site e gostaria de agendar uma sessão on-line.',
    horario: 'Olá, Andréia! Vim pelo seu site e gostaria de saber os horários disponíveis.',
  } as const,
};

function getWaLink(tipo: string = 'geral') {
  const msg = (CONFIG.mensagens as Record<string, string>)[tipo] || CONFIG.mensagens.geral;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMbar, setShowMbar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 30);
      setShowMbar(y > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>



{/*  ============ HEADER ============  */}
<header className={`hd ${isScrolled ? 'solid' : ''}`} id="hd">
  <div className="wrap">
    <a className="brand" href="#topo" aria-label="Andréia Porto, psicóloga, início">
      <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><use href="#i-marca"/></svg></span>
      <span className="brand-txt"><span className="brand-name">Andréia Porto</span><span className="brand-sub">Psicóloga · CRP 12/19429</span></span>
    </a>
    <nav className="nav" aria-label="Seções">
      <a href="#morar-fora">Morar fora</a>
      <a href="#ansiedade">Ansiedade e sobrecarga</a>
      <a href="#terapia">Como funciona</a>
      <a href="#sobre">Sobre</a>
      <a href="#duvidas">Dúvidas</a>
    </nav>
    <a className="btn btn-cocoa" data-wa="geral" href={getWaLink("geral")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg><span>Agendar<span className="lbl-2"> sessão</span></span></a>
  </div>
</header>

<main>
{/*  ============ HERO ============  */}
<section className="hero" id="topo">
  <div className="wrap hero-grid">
    <div className="hero-copy">
      <p className="kicker">Psicoterapia on-line · no Brasil e no exterior</p>
      <h1>Você não precisa dar conta de tudo sozinha. <em>Nem esperar chegar ao limite pra cuidar de você.</em></h1>
      <p className="hero-sub">Sou psicóloga e atendo on-line mulheres que vivem com ansiedade, sobrecarga e esgotamento, aqui no Brasil ou morando fora dele. Um espaço de escuta e cuidado, em português, pra entender o que você está sentindo e encontrar formas mais leves de lidar com essa fase.</p>
      <p className="doors-label">Por onde você quer começar? Me chame no WhatsApp</p>
      <ul className="doors">
        <li className="door"><a data-wa="fora" href={getWaLink("fora")} target="_blank" rel="noopener noreferrer">
          <span className="door-t">Moro fora do Brasil<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg></span>
          <small>Adaptação, saudade, solidão e culpa</small>
        </a></li>
        <li className="door"><a data-wa="ansiedade" href={getWaLink("ansiedade")} target="_blank" rel="noopener noreferrer">
          <span className="door-t">Ansiedade<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg></span>
          <small>Quando a cabeça não desliga nunca</small>
        </a></li>
        <li className="door"><a data-wa="sobrecarga" href={getWaLink("sobrecarga")} target="_blank" rel="noopener noreferrer">
          <span className="door-t">Sobrecarga e esgotamento<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg></span>
          <small>Cuido de todo mundo e não sobra nada pra mim</small>
        </a></li>
        <li className="door"><a data-wa="autoestima" href={getWaLink("autoestima")} target="_blank" rel="noopener noreferrer">
          <span className="door-t">Autoestima e limites<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg></span>
          <small>Dizer não sem culpa, parar de se cobrar tanto</small>
        </a></li>
      </ul>
      <div className="hero-meta">
        <span><b>Andréia de Souza Porto Silva</b> · Psicóloga · <span className="nw">CRP 12/19429</span></span>
        <span>Atendimento on-line, em português, para qualquer país</span>
      </div>
    </div>

    <div className="hero-photo">
      <figure className="arch"><img src="/assets/img/hero.webp" alt="Andréia Porto sorrindo, de blazer rosa, sentada numa poltrona e segurando um tablet" width="1000" height="1250" fetchPriority="high" /></figure>
      <div className="badge b1"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-globo"/></svg><span>On-line<small>no Brasil e no exterior</small></span></div>
      <div className="badge b2"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-fala"/></svg><span>Em português<small>de onde você estiver</small></span></div>
    </div>
  </div>
</section>

{/*  ============ FAIXA ============  */}
<div className="facts" aria-label="Sobre o atendimento">
  <div className="facts-track">
    <ul>
      <li>Ansiedade</li><li>Esgotamento</li><li>Sobrecarga feminina</li><li>Brasileiras no exterior</li><li>Adaptação e pertencimento</li><li>Autoestima</li><li>Limites</li><li>Terapia on-line em português</li><li>CRP 12/19429</li>
    </ul>
    <ul aria-hidden="true">
      <li>Ansiedade</li><li>Esgotamento</li><li>Sobrecarga feminina</li><li>Brasileiras no exterior</li><li>Adaptação e pertencimento</li><li>Autoestima</li><li>Limites</li><li>Terapia on-line em português</li><li>CRP 12/19429</li>
    </ul>
  </div>
</div>

{/*  ============ MORAR FORA ============  */}
<section className="sec fora" id="morar-fora">
  <div className="wrap">
    <div className="sec-head">
      <div data-reveal>
        <p className="kicker">A vida fora do Brasil</p>
        <h2 className="h2">Morar fora não é apenas mudar de país. <em>É também um processo emocional.</em></h2>
      </div>
      <p className="lead" data-reveal>Pode ser uma experiência incrível e, ao mesmo tempo, mexer com a identidade, a rede de apoio, os relacionamentos, a carreira e a sensação de pertencimento. Existe um lado da imigração que nem sempre aparece nas fotos. Talvez você se reconheça em algum destes.</p>
    </div>

    <div className="cards">
      <article className="card" data-reveal>
        <span className="card-k">Outro idioma</span>
        <h3>O cansaço de viver <em>em outra língua</em></h3>
        <p>Pensar nas palavras, entender sotaques, interpretar expressões, perceber se foi realmente compreendida. É possível chegar ao fim do dia exausta sem saber exatamente de onde veio esse cansaço.</p>
      </article>
      <article className="card" data-reveal>
        <span className="card-k">Carreira</span>
        <h3>Quando a profissão deixa de ocupar <em>o mesmo lugar</em></h3>
        <p>Você construiu uma carreira, estudou, conquistou reconhecimento e, em outro país, precisou começar de novo. Isso mexe com o trabalho, mas também com a forma como você se enxerga.</p>
      </article>
      <article className="card blush" data-reveal>
        <span className="card-k">Pertencimento</span>
        <h3>Estar acompanhada e ainda <em>se sentir sozinha</em></h3>
        <p>Parceiro, colegas, conhecidos, amigos… e ainda a falta de alguém que compreenda o que significa viver essa experiência. Solidão nem sempre é falta de pessoas. Às vezes é falta de pertencimento.</p>
      </article>
      <article className="card" data-reveal>
        <span className="card-k">Incerteza</span>
        <h3>A ansiedade diante <em>do futuro</em></h3>
        <p>Documentos, visto, trabalho, dinheiro, moradia. Quando parte da sua vida depende de processos que você não controla, é fácil viver em estado de alerta, com a pergunta de sempre: “e se alguma coisa der errado?”</p>
        <ul><li>recomeçar amizades e rotina do zero</li><li>entender burocracias em outra língua</li><li>reconstruir várias áreas da vida ao mesmo tempo</li></ul>
      </article>
      <article className="card" data-reveal>
        <span className="card-k">Saudade e culpa</span>
        <h3>“Consegui o que queria… <em>por que ainda me sinto vazia?”</em></h3>
        <p>Morar fora pode realizar um sonho e, junto, despertar saudade, culpa e dúvidas sobre as próprias escolhas. Saudade não significa arrependimento. Sentir dificuldade na adaptação não quer dizer que você escolheu errado: mudanças importantes também envolvem perdas, despedidas e reconstruções.</p>
      </article>
      <article className="card feat" data-reveal>
        <span className="card-k">A pergunta que ninguém faz</span>
        <h3>“Você foi corajosa.” <em>E como você ficou depois de tudo isso?</em></h3>
        <p>Teve coragem de deixar pessoas, lugares e uma vida conhecida pra começar outra. Depois de um tempo fora, talvez você nem seja exatamente a mesma pessoa que saiu do Brasil: “eu pertenço aqui… mas também não pertenço mais do mesmo jeito”.</p>
      </article>
    </div>

    <div className="sec-foot" data-reveal>
      <p><b>Mora fora e se identificou?</b> Atendo brasileiras em qualquer país, por videochamada e em português. Você não precisa atravessar essa fase fingindo que está tudo bem o tempo todo.</p>
      <a className="btn btn-cocoa btn-sm" data-wa="fora" href={getWaLink("fora")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Quero conversar</a>
    </div>
  </div>
</section>

{/*  ============ FAIXA: MORAR FORA ============  */}
<section className="band" aria-label="Uma reflexão">
  <div className="wrap band-grid">
    <div data-reveal>
      <small>Entre dois mundos</small>
      <blockquote>Viver fora do Brasil exige muito de você, <em>mas não precisa significar viver no limite.</em></blockquote>
    </div>
    <div className="band-side" data-reveal>
      <b>Um dia de cada vez</b>
      “Eu sei que essa fase tem sido difícil. Não preciso ter todas as respostas hoje.” Dá pra construir pertencimento aos poucos, sem abandonar as suas raízes.
    </div>
  </div>
</section>

{/*  ============ ANSIEDADE E SOBRECARGA ============  */}
<section className="sec" id="ansiedade">
  <div className="wrap ans-grid">
    <div className="ans-side" data-reveal>
      <p className="kicker">Ansiedade e esgotamento feminino</p>
      <h2 className="h2">Quem cuida de você <em>enquanto você cuida de todo mundo?</em></h2>
      <p className="lead">Você cuida do trabalho, da casa, da família, responde todo mundo… e quando chega a sua vez, já não sobra energia. Talvez você não precise de mais uma lista de tarefas. Talvez precise de espaço pra entender o que está sentindo.</p>
      <div className="ans-note"><p>Ansiedade e sobrecarga não são sinal de fraqueza, exagero ou defeito de personalidade.</p></div>
    </div>

    <ul className="signs">
      <li className="sign" data-reveal>
        <b>A cabeça <em>não desliga</em></b>
        <p>Pensar em todos os cenários, antecipar problemas, sentir que precisa estar preparada pra tudo. Mesmo quando está tudo bem, você procura o que pode dar errado. Estar acostumada a viver ansiosa não significa que você precise continuar vivendo assim.</p>
      </li>
      <li className="sign" data-reveal>
        <b>A culpa chega <em>antes do descanso</em></b>
        <p>Como se parar fosse decepcionar alguém, e dizer “hoje eu não consigo” fosse egoísmo. Dá pra amar a sua família e, ainda assim, precisar de ajuda. Dá pra ser responsável sem assumir tudo sozinha.</p>
      </li>
      <li className="sign" data-reveal>
        <b>Nunca parece <em>o suficiente</em></b>
        <p>Você olha pra própria vida e só enxerga o que ainda falta, e esquece de reconhecer tudo o que já enfrentou pra chegar até aqui. Descansar também é respeitar o caminho que você está percorrendo.</p>
      </li>
      <li className="sign" data-reveal>
        <b>O silêncio de alguém <em>vira uma guerra por dentro</em></b>
        <p>A pessoa demora a responder e a mente começa a gritar: “fiz alguma coisa?”, “perdeu o interesse?”. Nem todo silêncio é rejeição. Dá pra sentir medo sem transformar esse medo em certeza.</p>
      </li>
      <li className="sign" data-reveal>
        <b>Viver pelo <em>olhar dos outros</em></b>
        <p>Buscar aprovação, se comparar, duvidar das próprias escolhas, diminuir as próprias conquistas. Alguém te criticar não significa que você é inadequada. A sua paz não pode depender de uma plateia.</p>
      </li>
      <li className="sign dark-s" data-reveal>
        <b>Limites <em>sem tanta culpa</em></b>
        <p>Ser gentil não significa concordar com tudo, se anular ou carregar responsabilidades que não são suas. Nem todo mundo vai gostar dos seus limites. E tudo bem.</p>
      </li>
    </ul>
  </div>
</section>

{/*  ============ COMO FUNCIONA ============  */}
<section className="sec how" id="terapia">
  <div className="wrap how-grid">
    <div data-reveal>
      <p className="kicker">Como funciona a terapia</p>
      <h2 className="h2">Um espaço pra entender o que você sente, <em>sem precisar fingir que está tudo bem.</em></h2>
      <p className="lead" style={{ marginTop: "22px" }}>A psicoterapia é um lugar pra compreender os seus padrões, reconhecer os seus limites e construir formas mais saudáveis de lidar com as demandas da vida. No seu tempo, e com escuta de verdade.</p>
      <div className="facts-row">
        <div className="fr"><b>On-line</b><span>por videochamada</span></div>
        <div className="fr"><b>Português</b><span>de qualquer país</span></div>
        <div className="fr"><b>Mulheres</b><span>no Brasil e fora dele</span></div>
      </div>
      <a className="btn btn-cocoa" data-wa="primeira" href={getWaLink("primeira")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Agendar a primeira sessão</a>
    </div>

    <div>
      <ol className="steps">
        <li className="step" data-reveal>
          <div><h3>Você me chama no WhatsApp</h3>
          <p>Conta um pouco do que está vivendo e onde você mora. A gente combina o melhor dia e horário pra primeira sessão.</p></div>
        </li>
        <li className="step" data-reveal>
          <div><h3>A primeira sessão</h3>
          <p>Por videochamada, de um lugar reservado. É o momento de eu conhecer a sua história e entender o que te trouxe até aqui. Você não precisa chegar sabendo explicar tudo.</p></div>
        </li>
        <li className="step" data-reveal>
          <div><h3>Compreender os padrões</h3>
          <p>Aos poucos, a gente olha pro que está por trás da ansiedade e da cobrança: separar o que você sabe daquilo que está imaginando, observar os pensamentos sem tratá-los como verdades, entender quais necessidades ficaram pelo caminho.</p></div>
        </li>
        <li className="step last" data-reveal>
          <div><h3>Uma relação mais leve com você mesma</h3>
          <p>Construir, no seu ritmo, formas mais saudáveis de se relacionar consigo e com a própria vida: cuidar de si sem precisar provar o seu valor ou se abandonar pra dar conta.</p></div>
        </li>
      </ol>

      <div className="helps" data-reveal>
        <span className="helps-k">Na terapia, você pode</span>
        <ul>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Ter clareza sobre o que está sentindo, em vez de só reagir.</span></li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Reconhecer quando precisa descansar, sem precisar merecer.</span></li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Aprender a colocar limites e a dizer não quando algo ultrapassa você.</span></li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Construir uma autoestima que não dependa do espelho do outro.</span></li>
        </ul>
        <p>Uma vida mais leve não é uma vida perfeita. É uma vida em que você também tem lugar.</p>
      </div>
    </div>
  </div>
</section>

{/*  ============ FAIXA: O COPO ============  */}
<section className="band" aria-label="Uma reflexão">
  <div className="wrap band-grid">
    <div data-reveal>
      <small>Sobre carregar tudo sozinha</small>
      <blockquote>O peso não muda. Mas o tempo pesa. <em>Você não desaba porque é fraca, mas porque é humana.</em></blockquote>
    </div>
    <div className="band-side" data-reveal>
      <b>Um copo d’água</b>
      Por um minuto, segurar é fácil. Por horas, o braço treme. É assim com a culpa, a ansiedade e as expectativas que você carrega em silêncio. Talvez hoje você só precise colocar o copo na mesa por alguns minutos.
    </div>
  </div>
</section>

{/*  ============ SOBRE ============  */}
<section className="sec" id="sobre">
  <div className="wrap about-grid">
    <div data-reveal>
      <figure className="about-photo">
        <img src="/assets/img/sobre.webp" alt="Andréia Porto de blazer marrom, sentada à mesa, olhando para a câmera" width="930" height="608" loading="lazy" />
      </figure>
      <p className="about-cap">O que nem sempre aparece nas fotos, nas conversas ou no “está tudo bem”.</p>
    </div>
    <div className="about-copy" data-reveal>
      <p className="kicker">Sobre mim</p>
      <h2 className="h2">Muito prazer, <em>eu sou a Andréia.</em></h2>
      <ul className="creds">
        <li>Psicóloga · CRP 12/19429</li>
        <li>Ansiedade e esgotamento feminino</li>
        <li>Brasileiras no exterior</li>
        <li>Atendimento on-line</li>
      </ul>
      <p>Sou psicóloga, com registro no Conselho Regional de Psicologia de Santa Catarina desde 2020. Atendo on-line mulheres no Brasil e brasileiras que vivem em outros países, com foco em ansiedade, sobrecarga e esgotamento, e nas questões emocionais que a vida fora do Brasil costuma trazer: adaptação, solidão, saudade, culpa e a sensação de recomeçar.</p>
      <div className="letter">
        <p>Tenho visto o quanto pode ser difícil reconhecer certos padrões e entender por que, mesmo percebendo que algo faz mal, a gente continua tentando sustentar.</p>
        <p>É justamente nesses detalhes, os que não aparecem nas fotos nem no “está tudo bem”, que eu gosto de olhar no meu trabalho. Você não precisa dar conta de tudo em silêncio. <em>Você também merece cuidado.</em></p>
        <span className="sig" aria-hidden="true">Andréia</span>
      </div>
      <a className="btn btn-outline btn-sm" href="https://www.instagram.com/andreiaportopsicologa/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-ig"/></svg>Acompanhe no Instagram</a>
    </div>
  </div>
</section>

{/*  ============ ONDE ATENDO ============  */}
<section className="sec where" id="atendimento">
  <div className="wrap">
    <div data-reveal>
      <p className="kicker">Onde atendo</p>
      <h2 className="h2">On-line, em português, <em>de onde você estiver.</em></h2>
    </div>
    <div className="where-grid">
      <article className="wcard online" data-reveal>
        <span className="wcard-k"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-tela"/></svg>Psicoterapia on-line</span>
        <h3>No Brasil ou em qualquer outro país</h3>
        <p>As sessões são por videochamada. A escuta, o cuidado e o sigilo são os mesmos de um consultório, com a vantagem de você não precisar se deslocar nem trocar de idioma pra falar do que sente.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Para mulheres no Brasil e brasileiras que moram fora</span></li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Basta internet, um fone e um lugar reservado</span></li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg><span>Base em Balneário Camboriú (SC)</span></li>
        </ul>
        <div className="row">
          <a className="btn btn-sand btn-sm" data-wa="online" href={getWaLink("online")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Agendar on-line</a>
        </div>
      </article>
      <article className="wcard" data-reveal>
        <span className="wcard-k"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-relogio"/></svg>Horários</span>
        <h3>Horário de Brasília</h3>
        <dl className="hours">
          <dt>Seg. a sex.</dt><dd>9h às 22h</dd>
          <dt>Sábado</dt><dd>9h às 12h</dd>
        </dl>
        <p>Mora em outro fuso? Me conta onde você está e a gente vê juntas os horários que funcionam pra você.</p>
        <div className="row">
          <a className="btn btn-cocoa btn-sm" data-wa="horario" href={getWaLink("horario")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Ver horários</a>
        </div>
      </article>
    </div>
    <p className="where-note">Valores, horários disponíveis e informações sobre reembolso são passados pelo WhatsApp.</p>
  </div>
</section>

{/*  ============ DÚVIDAS ============  */}
<section className="sec faq" id="duvidas">
  <div className="wrap faq-grid">
    <div className="faq-side" data-reveal>
      <p className="kicker">Dúvidas</p>
      <h2 className="h2">Perguntas <em>frequentes</em></h2>
      <p>Se ficou alguma dúvida sobre a terapia on-line, me manda uma mensagem. Vai ser um prazer te explicar.</p>
      <a className="btn btn-cocoa" data-wa="geral" href={getWaLink("geral")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Falar com a Andréia</a>
    </div>
    <div className="qa" data-reveal>
      {[
        {
          q: "Você atende brasileiras que moram em outro país?",
          a: "Sim. O atendimento é on-line, por videochamada e em português, pra brasileiras em qualquer país. É um espaço pra falar das questões emocionais que a vida fora do Brasil costuma trazer, sem precisar traduzir o que você sente."
        },
        {
          q: "Como funciona a sessão on-line?",
          a: "Você só precisa de internet, um fone de ouvido e um lugar onde possa falar à vontade. A escuta e o sigilo são os mesmos de um atendimento presencial."
        },
        {
          q: "E a diferença de fuso horário?",
          a: "Os horários são de segunda a sexta, das 9h às 22h, e aos sábados, das 9h às 12h (horário de Brasília). Me conta onde você mora e a gente encontra um horário que caiba na sua rotina."
        },
        {
          q: "Preciso estar muito mal pra começar terapia?",
          a: "Não. Você não precisa esperar chegar ao seu limite pra cuidar da sua saúde emocional. Se a ansiedade, o cansaço ou a cobrança estão pesando na sua rotina, já é motivo suficiente pra conversar."
        },
        {
          q: "Quanto custa? Tem reembolso?",
          a: "Os valores, os horários disponíveis e as informações sobre reembolso são passados pelo WhatsApp, junto com as demais informações sobre o atendimento."
        },
        {
          q: "Como faço para agendar?",
          a: "É só me chamar no WhatsApp (47) 99647-3690. Você conta um pouco do que está buscando e de onde fala, e a gente combina o melhor dia e horário pra primeira sessão."
        }
      ].map((item, idx) => (
        <details key={idx} open={openFaq === idx}>
          <summary onClick={(e) => { e.preventDefault(); toggleFaq(idx); }}>
            {item.q}<i aria-hidden="true"></i>
          </summary>
          <div className="ans"><p>{item.a}</p></div>
        </details>
      ))}
    </div>
  </div>
</section>

{/*  ============ CTA FINAL ============  */}
<section className="final" id="agendar">
  <div className="final-split">
    <div className="final-copy" data-reveal>
      <p className="kicker">Vamos conversar?</p>
      <h2>Você não precisa enfrentar tudo sozinha. <em>A gente começa por uma conversa.</em></h2>
      <p>Se você se reconheceu em alguma parte desta página, seja aqui no Brasil ou do outro lado do mundo, me manda uma mensagem. Você merece um espaço pra falar sobre o que sente, sem precisar fingir que está tudo bem.</p>
      <div className="row">
        <a className="btn btn-sand" data-wa="geral" href={getWaLink("geral")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Agendar pelo WhatsApp</a>
        <a className="btn btn-line" href="https://www.instagram.com/andreiaportopsicologa/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-ig"/></svg>@andreiaportopsicologa</a>
      </div>
      <p className="final-hours"><b>On-line, no Brasil e no exterior</b> · <span className="nw">(47) 99647-3690</span></p>
    </div>
    <figure className="final-photo">
      <img src="/assets/img/final.webp" alt="Andréia Porto em pé, de blazer rosa e calça clara, sorrindo e olhando para o lado" width="800" height="1600" loading="lazy" />
    </figure>
  </div>
</section>
</main>

{/*  ============ RODAPÉ ============  */}
<footer className="ft">
  <div className="wrap">
    <div className="ft-grid">
      <div>
        <a className="brand" href="#topo" aria-label="Andréia Porto, voltar ao início"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><use href="#i-marca-d"/></svg></span><span className="brand-txt"><span className="brand-name">Andréia Porto</span><span className="brand-sub">Psicóloga</span></span></a>
        <p className="ft-id">Andréia de Souza Porto Silva<br />Psicóloga · CRP 12/19429</p>
      </div>
      <div>
        <h4>Atendimento</h4>
        <ul>
          <li>On-line, por videochamada</li>
          <li>No Brasil e no exterior</li>
          <li>Base em Balneário Camboriú (SC)</li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <ul>
          <li><a data-wa="geral" href={getWaLink("geral")} target="_blank" rel="noopener noreferrer">WhatsApp (47) 99647-3690</a></li>
          <li><a href="https://www.instagram.com/andreiaportopsicologa/" target="_blank" rel="noopener noreferrer">@andreiaportopsicologa</a></li>
        </ul>
      </div>
      <div>
        <h4>Navegue</h4>
        <ul>
          <li><a href="#morar-fora">Morar fora</a></li>
          <li><a href="#ansiedade">Ansiedade e sobrecarga</a></li>
          <li><a href="#terapia">Como funciona</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </div>
    </div>
    <div className="ft-legal">
      <span>Este site tem caráter informativo e não substitui o atendimento psicológico. Em situação de crise, ligue 188 (CVV) ou procure o serviço de emergência mais próximo.</span>
      <span>© 2026 Andréia de Souza Porto Silva · CRP 12/19429</span>
    </div>
  </div>
</footer>

<a className={`mbar ${showMbar ? 'show' : ''}`} id="mbar" data-wa="geral" href={getWaLink("geral")} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Agendar pelo WhatsApp</a>

{/*  ícones  */}
<svg width="0" height="0" style={{"position": "absolute"}} aria-hidden="true">
  <symbol id="i-marca" viewBox="0 0 32 32"><circle cx="16" cy="16.5" r="8.5" fill="none" stroke="#F3ECE3" strokeWidth="1.7"/><ellipse cx="16" cy="16.5" rx="3.6" ry="8.5" fill="none" stroke="#E6B596" strokeWidth="1.3"/><path d="M7.8 14h16.4M7.8 19h16.4" fill="none" stroke="#E6B596" strokeWidth="1.1"/><circle cx="23.6" cy="8.6" r="2" fill="#E6B596"/></symbol>
  <symbol id="i-marca-d" viewBox="0 0 32 32"><circle cx="16" cy="16.5" r="8.5" fill="none" stroke="#5B3524" strokeWidth="1.7"/><ellipse cx="16" cy="16.5" rx="3.6" ry="8.5" fill="none" stroke="#A9592F" strokeWidth="1.3"/><path d="M7.8 14h16.4M7.8 19h16.4" fill="none" stroke="#A9592F" strokeWidth="1.1"/><circle cx="23.6" cy="8.6" r="2" fill="#A9592F"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.6 2.6L16 9.5"/></g></symbol>
  <symbol id="i-globo" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3.5 9h17M3.5 15h17"/></g></symbol>
  <symbol id="i-fala" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M4 5.5h16v10H10l-4.5 3.5v-3.5H4z"/><path d="M8 10.5h8" strokeLinecap="round"/></g></symbol>
  <symbol id="i-relogio" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g></symbol>
  <symbol id="i-tela" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M9 20h6M12 16.5V20"/></g></symbol>
  <symbol id="i-ig" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.050 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.450 9.91-9.91 0-2.650-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.150l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.230-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.840-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.050.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></symbol>
</svg>



    </>
  );
}
