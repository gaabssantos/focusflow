import React, { useEffect, useState } from "react";
import { AlertTriangle, Book, ChevronRight, ChevronUp, Database, Eye, Globe, Lock, MessageCircle, Navigation, Shield, Trash2, Users } from "react-feather";
import { BackToTop, Container, PreVendaAlert, PrivacyContainer, PrivacyDivider, PrivacyFooter, PrivacyHeading, PrivacyHighlight, PrivacyHighlightTitle, PrivacyList, PrivacySection, PrivacySectionContent, PrivacyText, PrivacyToc, SectionTitle, TocItem, TocLink, TocList } from "./privacy.styles";

const PoliticaPrivacidade = () => {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const sections = document.querySelectorAll('.privacy-section-content');
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const privacySections = [
    {
      id: 'introducao',
      title: 'Introdução',
      icon: <Shield size={24} />,
      content: (
        <>
          <PrivacyText>
            A FocusFlow Tecnologia LTDA ("nós", "nosso" ou "FocusFlow") está comprometida com a proteção da sua privacidade e dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar nossa plataforma.
          </PrivacyText>
          <PrivacyText>
            Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis sobre privacidade e proteção de dados. Ao utilizar nossos serviços, você concorda com as práticas descritas neste documento.
          </PrivacyText>
          <PrivacyHighlight>
            <PrivacyHighlightTitle>Seu Consentimento</PrivacyHighlightTitle>
            <p>Ao criar uma conta ou utilizar os serviços do FocusFlow, você consente com a coleta, uso e processamento de seus dados conforme descrito nesta Política de Privacidade. Caso discorde de qualquer aspecto desta política, recomendamos que não utilize nossos serviços.</p>
          </PrivacyHighlight>
        </>
      )
    },
    {
      id: 'dados',
      title: 'Dados Coletados',
      icon: <Database size={24} />,
      content: (
        <>
          <PrivacyText>
            Para fornecer e melhorar nossos serviços, coletamos diferentes tipos de dados, incluindo:
          </PrivacyText>
          <PrivacyList>
            <li>
              <strong>Dados de cadastro:</strong> Nome, endereço de e-mail, número de telefone, endereço e, em alguns casos, dados de faturamento.
            </li>
            <li>
              <strong>Dados de uso:</strong> Informações sobre como você interage com nossa plataforma, incluindo tarefas criadas, tempo dedicado a atividades, metas estabelecidas e registros de produtividade.
            </li>
            <li>
              <strong>Dados técnicos:</strong> Endereço IP, tipo de navegador, dispositivo utilizado, sistema operacional, identificadores de dispositivos móveis, páginas visitadas e comportamento de navegação.
            </li>
            <li>
              <strong>Dados de comunicação:</strong> Comunicações que você mantém conosco por e-mail, chat ou outros canais de atendimento.
            </li>
          </PrivacyList>
          <PrivacyText>
            A coleta ocorre quando você cria uma conta, utiliza nossos serviços, interage com nosso site ou aplicativo, ou se comunica conosco diretamente.
          </PrivacyText>
        </>
      )
    },
    {
      id: 'uso',
      title: 'Uso dos Dados',
      icon: <Eye size={24} />,
      content: (
        <>
          <PrivacyText>
            Utilizamos seus dados para os seguintes propósitos:
          </PrivacyText>
          <PrivacyList>
            <li>Fornecer, manter e melhorar nossos serviços</li>
            <li>Personalizar sua experiência na plataforma</li>
            <li>Processar pagamentos e administrar sua conta</li>
            <li>Enviar comunicações sobre sua conta, atualizações de serviço e novos recursos</li>
            <li>Responder a suas solicitações, dúvidas e oferecer suporte</li>
            <li>Analisar tendências e comportamentos para melhorar a plataforma</li>
            <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </PrivacyList>
          <PrivacyHighlight>
            <PrivacyHighlightTitle>Marketing e Comunicações</PrivacyHighlightTitle>
            <p>Com seu consentimento, podemos enviar comunicações de marketing sobre nossos serviços, dicas de produtividade e ofertas especiais. Você pode optar por não receber essas comunicações a qualquer momento através do link de cancelamento de inscrição em nossos e-mails ou ajustando suas preferências de notificação em sua conta.</p>
          </PrivacyHighlight>
        </>
      )
    },
    {
      id: 'compartilhamento',
      title: 'Compartilhamento de Dados',
      icon: <Users size={24} />,
      content: (
        <>
          <PrivacyText>
            Podemos compartilhar seus dados nas seguintes circunstâncias:
          </PrivacyText>
          <PrivacyList>
            <li>
              <strong>Provedores de serviços:</strong> Compartilhamos dados com terceiros que nos ajudam a operar, fornecer e melhorar nossos serviços (como processadores de pagamento, serviços de hospedagem, análise de dados e atendimento ao cliente).
            </li>
            <li>
              <strong>Parceiros comerciais:</strong> Em alguns casos, podemos compartilhar informações com parceiros comerciais para oferecer produtos ou serviços complementares.
            </li>
            <li>
              <strong>Requisitos legais:</strong> Podemos divulgar seus dados quando exigido por lei, processo judicial ou solicitação governamental.
            </li>
            <li>
              <strong>Proteção de direitos:</strong> Podemos compartilhar dados para proteger nossos direitos, propriedade ou segurança, ou os direitos, propriedade ou segurança de nossos usuários ou outros.
            </li>
          </PrivacyList>
          <PrivacyText>
            Nossos provedores de serviços estão sujeitos a obrigações contratuais de confidencialidade e devem usar seus dados apenas para os fins especificados por nós.
          </PrivacyText>
        </>
      )
    },
    {
      id: 'seguranca',
      title: 'Segurança dos Dados',
      icon: <Lock size={24} />,
      content: (
        <>
          <PrivacyText>
            Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação acidental. Algumas dessas medidas incluem:
          </PrivacyText>
          <PrivacyList>
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos para nossos sistemas e bancos de dados</li>
            <li>Monitoramento regular de segurança e testes de vulnerabilidade</li>
            <li>Procedimentos internos para resposta a incidentes</li>
            <li>Treinamento regular da equipe sobre práticas de segurança</li>
          </PrivacyList>
          <PrivacyText>
            Embora nos esforcemos para proteger seus dados, nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro. Portanto, não podemos garantir segurança absoluta.
          </PrivacyText>
          <PrivacyHighlight>
            <PrivacyHighlightTitle>Notificação de Violação</PrivacyHighlightTitle>
            <p>No caso improvável de uma violação de dados que possa comprometer sua privacidade ou segurança, notificaremos você e as autoridades competentes conforme exigido por lei.</p>
          </PrivacyHighlight>
        </>
      )
    },
    {
      id: 'retencao',
      title: 'Retenção de Dados',
      icon: <Trash2 size={24} />,
      content: (
        <>
          <PrivacyText>
            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir os propósitos para os quais foram coletados, incluindo para satisfazer requisitos legais, contábeis ou de relatórios.
          </PrivacyText>
          <PrivacyText>
            Para determinar o período apropriado de retenção, consideramos:
          </PrivacyText>
          <PrivacyList>
            <li>A quantidade, natureza e sensibilidade dos dados</li>
            <li>O risco potencial de danos por uso ou divulgação não autorizados</li>
            <li>Os propósitos para os quais processamos seus dados</li>
            <li>Se podemos alcançar esses propósitos por outros meios</li>
            <li>Requisitos legais aplicáveis</li>
          </PrivacyList>
          <PrivacyText>
            Após o encerramento da sua conta, manteremos alguns dados por um período limitado para cumprir obrigações legais, resolver disputas e fazer cumprir nossos acordos. Dados anonimizados podem ser mantidos por períodos mais longos para fins estatísticos e de melhoria do serviço.
          </PrivacyText>
        </>
      )
    },
    {
      id: 'internacional',
      title: 'Transferências Internacionais',
      icon: <Globe size={24} />,
      content: (
        <>
          <PrivacyText>
            O FocusFlow opera globalmente e pode transferir, processar e armazenar seus dados em outros países além do Brasil. Esses países podem ter leis de proteção de dados diferentes das leis brasileiras.
          </PrivacyText>
          <PrivacyText>
            Quando transferimos seus dados para outros países, tomamos medidas para garantir que sejam tratados com o mesmo nível de proteção exigido pela LGPD e outras leis aplicáveis. Essas medidas podem incluir:
          </PrivacyText>
          <PrivacyList>
            <li>Utilização de cláusulas contratuais específicas aprovadas por autoridades de proteção de dados</li>
            <li>Transferência para países com decisões de adequação reconhecidas</li>
            <li>Implementação de salvaguardas técnicas e organizacionais adicionais</li>
          </PrivacyList>
          <PrivacyText>
            Ao utilizar nossos serviços, você concorda com a transferência de seus dados para esses países conforme descrito nesta política.
          </PrivacyText>
        </>
      )
    },
    {
      id: 'direitos',
      title: 'Seus Direitos',
      icon: <Shield size={24} />,
      content: (
        <>
          <PrivacyText>
            De acordo com a LGPD e outras leis de proteção de dados aplicáveis, você tem os seguintes direitos em relação aos seus dados pessoais:
          </PrivacyText>
          <PrivacyList>
            <li>
              <strong>Direito de acesso:</strong> Solicitar confirmação de que processamos seus dados e obter acesso a eles.
            </li>
            <li>
              <strong>Direito de retificação:</strong> Corrigir dados incompletos, inexatos ou desatualizados.
            </li>
            <li>
              <strong>Direito de exclusão:</strong> Solicitar a exclusão de seus dados em determinadas circunstâncias.
            </li>
            <li>
              <strong>Direito de oposição:</strong> Opor-se ao processamento de seus dados em determinadas situações.
            </li>
            <li>
              <strong>Direito à portabilidade:</strong> Receber seus dados em formato estruturado e transferi-los para outro controlador.
            </li>
            <li>
              <strong>Direito de revogar o consentimento:</strong> Retirar seu consentimento a qualquer momento.
            </li>
          </PrivacyList>
          <PrivacyText>
            Para exercer qualquer desses direitos, entre em contato conosco através dos canais indicados no final desta política. Responderemos a todas as solicitações dentro do prazo legal.
          </PrivacyText>
          <PrivacyHighlight>
            <PrivacyHighlightTitle>Limitações</PrivacyHighlightTitle>
            <p>Em determinadas circunstâncias, podemos não atender completamente sua solicitação, como quando a mesma conflitar com nossas obrigações legais ou afetar direitos de terceiros. Nestes casos, explicaremos os motivos da nossa decisão.</p>
          </PrivacyHighlight>
        </>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies e Tecnologias Similares',
      icon: <Navigation size={24} />,
      content: (
        <>
          <PrivacyText>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, entender como você usa nossos serviços e personalizar nosso conteúdo.
          </PrivacyText>
          <PrivacyText>
            Os tipos de cookies que utilizamos incluem:
          </PrivacyText>
          <PrivacyList>
            <li>
              <strong>Cookies essenciais:</strong> Necessários para o funcionamento básico da plataforma.
            </li>
            <li>
              <strong>Cookies de preferências:</strong> Permitem que a plataforma lembre suas escolhas e preferências.
            </li>
            <li>
              <strong>Cookies analíticos:</strong> Nos ajudam a entender como os usuários interagem com a plataforma.
            </li>
            <li>
              <strong>Cookies de marketing:</strong> Utilizados para exibir publicidade relevante (quando aplicável).
            </li>
          </PrivacyList>
          <PrivacyText>
            Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. No entanto, desabilitar certos cookies pode afetar sua experiência na plataforma.
          </PrivacyText>
        </>
      )
    },
    {
      id: 'contato',
      title: 'Entre em Contato',
      icon: <MessageCircle size={24} />,
      content: (
        <>
          <PrivacyText>
            Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao processamento de seus dados pessoais, entre em contato conosco pelos seguintes canais:
          </PrivacyText>
          <PrivacyText>
            <strong>E-mail:</strong> focusflow449@gmail.com<br />
            <strong>Telefone:</strong> (11) 99011-5235
          </PrivacyText>
          <PrivacyHighlight>
            <PrivacyHighlightTitle>Prazos de Resposta</PrivacyHighlightTitle>
            <p>Responderemos a todas as solicitações dentro do prazo legal de 15 dias, exceto em casos de alta complexidade, quando o prazo poderá ser estendido.</p>
          </PrivacyHighlight>
        </>
      )
    },
  ];
  
  return (
    <PrivacySection id="top">
      <Container>
        <SectionTitle>
          <h2>Política de Privacidade</h2>
          <p>Como protegemos e utilizamos seus dados na plataforma FocusFlow.</p>
        </SectionTitle>
        
        <PrivacyContainer>
          <PreVendaAlert>
            <div className="icon">
              <AlertTriangle size={24} />
            </div>
            <div className="content">
              <h4>Aviso de Pré-venda</h4>
              <p>O FocusFlow encontra-se atualmente em fase de pré-venda. Esta Política de Privacidade se aplica tanto durante o período de pré-venda quanto após o lançamento oficial da plataforma.</p>
            </div>
          </PreVendaAlert>
          
          <PrivacyToc>
            <h3>
              <Book size={20} />
              Sumário
            </h3>
            
            <TocList>
              {privacySections.map(section => (
                <TocItem key={section.id}>
                  <TocLink
                    href={`#${section.id}`}
                    className={activeSection === section.id ? 'active' : ''}
                  >
                    <ChevronRight size={16} />
                    {section.title}
                  </TocLink>
                </TocItem>
              ))}
            </TocList>
          </PrivacyToc>
          
          {privacySections.map((section, index) => (
            <React.Fragment key={section.id}>
              <PrivacySectionContent id={section.id} className="privacy-section-content">
                <PrivacyHeading>
                  {section.icon}
                  {section.title}
                </PrivacyHeading>
                {section.content}
              </PrivacySectionContent>
              
              {index < privacySections.length - 1 && <PrivacyDivider />}
            </React.Fragment>
          ))}
          
          <PrivacyFooter>
            <p>Última atualização: 17 de Maio de 2025</p>
            <BackToTop href="#top" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <ChevronUp size={16} />
              Voltar ao topo
            </BackToTop>
          </PrivacyFooter>
        </PrivacyContainer>
      </Container>
    </PrivacySection>
  );
};

export default PoliticaPrivacidade;