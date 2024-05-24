import Link from "next/link";
import Image from "next/image";

export const DIPLOME: DiplomeProps[] = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVDlgPcrq3_W0D0DK8HpWuhBcwFsZCuxkh5k7RIM05A&s",
    title: "BPJEPS LTP",
    role: "Brevet Professionnel de la Jeunesse, de l'Education Populaire et du Sport, Loisirs Tous Publics",
    date: "Novembre 2021 - 2022",
    url: "https://comtech-formation.org",
  },
  {
    image: "data:image/png;base64,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",
    title: "PSC1",
    role: "Diplôme de secourisme",
    date: "Mars 2021",
    url: "https://www.protection-civile.org/psc1/",
  },
  {
    image: "https://www.daeu.fr/app/uploads/2018/12/DAEU_diplome_specimen.jpg",
    title: "DAEU A",
    role: "Diplôme équivalent au BAC",
    date: "2019 - 2020",
    url: "https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/daeu-DAEU/daeu-option-a-filieres-litteraires-et-sciences-humaines-KBT7TXGD.html?search-keywords=daeu",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2001_Diplôme_national_du_brevet.pdf/page1-1200px-2001_Diplôme_national_du_brevet.pdf.jpg",
    title: "CLAVIM",
    role: "Brevet des collèges",
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
        className="w-10 h-10 object-contain rounded-md" />
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
