import Link from "next/link";
import {
  Beer,
  ChefHat,
  CircleFadingPlus,
  Coins,
  Gamepad,
  GlassWater,
  Home,
  Inbox,
  LucideIcon,
  Rss,
  Smartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SIDE_PROJECTS: SideProjectsProps[] = [
  // {
  //   Logo: Trophy,
  //   title: "Pride Score",
  //   description: "Site web footbalistique répertoriant toutes les compétitions de football amateures féminines non affiliées à la FFF. A venir",
  //   url: "/",
  //   perso: true,
  // },
  {
    Logo: Smartphone,
    title: "Projet Mobile",
    description: "Projet Mobile sur React Native et Go",
    url: "https://github.com/adatechschool/projet-collectif-mobile-ACG",
    school: true,
  },
  {
    Logo: Rss,
    title: "Projet Microblogging",
    description: "Projet Microblogging sur Docker et Laravel",
    url: "https://github.com/adatechschool/projet-collectif-microblogging-clement-chloe-chloe-tom",
    school: true,
  },
  {
    Logo: ChefHat,
    title: "Le Fou Frog",
    description:
      "Projet de site web pour un restaurant français aux États-Unis. Codé avec Ryo Rafael, propriétaire du projet",
    url: "https://github.com/ryorafael/lefoufrog",
    friend: true,
  },
  {
    Logo: GlassWater,
    title: "Monster Collection",
    description: "Un tracker de collection de canettes de Monster Energy",
    url: "https://github.com/JinxedQuinn/monstercollection",
    perso: true,
  },
  {
    Logo: Beer,
    title: "La Mutinerie",
    description:
      "J'ai choisi de mon plein gré, de refaire le site de la Mutinerie",
    url: "https://github.com/JinxedQuinn/lamutinerie",
    perso: true,
  },
  {
    Logo: Home,
    title: "Projet Meuble",
    description: "Une plateforme de vente de meuble, avec le front et le back",
    url: "https://github.com/JinxedQuinn/projetMeuble",
    school: true,
  },
  {
    Logo: CircleFadingPlus,
    title: "Send",
    description: "Un réseau social prenant comme modèle Twitter, codé en PHP",
    url: "https://github.com/adatechschool/reseau-social-php-chacsocialnetwork?tab=readme-ov-file",
    school: true,
  },
  {
    Logo: Coins,
    title: "Extension Navigateur",
    description:
      "Une extension navigateur qui sert à calculer le taux de change monétaire",
    url: "https://github.com/adatechschool/extension-navigateur-extentionnavigateur-cgr",
    school: true,
  },
  {
    Logo: Gamepad,
    title: "Pokemon Project",
    description: "Un Pokédex avec utilisation de l'API Pokémon Officielle",
    url: "https://github.com/Stoyots/pokemonFinal",
    school: true,
  },
  {
    Logo: Inbox,
    title: "AdaBox : Boîte à suggestions",
    description:
      "Une boîte à suggestions pour que les étudiant.e.s puissent s'exprimer anonymement",
    url: "https://github.com/JinxedQuinn/AdaBox",
    perso: true,
  },
];

type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  perso?: boolean;
  friend?: boolean;
  school?: boolean;
};

export const SideProjects = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.perso && <Badge variant="outline">Perso</Badge>}
          {props.friend && <Badge variant="outline">Partenariat</Badge>}
          {props.school && <Badge variant="outline">École</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
