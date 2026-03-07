import ProfileHero from "@/components/ProfileHero";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import FadeIn from "@/components/FadeIn";
import { NavLink } from "react-router-dom";
import { Play, Music, Twitter, Palette, Scissors, Film } from "lucide-react";

// Iofi's channel introduction / Gigball video
const GIGBALL_VIDEO_ID = "r5GnObSmrYY";

const sections = [
  { to: "/videos", label: "Videos", desc: "Stream archives & uploads", icon: Play, color: "text-purple-400" },
  { to: "/shorts", label: "Shorts", desc: "Short-form videos", icon: Film, color: "text-blue-400" },
  { to: "/songs", label: "Songs", desc: "Original & cover MVs", icon: Music, color: "text-rose-400" },
  { to: "/tweets", label: "Tweets", desc: "Latest posts from X", icon: Twitter, color: "text-yellow-500" },
  { to: "/ioarts", label: "ioArts", desc: "Fan art gallery", icon: Palette, color: "text-green-400" },
  { to: "/clips", label: "Clips", desc: "Community highlights", icon: Scissors, color: "text-teal-400" },
];

export default function Home() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <ProfileHero />
      </FadeIn>

      {/* Gigball / Channel Intro */}
      <FadeIn delay={100}>
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Channel Introduction</h2>
          <div className="mx-auto max-w-3xl">
            <YoutubeEmbed videoId={GIGBALL_VIDEO_ID} title="Airani Iofifteen — Channel Introduction" />
          </div>
        </section>
      </FadeIn>

      {/* Explore grid */}
      <FadeIn delay={200}>
        <section>
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Explore</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {sections.map((s, i) => (
              <FadeIn key={s.to} delay={250 + i * 60}>
                <NavLink
                  to={s.to}
                  className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-6 shadow-sm transition-colors hover:bg-muted no-underline"
                >
                  <s.icon className={`h-8 w-8 ${s.color} transition-transform group-hover:scale-110`} />
                  <span className="text-sm font-semibold">{s.label}</span>
                  <span className="text-xs text-muted-foreground text-center">{s.desc}</span>
                </NavLink>
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
