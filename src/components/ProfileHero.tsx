import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const profileData = {
  name: "Airani Iofifteen",
  nickname: "Iofi",
  tagline: "Your Beloved Smart Alien",
  greeting: "IOFORIA~! OBISA!",
  bio: "An alien princess who ran away from home and came to Earth, falling in love with Earth's culture. Sometimes likes to tease viewers and being a nice iomama. Sometimes goes crazy over gacha games.",
  avatar: "https://yt3.googleusercontent.com/MsMiFME69PFSEOmZGmOuQtTxYl6v6OIghkz-qb5CBHIxjXB1JlYFOsmXeRQ7p8sOfRqkalY1=s176-c-k-c0x00ffffff-no-rj",
  birthday: "July 15",
  debut: "April 12, 2020",
  height: "150 cm",
  unit: "hololive Indonesia",
  illustrator: "Yano Mituki",
  fanName: "IOFORIA",
  hashtags: {
    stream: "#ioLYFE",
    fanArt: "#ioarts",
    meme: "#iomemes",
  },
  links: {
    youtube: "https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg",
    twitter: "https://twitter.com/airaniiofifteen",
    hololive: "https://hololive.hololivepro.com/en/talents/airani-iofifteen/",
  },
};

export default function ProfileHero() {
  return (
    <section className="space-y-8">
      {/* Hero banner area */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-400/20 to-yellow-300/20 p-8 sm:p-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <Avatar className="h-28 w-28 border-4 border-background shadow-lg sm:h-36 sm:w-36">
            <AvatarImage src={profileData.avatar} alt={profileData.name} />
            <AvatarFallback className="text-2xl">IO</AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-medium text-pink-500">{profileData.greeting}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
              {profileData.name}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">{profileData.tagline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {profileData.bio}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              <Badge variant="secondary">{profileData.hashtags.stream}</Badge>
              <Badge variant="secondary">{profileData.hashtags.fanArt}</Badge>
              <Badge variant="secondary">{profileData.hashtags.meme}</Badge>
              <Badge variant="outline">{profileData.fanName}</Badge>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
              <Button variant="outline" size="sm" asChild>
                <a href={profileData.links.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={profileData.links.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter / X <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={profileData.links.hololive} target="_blank" rel="noopener noreferrer">
                  hololive <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick data cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Birthday", value: profileData.birthday },
          { label: "Debut", value: profileData.debut },
          { label: "Height", value: profileData.height },
          { label: "Unit", value: profileData.unit },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-card p-4 text-center shadow-sm"
          >
            <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <Separator />
    </section>
  );
}
