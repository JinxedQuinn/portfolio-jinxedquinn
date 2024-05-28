import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { SIDE_PROJECTS, SideProjects } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { WORKS, Work } from "./WORKS";
import { DIPLOME, Diplome } from "./Diplome";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProjects
                key={index}
                {...project}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Experiences Professionelles</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Diplomes</p>
          <div className="flex flex-col gap-4">
            {DIPLOME.map((diplome, index) => (
              <Work key={index} {...diplome} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
