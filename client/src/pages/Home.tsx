import { Button } from "@/components/ui/button";
import { Heart, Shield, Ear, Zap, Users, BookOpen } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Minimalismo Acolhedor
 * - Espaço em branco generoso (respiro visual)
 * - Tipografia humanizada (Poppins + Inter)
 * - Cores neutras com acentos suaves (verde-menta, azul-acinzentado)
 * - Foco em conexão emocional e conversão via WhatsApp
 * - Sem animações excessivas, apenas transições suaves
 */

const WHATSAPP_LINK = "https://wa.link/0zku4o";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Mente e Corpo em Harmonia</h1>
          </div>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Terapia Holística Online
          </p>
        </div>
      </header>

      <main className="flex-1">
        {/* ========== HERO SECTION ========== */}
        <section className="section-spacing relative overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto Hero */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Você não precisa carregar isso sozinho(a).
                  </h1>
                  <p className="text-xl text-accent font-semibold">
                    Aqui você é ouvido(a).
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Se você sente ansiedade, não pertencimento, sobrecarga emocional ou a sensação de que ninguém realmente ouve o que você tem a dizer, você encontrou um espaço seguro.
                </p>

                <p className="text-base text-foreground leading-relaxed">
                  Aqui não há julgamentos, rótulos ou pressões. Apenas acolhimento genuíno e transformação emocional.
                </p>

                <div className="pt-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-cta w-full sm:w-auto">
                      Quero ser ouvido(a) agora
                    </Button>
                  </a>
                </div>
              </div>

              {/* Imagem Hero */}
              <div className="hidden md:block">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/iDym2sMimKToYvvQOhhE1V/sandbox/qGD9IOFk0MRxHiw7RhiZ1t-img-1_1770413061000_na1fn_aGVyby10aGVyYXB5LWNhbG0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaUR5bTJzTWltS1RvWXZ2UU9oaEUxVi9zYW5kYm94L3FHRDlJT0ZrME1SeEhpdzdSaGlaMXQtaW1nLTFfMTc3MDQxMzA2MTAwMF9uYTFmbl9hR1Z5YnkxMGFHVnlZWEI1TFdOaGJHMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V~45CN52Cbx~98An4LchPjWU2YGPsLljHYJO6KX8l8eUoLWBTLIfoG5Ec8BjOdRsC8djOCQIUZcL5qczRIm7gmdUIOd6VmfLWN1Hv~kE7SRqwftYe7L3v6Ei~oLJZY7HtanSWyPkpkA0fCWO7ia6~x2YpjZDFXRdl1HWO9TFrOO6F6MXBzzGK42KlRKseBTxhsHSXGbmGgd4I5pfk~uVtzPuxEedbhKEPqpLZsCi4QiA9RYgE4DkFYNWlhJUJW~zEIFmm02AethNCjeVFk1dKPhzNUJ3tgDd6JWw6vRLZM5eFB86UI1bXq032MccmKoVcltLw11Q5K6uqJvtbqDU7g__"
                  alt="Espaço terapêutico acolhedor"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== IDENTIFICAÇÃO COM A DOR ========== */}
        <section className="section-spacing bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Você se sente assim?
              </h2>
              <p className="text-lg text-muted-foreground">
                Você não está sozinho(a). Muitas pessoas sentem o mesmo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Ansiedade Constante",
                  description:
                    "Aquele nó no peito, a mente acelerada, a sensação de que algo ruim vai acontecer.",
                },
                {
                  icon: Users,
                  title: "Sensação de Exclusão",
                  description:
                    "Dificuldade em se conectar com outras pessoas, sentir-se diferente ou não pertencente.",
                },
                {
                  icon: Ear,
                  title: "Não Ser Ouvido(a)",
                  description:
                    "Falar e sentir que ninguém realmente entende ou se importa com o que você tem a dizer.",
                },
                {
                  icon: Shield,
                  title: "Sobrecarga Emocional",
                  description:
                    "Carregar emoções pesadas sozinho(a), sem espaço seguro para expressar o que sente.",
                },
              ].map((item, idx) => (
                <div key={idx} className="card-subtle">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== COMO FUNCIONA ========== */}
        <section className="section-spacing">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como funciona o atendimento
              </h2>
              <p className="text-lg text-muted-foreground">
                Simples, prático e totalmente online
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "1",
                  title: "Você entra em contato",
                  description:
                    "Envie uma mensagem pelo WhatsApp. Sem compromisso, sem formulários complicados.",
                },
                {
                  number: "2",
                  title: "Agendamos juntos",
                  description:
                    "Vamos entender as suas necessidades, escolher o melhor dia e horário que se adequa à sua rotina. Flexibilidade total.",
                },
                {
                  number: "3",
                  title: "Confirmamos o pagamento",
                  description:
                    "Após ajustarmos todas as necessidades, será enviado link de pagamento ou pix para confirmar sua sessão.",
                },
                {
                  number: "4",
                  title: "Atendimento online",
                  description:
                    "Conecte-se de qualquer lugar, no conforto e privacidade do seu espaço.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span className="text-2xl font-bold">{item.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="btn-cta">Falar com o terapeuta</Button>
              </a>
            </div>
          </div>
        </section>

        {/* ========== ABORDAGENS TERAPÊUTICAS ========== */}
        <section className="section-spacing bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Abordagens utilizadas
              </h2>
              <p className="text-lg text-muted-foreground">
                Técnicas comprovadas e humanizadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Reiki",
                  description:
                    "Canalização de energia para equilíbrio emocional e bem-estar. Linhas Mikao Usui e Tibetano.",
                },
                {
                  title: "Programação Neurolinguística (PNL)",
                  description:
                    "Reprogramação de padrões mentais que geram ansiedade e limitações emocionais.",
                },
                {
                  title: "Constelação Familiar Sistêmica",
                  description:
                    "Resolução de conflitos emocionais e padrões familiares que impactam sua vida.",
                },
                {
                  title: "Homeopatia",
                  description:
                    "Tratamento natural que estimula a capacidade de autocura do corpo e mente.",
                },
                {
                  title: "Mentoria para Adolescentes",
                  description:
                    "Acolhimento especializado para jovens em transição e desenvolvimento emocional.",
                },
                {
                  title: "Mentoria de Vida",
                  description:
                    "Orientação para clareza de propósito, decisões importantes e transformação pessoal.",
                },
              ].map((item, idx) => (
                <div key={idx} className="card-subtle">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 md:p-8 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-center text-foreground">
                <span className="font-semibold">Importante:</span> Estas abordagens
                são complementares e não substituem acompanhamento médico quando
                necessário. Se você está em crise ou precisa de intervenção médica
                urgente, procure um profissional de saúde.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SOBRE RAPHAEL - FORMAÇÕES ========== */}
        <section className="section-spacing">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre Raphael Tomagnini
              </h2>
              <p className="text-lg text-muted-foreground">
                Profissional qualificado e dedicado ao seu bem-estar
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex justify-center mb-8">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663338805530/fdObutmlJdmUFfqq.png"
                  alt="Selo Terapeuta Credenciado ABRATH"
                  className="w-32 h-32 object-contain"
                />
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                Raphael é terapeuta holístico e acredita que ser ouvido(a), sem julgamentos, é um passo essencial para qualquer processo de transformação emocional. Seu trabalho é criar um espaço seguro, onde sentimentos podem ser acolhidos com respeito, presença e confidencialidade.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                O atendimento é realizado de forma online, permitindo que cada pessoa escolha o melhor momento para falar, no seu tempo e dentro da sua disponibilidade. Nesse ambiente, torna-se possível compreender melhor a ansiedade, a sensação de exclusão e a sobrecarga emocional, favorecendo um caminho de equilíbrio construído com autonomia e cuidado.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-subtle">
                  <BookOpen className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-semibold mb-3">Formações Principais</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Reiki Master (Linhas Mikao Usui e Tibetano)</li>
                    <li>✓ Practitioner em PNL</li>
                    <li>✓ Constelação Familiar Sistêmica</li>
                    <li>✓ Terapeuta Homeopata</li>
                  </ul>
                </div>

                <div className="card-subtle">
                  <Heart className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-semibold mb-3">Especializações</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Mentoria para Adolescentes</li>
                    <li>✓ Mentoria de Vida (Instituto Holos)</li>
                    <li>✓ Master Mind - Comunicação Eficaz (Napoleon Hill)</li>
                    <li>✓ Liderança e Desenvolvimento Pessoal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="btn-cta">Agendar atendimento online</Button>
              </a>
            </div>
          </div>
        </section>

        {/* ========== ATENDIMENTO ONLINE ========== */}
        <section className="section-spacing bg-secondary/20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                100% Online. 100% Seguro. 100% Seu.
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Privacidade Total</h3>
                    <p className="text-muted-foreground">
                      Atendimento no conforto do seu espaço, sem exposição ou
                      constrangimento. Seus dados e histórico são confidenciais.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Praticidade</h3>
                    <p className="text-muted-foreground">
                      Sem deslocamento, sem perda de tempo. Você escolhe o horário
                      que melhor se adequa à sua rotina.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Acolhimento Genuíno</h3>
                    <p className="text-muted-foreground">
                      Conexão humana real, sem pressa. Você é ouvido(a) com
                      empatia, sem julgamentos ou pressões.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-cta w-full sm:w-auto">
                    Quero começar agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="section-spacing bg-accent/5">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seu primeiro passo para transformação
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Não é necessário ter tudo resolvido para começar. Apenas a disposição
              de se ouvir e se acolher. Estou aqui para ajudar.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="btn-cta text-lg">
                Falar com o terapeuta via WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-secondary/10 border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Coluna 1: Sobre */}
            <div>
              <h3 className="font-semibold mb-4">Raphael Tomagnini</h3>
              <p className="text-sm text-muted-foreground">
                Terapeuta Holístico especializado em acolhimento emocional e
                transformação pessoal. Atendimento 100% online.
              </p>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#abordagens"
                    className="hover:text-primary transition-colors"
                  >
                    Abordagens
                  </a>
                </li>
                <li>
                  <a
                    href="/termos"
                    className="hover:text-primary transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="/privacidade"
                    className="hover:text-primary transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Envie uma mensagem pelo WhatsApp e vamos conversar.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="btn-cta w-full text-sm">
                  Enviar mensagem
                </Button>
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Raphael Tomagnini - Terapia Holística Online. Todos os
              direitos reservados.
            </p>
            <p className="text-center text-xs text-muted-foreground mt-4">
              <strong>Aviso importante:</strong> O atendimento terapêutico é
              complementar e não substitui acompanhamento médico. Em caso de
              emergência emocional ou crise, procure um profissional de saúde.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
