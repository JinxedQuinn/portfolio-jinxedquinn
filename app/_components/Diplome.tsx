import Link from "next/link";
import Image from "next/image";

export const DIPLOME: DiplomeProps[] = [
  {
    image: "/Bpjeps.jpeg",
    title: "BPJEPS LTP",
    role: "Brevet Professionnel de la Jeunesse, de l'Education Populaire et du Sport, Loisirs Tous Publics",
    date: "Novembre 2021 - 2022",
    url: "https://comtech-formation.org",
  },
  {
    image: "/ProtectionCivile.png",
    title: "PSC1",
    role: "Diplôme de secourisme",
    date: "Mars 2021",
    url: "https://www.protection-civile.org/psc1/",
  },
  {
    image: "/DAEU.jpeg",
    title: "DAEU A",
    role: "Diplôme équivalent au BAC",
    date: "2019 - 2020",
    url: "https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/daeu-DAEU/daeu-option-a-filieres-litteraires-et-sciences-humaines-KBT7TXGD.html?search-keywords=daeu",
  },
  {
    image: "/Brevet.jpeg",
    title: "Brevet des collèges",
    role: "Brevet",
    date: "2013",
    url: "https://www.education.gouv.fr/annuaire/24800/thiviers/college/0240040n/college-leonce-bourliaguet.html",
  },
];
type DiplomeProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
export const Diplome = (props: DiplomeProps) => {
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
        className="object-contain rounded-md" />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
