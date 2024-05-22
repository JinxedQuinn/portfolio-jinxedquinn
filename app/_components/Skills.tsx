import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { NextJSLogo } from "./icons/NextJSLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2">
          <ReactLogo size={42} className="animate-spin" style={{
            animationDuration: "10s",
          }} />
          <h3 className="text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use <Code>Next.js</Code> as a back-end and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            Tailwind
          </h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> applications <i>in seconds</i> using <Code>Tailwind CSS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <NextJSLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            I love using <Code>NextJS</Code>. I try to do my best using <Code>Prisma</Code> with it.
          </p>
        </div>
      </div>
    </Section>
  );
};