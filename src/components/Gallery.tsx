import { X } from "lucide-react";
import { useState } from "react";

export type GalleryImage = { src: string; alt: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(image)}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <span className="block aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="block px-4 py-3 text-left text-sm text-muted-foreground">
                {image.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-foreground/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-background text-foreground"
          >
            <X className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img src={active.src} alt={active.alt} className="w-full rounded-2xl" />
            <figcaption className="mt-3 text-center text-sm text-background">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
