import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-hero text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">VISITE FP</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Etec Fernando Prestes
            <br />
            Curso de Administração — 2º ADM MTEC Manhã
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-foreground/70">
            Navegue
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link to="/" hash="projetos" className="hover:underline">
                Projetos Integradores
              </Link>
            </li>
            <li>
              <Link to="/projetos/acessibilidade" className="hover:underline">
                Projeto de Acessibilidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-foreground/70">
            Contato
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Informações de contato, endereço e redes sociais ainda não foram fornecidas para este
            site. Assim que forem enviadas, serão publicadas aqui.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          Site desenvolvido para o VISITE FP — Projetos Integradores do 2º ADM MTEC Manhã.
        </p>
      </div>
    </footer>
  );
}
