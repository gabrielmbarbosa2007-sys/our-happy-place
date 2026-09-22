import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const title = "PROJETO ALEGRIA | Projetos Integradores – 2º ADM MTEC Manhã";
const description =
  "Projeto Alegria, criado pelos alunos do 2º ADM – MTEC Manhã da Etec Fernando Prestes, em destaque no VISITE FP.";

export const Route = createFileRoute("/projeto-alegria")({
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
  component: ProjetoAlegria,
});

const blocos = [
  ["Sobre o projeto", "Apresentação geral do projeto."],
  ["Objetivo", "Objetivos principais do projeto."],
  ["Público-alvo", "Quem é beneficiado ou envolvido."],
  ["Como funciona", "Explicação das atividades e metodologia."],
  ["Desenvolvimento", "Etapas realizadas pelos estudantes."],
  ["Resultados", "Resultados alcançados ou esperados."],
  ["Impacto", "Impactos sociais, educacionais ou comunitários."],
  ["Galeria", "Imagens fornecidas no material do projeto."],
];

function ProjetoAlegria() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <section className="bg-alegria pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link
              to="/"
              hash="projetos"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-foreground hover:underline"
            >
              <ArrowLeft className="size-4" /> Voltar aos projetos
            </Link>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-accent-foreground sm:text-6xl">
              PROJETO ALEGRIA
            </h1>
            <p className="mt-3 text-lg text-accent-foreground/85">
              Um projeto criado pelos alunos do 2º ADM – MTEC Manhã.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Reveal className="rounded-2xl border border-accent/40 bg-accent-soft p-6">
            <p className="text-accent-foreground">
              O material completo do Projeto Alegria ainda não foi anexado. Para manter as
              informações fiéis ao documento original, nada foi inventado: os blocos abaixo estão
              reservados e serão preenchidos assim que o arquivo for enviado.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {blocos.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 50} className="surface-card p-6">
                <h2 className="font-display text-lg font-bold">{t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Aguardando o material
                </p>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
