import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const WORKS: WorkProps[] = [
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dd/Logo_Issy-les-Moulineaux.svg/1280px-Logo_Issy-les-Moulineaux.svg.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse en Alternance",
    date: "Nov. 2021 - Nov. 2022",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dd/Logo_Issy-les-Moulineaux.svg/1280px-Logo_Issy-les-Moulineaux.svg.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse, Animations de quartier",
    date: "Juillet 2021",
    url: "https://www.ubereats.com/fr",
    freelance: false,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dd/Logo_Issy-les-Moulineaux.svg/1280px-Logo_Issy-les-Moulineaux.svg.png",
    title: "CLAVIM",
    role: "Animatrice Périscolaire",
    date: "Juin 2021",
    url: "https://www.issy.com",
  },
  {
    image: "https://www.clavim.asso.fr/wp-content/uploads/logos/espace-jeunes-anne-frank_CLAVIM.png",
    title: "Espace Jeunes Anne Frank",
    role: "Agent d'Accueil",
    date: "Mai - Juin 2021",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dd/Logo_Issy-les-Moulineaux.svg/1280px-Logo_Issy-les-Moulineaux.svg.png",
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
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md" />
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
