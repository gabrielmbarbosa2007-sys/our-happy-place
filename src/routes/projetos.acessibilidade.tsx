import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import placaBraille from "@/assets/placa-braille.jpg";
import pisoTatil from "@/assets/piso-tatil.jpg";

const title = "Projeto de Acessibilidade | Projetos Integradores – 2º ADM MTEC Manhã";
const description =
  "Projeto Integrador II do 2º ADM MTEC Manhã da Etec Fernando Prestes: placas em braille e pisos táteis para a mobilidade de pessoas com deficiência visual.";

export const Route = createFileRoute("/projetos/acessibilidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Acessibilidade,
});

const equipe = [
  "Davi da Silva Freitas",
  "Dylan R. Benetti",
  "Enzo Rodrigues de Almeida",
  "Guilherme T. Leal",
  "Lucas de O. C. Martins",
  "Thiago de Souza Leite",
  "Victor C. Araújo",
];

const objetivos = [
  "Entendimento das necessidades de pessoas deficientes visuais;",
  "Planejamento a partir da estrutura da escola;",
  "Estipular custos e buscar maneiras de arrecadar;",
  "Instalação dos equipamentos de forma organizada e segura.",
];

const cronograma = [
  ["16/mar", "Preencher Canvas", "Guilherme e Davi"],
  ["23/mar", "Organizar o Cronograma", "Victor, Thiago e Dylan"],
  ["30/mar", "Preencher o PAP", "Enzo e Lucas"],
  ["13/abr", "Entrega do PAP para os professores", "Enzo e Guilherme"],
  ["27/abr", "Entrega do PAP para a coordenação", "Enzo e Guilherme"],
  ["04/mai", "Aprovação da coordenação para o projeto", "Lucas e Victor"],
  ["11/mai", "Criar o Plano de Trabalho", "Toda a equipe"],
  ["30/mai", "Início da arrecadação para o mapa e os pisos táteis", "Lucas e Victor"],
  ["22/jun", "Entrega do Plano de Trabalho para os professores", "Lucas"],
];

function Bloco({ title: t, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="surface-card p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold">{t}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </Reveal>
  );
}

function Acessibilidade() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <Link
          to="/"
          hash="projetos"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="size-4" /> Voltar aos projetos
        </Link>

        <Reveal className="mt-4">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Projeto Integrador II — 2º ADM / Manhã
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">
            Acessibilidade na escola
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Adaptação do ambiente escolar para deficientes visuais, com a adição de placas
            sinalizadoras em braille na numeração das salas, além da implementação e conserto de
            pisos táteis.
          </p>
        </Reveal>

        <Reveal className="mt-8 grid gap-4 sm:grid-cols-2">
          <img
            src={pisoTatil}
            alt="Piso tátil amarelo em um corredor escolar"
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <img
            src={placaBraille}
            alt="Mão tocando uma placa de sala com inscrição em braille"
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </Reveal>

        <div className="mt-10 grid gap-6">
          <Bloco title="Objetivo geral">
            <p>
              Desenvolver um projeto aplicado que integre conhecimentos do curso técnico em
              Administração, fazendo um planejamento para a implementação de recursos que auxiliem
              na mobilidade de deficientes visuais.
            </p>
          </Bloco>

          <Bloco title="Objetivos específicos">
            <ol className="ml-5 list-decimal space-y-1">
              {objetivos.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ol>
          </Bloco>

          <Bloco title="Justificativa">
            <p>
              O projeto de acessibilidade para pessoas com deficiência visual no ambiente escolar
              tem como principal objetivo promover inclusão, autonomia e igualdade de oportunidades
              para todos os alunos. Muitas escolas ainda possuem dificuldades relacionadas à
              acessibilidade, o que acaba limitando a participação de estudantes com deficiência
              visual em atividades do dia a dia, como locomoção, identificação de espaços e
              participação nas atividades escolares.
            </p>
            <p>
              Dessa forma, o projeto busca oferecer recursos e equipamentos que auxiliem esses
              alunos dentro da escola, diminuindo sua dependência e facilitando sua rotina, com
              mais segurança, independência e conforto.
            </p>
            <p>
              O projeto também incentiva o respeito às diferenças e a inclusão social entre os
              estudantes, ajudando na construção de um ambiente escolar mais acolhedor e humano.
            </p>
          </Bloco>

          <Bloco title="Problema de pesquisa">
            <p>
              <strong className="font-display text-foreground">Arrecadação:</strong> o capital
              monetário é um dos principais recursos necessários, e não há garantia de que as
              pessoas se disponham a ajudar na medida do que foi planejado.
            </p>
            <p>
              <strong className="font-display text-foreground">Implementação:</strong> tirar do
              papel os pisos táteis e as placas exige tempo, esforço e aprovação detalhada da
              coordenação da escola.
            </p>
          </Bloco>

          <Bloco title="Hipótese">
            <ul className="ml-5 list-disc space-y-1">
              <li>
                A encomenda de placas de identificação pode agilizar a execução do projeto, evitando
                obstáculos da confecção ou impressão própria.
              </li>
              <li>
                A utilização de impressora 3D e da confecção própria das placas em braille pode
                reduzir a dificuldade de fabricação e agilizar a substituição em caso de danos.
              </li>
              <li>
                A divulgação e a conscientização sobre o projeto podem aumentar o apoio e as doações
                por parte dos alunos.
              </li>
              <li>
                O apoio da coordenação escolar pode contribuir para uma execução mais rápida e
                eficiente do projeto.
              </li>
            </ul>
          </Bloco>

          <Bloco title="Cronograma">
            <ul className="grid gap-3">
              {cronograma.map(([data, atividade, responsavel]) => (
                <li
                  key={data}
                  className="grid gap-1 rounded-xl border border-border bg-secondary/50 p-4 sm:grid-cols-[6rem_1fr_auto] sm:items-center"
                >
                  <span className="font-display font-bold text-primary">{data}</span>
                  <span className="text-foreground">{atividade}</span>
                  <span className="text-sm">{responsavel}</span>
                </li>
              ))}
            </ul>
          </Bloco>

          <Bloco title="Recursos necessários">
            <p>
              <strong className="font-display text-foreground">Dinheiro:</strong> estima-se para
              realizar todo o projeto um valor entre R$ 2.250,00 e R$ 4.500,00, destinado ao
              conserto dos pisos táteis e à implementação das placas em braille.
            </p>
            <p>
              <strong className="font-display text-foreground">Recursos manuais:</strong> caso não
              seja possível arrecadar a quantia necessária, o plano alternativo é produzir as placas
              em braille manualmente, com impressão 3D ou aplicando as células em braille sobre
              placas de plástico mais econômicas.
            </p>
          </Bloco>

          <Bloco title="Resultados esperados">
            <p>
              Tornar a escola um ambiente mais acessível, inclusivo e seguro para alunos com
              deficiência visual. A instalação e melhoria das sinalizações no chão facilitam a
              locomoção pelos corredores e demais espaços escolares, aumentando a autonomia dos
              estudantes.
            </p>
            <p>
              As placas em braille nas portas das salas permitirão melhor identificação dos
              ambientes, promovendo independência e igualdade de acesso. O projeto também busca
              conscientizar alunos, professores e toda a comunidade escolar sobre a importância da
              acessibilidade e da inclusão social.
            </p>
            <p>
              Por meio das arrecadações, espera-se incentivar o trabalho em equipe, a solidariedade
              e a participação coletiva, mostrando que pequenas ações podem gerar grandes mudanças
              na vida das pessoas.
            </p>
          </Bloco>

          <Bloco title="Equipe">
            <ul className="flex flex-wrap gap-2">
              {equipe.map((nome) => (
                <li
                  key={nome}
                  className="rounded-full bg-primary-soft px-4 py-2 text-sm font-medium text-primary"
                >
                  {nome}
                </li>
              ))}
            </ul>
          </Bloco>

          <p className="text-sm text-muted-foreground">
            O item “Referencial Teórico” aparece no plano de trabalho sem conteúdo preenchido —
            precisa ser confirmado pela equipe.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
