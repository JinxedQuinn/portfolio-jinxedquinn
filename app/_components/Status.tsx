import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { SIDE_PROJECTS, SideProjects } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { WORKS, Work } from "./WORKS";

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
          <p className="text-lg text-muted-foreground">Experiences Professionelles</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Diplômes</p>
          <ContactCard
            url="https://x.com/melvynxdev"
            name="@melvynxdev"
            image="https://melvynx.com/images/my-face.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
            description="16.000"
          />
          <ContactCard
            url="https://linkedin.com/melvyn-malherbe"
            name="Melvyn Malherbe"
            image="https://melvynx.com/images/my-face.png"
            mediumImage="data:image/png;base64,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"
            description="12.000"
          />
        </Card>
      </div>
    </Section>
  );
};
