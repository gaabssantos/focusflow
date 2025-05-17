import React, { useEffect, useState } from 'react';

import {
  Book,
  Info,
  Monitor,
  CreditCard,
  Lock,
  User,
  Shield,
  AlertTriangle,
  ChevronRight,
  ChevronUp,
  Plus,
} from 'react-feather';
import {
  BackToTop,
  Container,
  PreVendaAlert,
  SectionTitle,
  TermsContainer,
  TermsDivider,
  TermsFooter,
  TermsHeading,
  TermsHighlight,
  TermsHighlightTitle,
  TermsList,
  TermsSection,
  TermsSectionContent,
  TermsText,
  TermsToc,
  TocItem,
  TocLink,
  TocList,
} from './termos-servicos.styles';
import { BiCopyright } from 'react-icons/bi';

const TermosServicos = () => {
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
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll('.terms-section-content');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const termSections = [
    {
      id: 'aceite',
      title: 'Aceite dos Termos',
      icon: <Info size={24} />,
      content: (
        <>
          <TermsText>
            Ao acessar ou utilizar os serviços da plataforma FocusFlow, você
            concorda integralmente com os termos e condições aqui descritos.
            Estes termos constituem um acordo legal entre você, na condição de
            usuário, e a FocusFlow Tecnologia LTDA. Se você não concordar com
            algum dos termos apresentados, recomendamos que não utilize nossos
            serviços.
          </TermsText>
          <TermsHighlight>
            <TermsHighlightTitle>Importante</TermsHighlightTitle>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento,
              sendo de sua responsabilidade verificar periodicamente as
              atualizações. O uso continuado da plataforma após a publicação de
              alterações constitui aceitação dessas mudanças.
            </p>
          </TermsHighlight>
        </>
      ),
    },
    {
      id: 'servicos',
      title: 'Descrição dos Serviços',
      icon: <Monitor size={24} />,
      content: (
        <>
          <TermsText>
            O FocusFlow é uma plataforma de produtividade e gestão de tempo que
            oferece ferramentas para organização pessoal, gerenciamento de
            tarefas, técnicas de concentração e acompanhamento de metas. Nossos
            serviços são fornecidos através de aplicativos web e mobile, com
            funcionalidades que podem variar de acordo com o plano contratado.
          </TermsText>
          <TermsText>
            Nos esforçamos para manter a plataforma disponível 24 horas por dia,
            mas não garantimos que o acesso será ininterrupto ou livre de erros.
            Reservamos o direito de modificar, suspender ou descontinuar,
            temporária ou permanentemente, qualquer funcionalidade ou serviço,
            com ou sem aviso prévio.
          </TermsText>
          <TermsText>Os principais serviços oferecidos incluem:</TermsText>
          <TermsList>
            <li>Gerenciamento de tarefas e projetos</li>
            <li>Timer Pomodoro e outras técnicas de foco</li>
            <li>Ferramentas de planejamento diário, semanal e mensal</li>
            <li>Análises e relatórios de produtividade</li>
            <li>Integrações com outras plataformas e serviços</li>
            <li>
              Recursos de colaboração para equipes (em planos específicos)
            </li>
          </TermsList>
        </>
      ),
    },
    {
      id: 'assinatura',
      title: 'Planos e Assinaturas',
      icon: <CreditCard size={24} />,
      content: (
        <>
          <TermsText>
            Atualmente, durante esta fase de pré-venda, todos os planos pagos
            funcionam com pagamento único. Após o lançamento oficial e período
            de teste, o sistema migrará para o modelo de assinatura recorrente.
          </TermsText>
          <TermsHighlight>
            <TermsHighlightTitle>Renovação Automática</TermsHighlightTitle>
            <p>
              Após o período de pré-venda, implementaremos planos de assinatura
              mensais e outros períodos. As assinaturas serão renovadas
              automaticamente ao final de cada período. Caso não deseje renovar,
              você deverá cancelar sua assinatura pelo menos 24 horas antes do
              término do período atual para evitar a cobrança do próximo ciclo.
            </p>
          </TermsHighlight>
          <TermsText>
            Nos reservamos o direito de modificar os preços e benefícios dos
            planos, mediante aviso prévio de pelo menos 30 dias antes da
            renovação. Qualquer alteração entrará em vigor apenas no próximo
            ciclo de cobrança.
          </TermsText>
        </>
      ),
    },
    {
      id: 'pagamento',
      title: 'Pagamentos e Reembolsos',
      icon: <Lock size={24} />,
      content: (
        <>
          <TermsText>
            Aceitamos diversas formas de pagamento, incluindo cartão de crédito,
            PIX e boleto bancário. Todas as transações são processadas de forma
            segura por sistemas de pagamento certificados.
          </TermsText>
          <TermsText>
            Em caso de insatisfação com o serviço, oferecemos garantia de
            reembolso de 30 dias a partir da data da primeira contratação de
            qualquer plano pago. Para solicitar o reembolso dentro deste
            período, entre em contato com nossa equipe de suporte.
            (focusflow449@gmail.com)
          </TermsText>
          <TermsText>
            Após o período de 15 dias ou em caso de renovações automáticas, não
            realizamos reembolsos proporcionais para cancelamentos no meio do
            período de assinatura. Ao cancelar, você continuará tendo acesso aos
            recursos pagos até o final do período atual.
          </TermsText>
          <TermsText>
            Em casos de promoções, ofertas especiais ou descontos, condições
            específicas podem ser aplicadas e serão claramente comunicadas no
            momento da contratação.
          </TermsText>
        </>
      ),
    },
    {
      id: 'conta',
      title: 'Conta e Responsabilidades',
      icon: <User size={24} />,
      content: (
        <>
          <TermsText>
            Durante o período de pré-venda, estamos desenvolvendo o produto.
            Após a finalização do FocusFlow, enviaremos um e-mail com sua senha
            para acesso à plataforma. Você é responsável por manter a
            confidencialidade de suas credenciais de acesso e por todas as
            atividades realizadas em sua conta.
          </TermsText>
          <TermsText>
            Cada conta é pessoal e intransferível. No caso de planos para
            equipes ou empresas, o administrador da conta é responsável por
            gerenciar os acessos e garantir que todos os usuários estejam
            cientes e de acordo com estes termos.
          </TermsText>
          <TermsHighlight>
            <TermsHighlightTitle>Segurança da Conta</TermsHighlightTitle>
            <p>
              Notifique-nos imediatamente caso suspeite de uso não autorizado da
              sua conta ou de qualquer violação de segurança. O FocusFlow não
              será responsável por perdas ou danos resultantes do descumprimento
              desta obrigação.
            </p>
          </TermsHighlight>
          <TermsText>
            Reservamos o direito de suspender ou encerrar contas que violem
            estes termos ou que apresentem comportamentos suspeitos ou
            fraudulentos.
          </TermsText>
        </>
      ),
    },
    {
      id: 'privacidade',
      title: 'Privacidade e Dados',
      icon: <Shield size={24} />,
      content: (
        <>
          <TermsText>
            A proteção dos seus dados é uma prioridade para nós. As informações
            sobre como coletamos, utilizamos e protegemos seus dados estão
            detalhadas em nossa Política de Privacidade, que é parte integrante
            destes Termos de Serviço.
          </TermsText>
          <TermsText>
            Ao utilizar nossos serviços, você consente com a coleta e
            processamento de dados conforme descrito em nossa Política de
            Privacidade, sempre em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) e outras legislações aplicáveis.
          </TermsText>
          <TermsText>
            Você tem o direito de solicitar acesso, correção ou exclusão dos
            seus dados pessoais a qualquer momento, conforme detalhado em nossa
            Política de Privacidade.
          </TermsText>
        </>
      ),
    },
    {
      id: 'propriedade',
      title: 'Propriedade Intelectual',
      icon: <BiCopyright size={24} />,
      content: (
        <>
          <TermsText>
            Todo o conteúdo disponibilizado na plataforma FocusFlow, incluindo
            textos, gráficos, logotipos, ícones, imagens, clipes de áudio,
            downloads digitais e compilações de dados, é propriedade exclusiva
            da FocusFlow Tecnologia LTDA ou de seus fornecedores de conteúdo,
            estando protegido pelas leis de propriedade intelectual.
          </TermsText>
          <TermsText>
            Você não tem permissão para copiar, modificar, distribuir, vender,
            alugar ou explorar comercialmente qualquer parte da plataforma ou de
            seu conteúdo sem nossa autorização expressa por escrito.
          </TermsText>
          <TermsText>
            Ao enviar sugestões, ideias ou feedbacks sobre o FocusFlow, você nos
            concede uma licença não exclusiva, gratuita, perpétua e irrevogável
            para usar, modificar, publicar e/ou incorporar esse conteúdo em
            nossos serviços sem qualquer compensação.
          </TermsText>
        </>
      ),
    },
    {
      id: 'restricoes',
      title: 'Restrições de Uso',
      icon: <AlertTriangle size={24} />,
      content: (
        <>
          <TermsText>Ao utilizar o FocusFlow, você concorda em não:</TermsText>
          <TermsList>
            <li>
              Usar o serviço para qualquer finalidade ilegal ou não autorizada
            </li>
            <li>
              Tentar acessar, extrair ou manipular dados não destinados a você
            </li>
            <li>
              Interferir ou comprometer a integridade ou segurança da plataforma
            </li>
            <li>
              Burlar ou contornar medidas que usamos para evitar ou restringir o
              acesso
            </li>
            <li>
              Utilizar scripts automatizados ou bots para interagir com o
              serviço
            </li>
            <li>Enviar conteúdo ofensivo, abusivo, difamatório ou ilegal</li>
            <li>Infringir ou violar direitos de propriedade intelectual</li>
          </TermsList>
          <TermsText>
            Qualquer violação dessas restrições pode resultar no encerramento
            imediato da sua conta e possíveis ações legais.
          </TermsText>
        </>
      ),
    },
    {
      id: 'prevenda',
      title: 'Termos de Pré-venda',
      icon: <Plus size={24} />,
      content: (
        <>
          <TermsText>
            Alguns produtos ou recursos do FocusFlow podem ser oferecidos em
            formato de pré-venda antes de seu lançamento oficial. Ao adquirir um
            item em pré-venda, você concorda com as seguintes condições
            específicas:
          </TermsText>
          <TermsList>
            <li>
              O recebimento do produto final ocorrerá apenas quando o
              desenvolvimento for concluído
            </li>
            <li>
              As datas de lançamento são estimativas e podem sofrer alterações
            </li>
            <li>
              As funcionalidades finais podem diferir ligeiramente das
              descrições preliminares
            </li>
            <li>
              Você terá acesso prioritário quando o produto for oficialmente
              lançado
            </li>
            <li>
              Compradores de pré-venda podem receber benefícios exclusivos e
              preços especiais
            </li>
          </TermsList>
          <TermsHighlight>
            <TermsHighlightTitle>
              Importante sobre Pré-vendas
            </TermsHighlightTitle>
            <p>
              Produtos adquiridos em pré-venda estão sujeitos à nossa política
              específica de reembolso de pré-venda, que permite solicitação de
              reembolso em até 30 dias após a compra, independentemente do
              lançamento do produto.
            </p>
          </TermsHighlight>
          <TermsText>
            Manteremos você informado sobre o progresso do desenvolvimento e as
            datas estimadas de lançamento através do e-mail cadastrado em sua
            conta.
          </TermsText>
        </>
      ),
    },
  ];

  return (
    <TermsSection id="top">
      <Container>
        <SectionTitle>
          <h2>Termos e Serviços</h2>
          <p>Conheça os termos de uso e políticas da plataforma FocusFlow.</p>
        </SectionTitle>

        <TermsContainer>
          <PreVendaAlert>
            <div className="icon">
              <AlertTriangle size={24} />
            </div>
            <div className="content">
              <h4>Aviso de Pré-venda</h4>
              <p>
                O FocusFlow encontra-se atualmente em fase de pré-venda. Ao
                adquirir qualquer plano ou recurso, você está participando de
                uma pré-venda e receberá acesso ao produto somente quando o
                desenvolvimento for finalizado. Para mais detalhes, consulte a
                seção "Termos de Pré-venda" abaixo.
              </p>
            </div>
          </PreVendaAlert>

          <TermsToc>
            <h3>
              <Book size={20} />
              Sumário
            </h3>

            <TocList>
              {termSections.map((section) => (
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
          </TermsToc>

          {termSections.map((section, index) => (
            <React.Fragment key={section.id}>
              <TermsSectionContent
                id={section.id}
                className="terms-section-content"
              >
                <TermsHeading>
                  {section.icon}
                  {section.title}
                </TermsHeading>
                {section.content}
              </TermsSectionContent>

              {index < termSections.length - 1 && <TermsDivider />}
            </React.Fragment>
          ))}

          <TermsFooter>
            <p>Última atualização: 17 de Maio de 2025</p>
            <BackToTop
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <ChevronUp size={16} />
              Voltar ao topo
            </BackToTop>
          </TermsFooter>
        </TermsContainer>
      </Container>
    </TermsSection>
  );
};

export default TermosServicos;
