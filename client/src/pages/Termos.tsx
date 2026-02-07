export default function Termos() {
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
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar este site, você concorda em cumprir estes
              termos de uso. Se você não concordar com qualquer parte destes
              termos, por favor, não utilize o site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Uso Responsável
            </h2>
            <p>
              Você concorda em usar este site apenas para fins legais e de forma
              que não infrinja os direitos de terceiros ou restrinja seu uso e
              gozo. Comportamento proibido inclui:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Assediar ou causar angústia ou inconveniente a qualquer pessoa</li>
              <li>Transmitir conteúdo obsceno ou ofensivo</li>
              <li>Interromper o fluxo normal de diálogo dentro do site</li>
              <li>Tentar ganhar acesso não autorizado aos sistemas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Natureza do Atendimento
            </h2>
            <p>
              O atendimento terapêutico oferecido é de natureza complementar e
              holística. <strong>Não constitui tratamento médico</strong> e não
              substitui consultas com profissionais de saúde licenciados.
            </p>
            <p className="mt-3">
              Se você está enfrentando uma emergência emocional ou crise, procure
              imediatamente um profissional de saúde mental ou serviço de
              emergência.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Responsabilidade Pessoal
            </h2>
            <p>
              Você é responsável por qualquer decisão que tome com base nas
              informações ou orientações fornecidas durante os atendimentos. O
              terapeuta oferece suporte e orientação, mas a responsabilidade
              final por suas escolhas é sua.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Confidencialidade
            </h2>
            <p>
              Todas as informações compartilhadas durante os atendimentos são
              confidenciais e protegidas. Consulte a Política de Privacidade para
              detalhes completos sobre como seus dados são tratados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p>
              O site e os serviços são fornecidos "como estão". O terapeuta não
              se responsabiliza por danos indiretos, incidentais ou
              consequentes decorrentes do uso ou impossibilidade de uso do site
              ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Modificações dos Termos
            </h2>
            <p>
              Estes termos podem ser modificados a qualquer momento. Mudanças
              significativas serão comunicadas. O uso contínuo do site após
              modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre estes termos, entre em contato via WhatsApp:
            </p>
            <div className="mt-4">
              <a href="https://wa.link/0zku4o" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Falar via WhatsApp
                </button>
              </a>
            </div>
          </section>

          <div className="bg-secondary/20 p-6 rounded-lg border border-border mt-8">
            <p className="text-sm">
              <strong>Última atualização:</strong> Fevereiro de 2026
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
