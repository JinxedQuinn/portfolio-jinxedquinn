import Link from "next/link";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import {
  ALargeSmall,
  ArrowUpRight,
  Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      {/* <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
        Side Projects
      </Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">work</Card>
        <Card className="p-4 flex-1 ">contact me</Card>
      </div> */}

      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProjects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="@melvynxdev"
            image="https://melvynx.com/images/my-face.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
            description="16.000"
          />
          <ContactCard
            name="Melvyn Malherbe"
            image="https://melvynx.com/images/my-face.png"
            mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAfrv///8AdbcAd7gAeLioyODX5vHF2uq10OXB2OkAfLoAcbUAerkAc7b7/f7y9/tFk8Uehb9sps54rNJVmsnm8PaDs9WWvdoxi8Gfw92OudjP4O70+Ps7j8Ndnsvh7PQmh78AaLFjosxY5DW2AAAGLUlEQVR4nO2d6XaiMBhAySJIEmQXce30/R9yQGuLiCYtiSY53/035wxj7mTfvgTojjRuiiwPXCPPiiZO73WC0Z/37YZjKhh7d4J/DWOCYr5px5K3hnXBqXtuQxjlRf3QcFVy8e4UakDwcjVtGFH67sRpgtJoynDN3S6fQxhf3xtW5N3J0gqpxoaZLyX0Cs1uDSvfBDvFami49quIXiDrH8OIvzs1RuDR1XDleC//CEZXX4alf5XwAi0vhrWfZbSH12fDwoeh2jSi6A1Tf7Owy8R9Z9j6Wgt7aNsZbvxsSC+wDQq8LqRdMU2DGL87EUbBcdD4XA27itgEHvcVPaIIMp8bmq6pyYLcc0P3lkUBAADch1GCOwj1c5wgSJJtl7sw3C2bI8beSQpexcM9nV3BvRrSsuR4QiPSMvFnQCRYNPbrOW18yUaSraYE+5XI5N1p0wIpHvh1tD6sETwT7BTdz0WRPRPsCqrr2zpMPKqDV1xfrUsmW9Ehjm8LiEomiNDW6T6Dh3LDlcuNDZM0MxfWDmciWaoYnhzORC5rSC+4u6KlVki7YursVIqu5XY9S2d7fbVqiFDo7P4OkXb3F1Jnmxqs0Bv27L03XDk7cMM77/Mwltv1nJxtaWirZhg521uIp9P7H9w9ssKYmmHl7JhGsTF1efqkNmxzd9DWb8WoGDq9UkMUWtOds31FDyPyGeKHy1nYdRifMsHW6SzsSCQzKJeXML54vty2d7cr/Ibhu63DgaAXh6pY8nCKUQceZGHQ3wVrpgWX/uwC481EZUwr9xuZH1hyHDmeSo9uLJ4RON/u9l96YXvw4krtGIo5O1RVlnPs6V2p4Hwp3MW77AAAAAAAWEYfZwbjpAdjQqjwanzBKE4OZRuHdZru07QOo8X2GHDiyxiR8k0zNdfeR9sPk6GBBJHxp8/Gezkiydt6Qu+6mNB+JIYmM6JcSoinfln62e1hOJZk0iMD4aeZCRtZyH4ZTa2XUtlnwy1HlhyUdoDqwsSk+wWGVCgeakHodNC//GzekCtuw15YaF/8Mm3IVM8KXKlzzRvOhg1F/qQBfcBR73alWUOqeDTwFr23PIwakuNfBBFa61Q0afhXQb1XIAwaUoVT8o846mtuzBmKzd8FEdK352XMEJO95K88Rd8tD2OG/xRPBT5C2+a6KcO4nCeI0EFTOTVluFO7BfCEk6ZyaspQA5oiz1hsWOvp9y021JSJNhvqqYk2G+ppTq021HLs02pDLUd3rTZERw1tjd2GOoqp3YY6giLabajjbqflhuX8ivgyw3oXL5fx7pdLbxoq4ksMw22WJLjfsMEJqRa/mBpruNv5AsPlRzLcOxOEl8qOGnpE44Zhju/GXhQrfx7MHriZNtxObyclqksA869cGTb8fFSPnkfF+WF+Y2rW8PNxU4i3Sv/C/LAjRg2bZ+2EStARhBazuwuThuHTMRfLVQznd4gmDSV33rDK1vD8C7oGDZey3lolE+dfnDNoKN16ULksP39QY85Q/r8vFDpFmw3lPRkTbhsqnONSuGhtsWGoMGZW+HGLDVWiFChURIsNVZbk2cFlQ6X70fLL8hYbKk1duXQqbK+hWuAlLF22sddQ7Qq4vLuw11AtZfJxm72GkVLK5MHGLDZUmvUQ6dFMMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMNRtSLehhNNUWqWfLZSiPdBW9usaQvD072k850+fKYazkP66w08RAwAAuIMXz/k+huVB5rlhFmiKGG0roggazU+aWAZtgnj2wNVqcBzoCHFqMTwNZPG23IZtUKAUJsZZaNsZ7n0upnzfGep6YcBGRIF6Q33PmVgHr8+GqPS1JtI+ylRvuPLlDcwRjK6+DFHkZznl58gvZ0O09nE5h6zRjyGq/KuK1wfBvgxR5pvi96N8V0NU+VVQyfeTbt+GaG3iEdM3wfga3RuiiPpSUikdxM8aGKJVaea93RcjeDl8DmxoeH5v1/Hen1Fe3IbpuzVEaN9uOKaCuefJ+jfZ+aZNR0Zjw440bopMw9MfLybPiiYe63X8B12BcdmLsGMEAAAAAElFTkSuQmCC"
            description="12.000"
          />
        </Card>
      </div>
    </Section>
  );
};

/* Projets */

const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description: "Mon site on va dire",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "PowerNote",
    description: "Le deuxieme projet utilisé",
    url: "/",
  },
  {
    Logo: Rss,
    title: "PowerPost",
    description: "Lorem Ipsum et la situation et blablabla",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "Chat2Code",
    description: "Lorem Ipsum et la situation et blablabla",
    url: "/",
  },
  {
    Logo: Weight,
    title: "LinkedLeads",
    description: "A 222 platform blabla blablablebble",
    url: "/",
  },
  {
    Logo: ALargeSmall,
    title: "BulkCorrect",
    description: "A 222 platform blabla blablablebble",
    url: "/",
  },
];

type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProjects = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

/* Works */

const WORKS: WorkProps[] = [
  {
    image:
      "http://www.clavim.asso.fr/wp-content/uploads/2016/07/logo-web-retina_2016.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse",
    date: "2021 - 2023",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image:
      "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
    title: "UberEats",
    role: "Coursière",
    date: "2018 - 2019",
    url: "https://www.ubereats.com/fr",
    freelance: true,
  },
  {
    image:
      "https://j9g7u6e4.rocketcdn.me/wp-content/uploads/2020/12/logo-onet-blanc.svg",
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

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
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

/* Contact */

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>

        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};
