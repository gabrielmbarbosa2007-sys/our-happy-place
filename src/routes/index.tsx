import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  ClipboardList,
  Compass,
  GraduationCap,
  HandHeart,
  Handshake,
  Lightbulb,
  MessagesSquare,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import escola from "@/assets/escola.jpg";
import hero from "@/assets/hero-etec-fp.jpg";
import pisoTatil from "@/assets/piso-tatil.jpg";
import turma from "@/assets/turma.jpg";

const title = "VISITE FP | Administração e Projetos Integradores – Etec Fernando Prestes";
const description =
  "Conheça o curso de Administração da Etec Fernando Prestes, os estudantes do 2º ADM – MTEC Manhã e os Projetos Integradores desenvolvidos pela turma.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cursoTemas = [
  { icon: Briefcase, title: "Desenvolvimento profissional", text: "Preparo para o mundo do trabalho e para a atuação técnica em Administração." },
  { icon: ClipboardList, title: "Gestão e organização", text: "Rotinas administrativas, controle de recursos e acompanhamento de resultados." },
  { icon: Users, title: "Trabalho em equipe", text: "Divisão de responsabilidades e colaboração entre os estudantes." },
  { icon: MessagesSquare, title: "Comunicação", text: "Apresentação de ideias, documentos e propostas com clareza." },
  { icon: Target, title: "Planejamento", text: "Definição de objetivos, cronogramas e etapas de execução." },
  { icon: Rocket, title: "Empreendedorismo", text: "Iniciativa para transformar ideias em projetos aplicados." },
  { icon: Lightbulb, title: "Resolução de problemas", text: "Análise de obstáculos e busca de alternativas viáveis." },
  { icon: GraduationCap, title: "Prática do conhecimento", text: "Conteúdos de sala de aula aplicados em situações reais." },
];

const porque = [
  { icon: Sparkles, title: "PROTAGONISMO", text: "Os estudantes participam ativamente da criação e desenvolvimento dos projetos." },
  { icon: Compass, title: "PRÁTICA", text: "Os conhecimentos do curso são aplicados em situações reais." },
  { icon: Lightbulb, title: "CRIATIVIDADE", text: "Os alunos desenvolvem soluções e novas ideias." },
  { icon: Handshake, title: "TRABALHO EM EQUIPE", text: "Os projetos incentivam colaboração e organização." },
  { icon: HandHeart, title: "IMPACTO", text: "Os projetos buscam gerar resultados e experiências significativas." },
];

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader overHero />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden bg-hero pb-20 pt-28 sm:pt-32">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <p className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Administração • Projetos Integradores • Protagonismo Estudantil
              </p>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl">
                VISITE FP
              </h1>
              <p className="mt-5 max-w-xl text-lg text-foreground/80">
                Conheça o curso de Administração da Etec Fernando Prestes e os projetos
                desenvolvidos pelos estudantes do 2º ADM – MTEC Manhã.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="projetos"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Conheça nossos projetos <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/"
                  hash="administracao"
                  className="inline-flex min-h-12 items-center rounded-full border border-foreground/30 px-6 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
                >
                  Sobre o curso
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <img
                src={hero}
                alt="Estudantes da Etec Fernando Prestes com uniforme branco trabalhando juntos em um projeto"
                width={1600}
                height={1008}
                className="aspect-[16/10] w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
          </div>
        </section>

        {/* ETEC */}
        <section id="etec" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <img
                src={escola}
                alt="Pátio de uma escola técnica com estudantes circulando"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl border border-border shadow-[var(--shadow-soft)]"
              />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Sobre a Etec Fernando Prestes
              </h2>
              <p className="mt-4 text-muted-foreground">
                A Etec Fernando Prestes é a escola técnica onde os estudantes do 2º ADM – MTEC
                Manhã desenvolvem sua formação profissional. É no ambiente escolar que os Projetos
                Integradores nascem: os alunos observam a realidade da própria escola, identificam
                necessidades e planejam soluções aplicando o que aprendem em Administração.
              </p>
              <p className="mt-3 rounded-2xl bg-secondary p-4 text-sm text-muted-foreground">
                Dados históricos, números institucionais e a lista completa de cursos não foram
                informados no material recebido, por isso não são apresentados aqui.
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: GraduationCap, t: "Educação técnica", d: "Formação profissional aliada ao ensino." },
                  { icon: Users, t: "Ambiente colaborativo", d: "Turmas organizadas em equipes de trabalho." },
                ].map((item) => (
                  <li key={item.t} className="surface-card surface-card-hover p-5">
                    <item.icon className="size-6 text-primary" aria-hidden="true" />
                    <p className="mt-3 font-display font-bold">{item.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ADMINISTRAÇÃO */}
        <section id="administracao" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Curso de Administração</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Formação profissional, conhecimento e prática para o futuro.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cursoTemas.map((tema, i) => (
                <Reveal as="li" key={tema.title} delay={i * 60} className="surface-card surface-card-hover p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                    <tema.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display font-bold">{tema.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{tema.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* TURMA */}
        <section id="turma" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">2º ADM – MTEC Manhã</h2>
              <p className="mt-4 text-muted-foreground">
                Conheça os projetos desenvolvidos pelos estudantes e descubra como os conhecimentos
                adquiridos em sala de aula podem ser transformados em experiências práticas e
                projetos com impacto.
              </p>
              <ol className="mt-8 grid gap-3 sm:grid-cols-4">
                {["APRENDER", "PLANEJAR", "CRIAR", "TRANSFORMAR"].map((step, i) => (
                  <li
                    key={step}
                    className="rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-soft)]"
                  >
                    <span className="font-display text-xs font-bold text-accent-foreground">
                      0{i + 1}
                    </span>
                    <p className="mt-1 font-display text-sm font-extrabold tracking-wide text-primary">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={turma}
                alt="Estudantes reunidos planejando um projeto com post-its"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl border border-border shadow-[var(--shadow-soft)]"
              />
            </Reveal>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Projetos Integradores</h2>
              <p className="mt-3 text-muted-foreground">
                Os Projetos Integradores permitem que os estudantes apliquem os conhecimentos do
                curso de Administração em situações práticas: planejamento, custos, cronograma,
                execução e resultados.
              </p>
            </Reveal>

            <div className="mt-10 max-w-2xl">
              <Reveal as="article" className="surface-card surface-card-hover overflow-hidden">
                <img
                  src={pisoTatil}
                  alt="Piso tátil amarelo em um corredor escolar"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">Acessibilidade na escola</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Adaptação do ambiente escolar para pessoas com deficiência visual, com placas em
                    braille na numeração das salas e implementação e conserto de pisos táteis.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong className="font-display">Objetivo:</strong>{" "}
                    <span className="text-muted-foreground">
                      planejar a implementação de recursos que auxiliem na mobilidade de deficientes
                      visuais, integrando conhecimentos do curso técnico em Administração.
                    </span>
                  </p>
                  <Link
                    to="/projetos/acessibilidade"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Conheça o projeto <ArrowRight className="size-4" />
                  </Link>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* POR QUE */}
        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Por que conhecer nossos projetos?
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {porque.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 60} className="surface-card surface-card-hover p-6">
                  <item.icon className="size-6 text-primary" aria-hidden="true" />
                  <p className="mt-3 font-display text-sm font-extrabold tracking-wide">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* VISITE FP */}
        <section id="visite-fp" className="bg-hero py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Venha conhecer de perto
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
                Durante o VISITE FP, você poderá conhecer os projetos desenvolvidos pelos
                estudantes, entender como funciona o curso de Administração e descobrir as
                experiências que fazem parte da formação dos alunos.
              </p>
              <Link
                to="/"
                hash="etec"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Conheça a Etec Fernando Prestes <ArrowRight className="size-4" />
              </Link>
              <p className="mt-6 text-sm text-muted-foreground">
                Data, horário, local e programação do evento ainda não foram informados.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-5xl">
              O FUTURO COMEÇA COM UMA IDEIA.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Conheça o trabalho dos estudantes do 2º ADM – MTEC Manhã e descubra o que é possível
              criar quando conhecimento, criatividade e colaboração se encontram.
            </p>
            <Link
              to="/"
              hash="projetos"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explorar os projetos <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
