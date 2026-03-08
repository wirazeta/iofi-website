import { ExternalLink } from "lucide-react";

const links = [
  { href: "https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg", label: "YouTube" },
  { href: "https://twitter.com/airaniiofifteen", label: "Twitter / X" },
  { href: "https://hololive.hololivepro.com/en/talents/airani-iofifteen/", label: "hololive" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Yopipi — A fan site for Airani Iofifteen
        </p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
