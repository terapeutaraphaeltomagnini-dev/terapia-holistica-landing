export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">Raphael Tomagnini</h1>
          <a href="/" className="text-primary hover:underline">
            Voltar
          </a>
        </div>
      </header>

      <main className="container py-12 md:py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introdução
            </h2>
            <p>
              Sua privacidade é importante para nós. Esta Política de Privacidade
              explica como coletamos, usamos, protegemos e compartilhamos suas
              informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Informações que Coletamos
            </h2>
            <p>Coletamos informações que você nos fornece voluntariamente:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Nome e informações de contato (WhatsApp, email)</li>
              <li>Informações sobre sua situação emocional e saúde mental</li>
              <li>Histórico de atendimentos e notas terapêuticas</li>
              <li>Qualquer outra informação que você escolha compartilhar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p>Suas informações são usadas exclusivamente para:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Fornecer atendimento terapêutico personalizado</li>
              <li>Agendar e confirmar sessões</li>
              <li>Manter registros de seu progresso terapêutico</li>
              <li>Melhorar a qualidade do atendimento</li>
              <li>Comunicação relacionada ao seu atendimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Proteção de Dados
            </h2>
            <p>
              Implementamos medidas de segurança apropriadas para proteger suas
              informações pessoais contra acesso não autorizado, alteração,
              divulgação ou destruição. Suas informações são armazenadas de forma
              segura e acessíveis apenas a pessoas autorizadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Compartilhamento de Informações
            </h2>
            <p>
              Suas informações pessoais <strong>não são compartilhadas</strong> com
              terceiros, exceto quando legalmente obrigado ou quando você
              consentir explicitamente. Em caso de emergência médica, informações
              podem ser compartilhadas com profissionais de saúde conforme
              necessário.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Confidencialidade Profissional
            </h2>
            <p>
              O atendimento terapêutico segue princípios de confidencialidade
              profissional. Tudo o que você compartilha durante as sessões é
              confidencial, salvo em situações onde há risco iminente de dano a
              você ou a terceiros, conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Retenção de Dados
            </h2>
            <p>
              Seus dados são mantidos enquanto você estiver em atendimento e por
              um período adicional conforme exigido por lei ou prática
              profissional. Você pode solicitar a exclusão de seus dados a
              qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Seus Direitos
            </h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações imprecisas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento a qualquer momento</li>
              <li>Receber uma cópia de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Cookies e Rastreamento
            </h2>
            <p>
              Este site pode usar cookies para melhorar sua experiência. Você pode
              desabilitar cookies em suas configurações de navegador. Nenhum
              rastreamento invasivo é realizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Contato e Reclamações
            </h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou
              preocupações sobre como seus dados são tratados, entre em contato:
            </p>
            <div className="mt-4">
              <a href="https://wa.link/0zku4o" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Falar via WhatsApp
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Alterações nesta Política
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente.
              Alterações significativas serão comunicadas. O uso contínuo do site
              após alterações constitui aceitação da política revisada.
            </p>
          </section>

          <div className="bg-secondary/20 p-6 rounded-lg border border-border mt-8">
            <p className="text-sm">
              <strong>Última atualização:</strong> Fevereiro de 2026
            </p>
            <p className="text-sm mt-2">
              <strong>Compromisso:</strong> Sua privacidade e confiança são
              fundamentais para nós. Tratamos seus dados com o máximo cuidado e
              respeito.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/10 border-t border-border mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Raphael Tomagnini - Terapia Holística Online</p>
        </div>
      </footer>
    </div>
  );
}
