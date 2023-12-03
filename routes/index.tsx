import { parse } from "$std/yaml/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface CVProps {
  title: string;
  date: string;
  description: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const cvfile = await Deno.readTextFile("data/work-history.yaml");
    ctx.state.cv = parse(cvfile);
    const resp = await ctx.render();
    return resp;
  },
};

export default function Home(props: PageProps) {
  const cv = props.state.cv as CVProps[];
  return (
    <div class="col-start-3 col-end-4">
      <header class="py-6">
        <span class="text-[#f34213] font-bold text-2xl">
          Jason Hegyessy
        </span>
        <span class="font-normal ml-1 text-2xl text-[#2e2e3a]">
          is a software designer and developer with 13 years of experience
          designing easy to use enterprise scale web and mobile apps.
        </span>
      </header>
      <section id="work-history" class="">
        <header>
          <h2 class="font-bold text-xl text-[#f34213] mb-2">Work History</h2>
        </header>
        <ol>
          {cv.map((work) => {
            return (
              <li class="mb-4">
                <time>{work.date}</time>
                <br />
                <strong class="text-[#0e3b3b]">{work.title}</strong>
                <p>{work.description}</p>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
