import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const WORKS: WorkProps[] = [
  {
    image: "http://www.clavim.asso.fr/wp-content/uploads/2016/07/logo-web-retina_2016.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse",
    date: "2021 - 2023",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
    title: "UberEats",
    role: "Coursière",
    date: "2018 - 2019",
    url: "https://www.ubereats.com/fr",
    freelance: true,
  },
  {
    image: "https://j9g7u6e4.rocketcdn.me/wp-content/uploads/2020/12/logo-onet-blanc.svg",
    title: "ONET",
    role: "Femme de ménage",
    date: "2019 - 2020",
    url: "https://www.groupeonet.com",
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
