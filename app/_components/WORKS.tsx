import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const WORKS: WorkProps[] = [
  {
    image: "/logoClavim.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse en Alternance",
    date: "Nov. 2021 - Nov. 2022",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image: "/LogoIssyLesMoulineaux.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse, Animations de quartier",
    date: "Juillet 2021",
    url: "https://www.ubereats.com/fr",
    freelance: false,
  },
  {
    image: "/LogoIssyLesMoulineaux.png",
    title: "CLAVIM",
    role: "Animatrice Périscolaire",
    date: "Juin 2021",
    url: "https://www.issy.com",
  },
  {
    image: "/EJAF.png",
    title: "Espace Jeunes Anne Frank",
    role: "Agent d'Accueil",
    date: "Mai - Juin 2021",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image: "/LogoIssyLesMoulineaux.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse",
    date: "2021 - 2023",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
];
type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};
export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <Image
        src={props.image}
        alt={props.title}
        width={40}
        height={40}
        className="object-contain rounded-md w-10 h-10"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
