import { Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CopyEmail } from "@/components/copy-email";

const EMAIL = "learnjin@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Hej Jin!")}`;

const loves = [
  { emoji: "☕", title: "Long fikas", text: "Cinnamon buns, good coffee, better conversation." },
  { emoji: "⛵", title: "The archipelago", text: "Ferries, salty air and swimming off the rocks." },
  { emoji: "🎉", title: "Saying yes", text: "New places, new people, spontaneous plans." },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col px-6 py-16 sm:py-24">
      <section className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <MapPin className="size-3.5" aria-hidden />
          Göteborg, Sweden
        </span>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Hej, I&apos;m Jin.
          <br />
          <span className="text-primary">The fun lover.</span>
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I collect good moments: a sunny afternoon by the water, a spontaneous
          adventure, a conversation that runs way past closing time. If you have
          an idea, a question, or something fun in mind — I&apos;d love to hear it.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={MAILTO} className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base")}>
            <Mail aria-hidden />
            Email me
          </a>
          <CopyEmail email={EMAIL} />
        </div>
      </section>

      <section className="mt-20 flex flex-col gap-6" aria-labelledby="loves">
        <h2 id="loves" className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Things I love
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {loves.map((l) => (
            <li key={l.title} className="rounded-2xl border bg-card p-5">
              <div className="text-2xl" aria-hidden>{l.emoji}</div>
              <h3 className="mt-3 font-medium">{l.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight">Got something fun in mind?</h2>
        <p className="mt-2 opacity-90">I read every email and reply as soon as I can.</p>
        <a
          href={MAILTO}
          className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "mt-6 h-12 w-fit px-6 text-base")}
        >
          <Mail aria-hidden />
          Say hello
        </a>
      </section>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jin · Made in Göteborg
      </footer>
    </main>
  );
}
