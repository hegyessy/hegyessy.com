import { Handlers, PageProps } from "$fresh/server.ts";
import { randomImageSelectorFromDirectory } from "lib/random-image-selector.ts";
import { SiteFooter, SiteHeader, SiteLayout } from "components/SiteCore.tsx";

interface Data {
  featuredImage: string | void;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const featuredImage = await randomImageSelectorFromDirectory(
      "static/assets/featured",
    );
    return ctx.render({ featuredImage });
  },
};

export default function Home(props: PageProps) {
  return (
    <SiteLayout>
      <SiteHeader />
      <section>
        <p>
          One day this will be a website. Until then enjoy a random photo of
          mine.
        </p>
        <img src={`/assets/featured/${props.data.featuredImage}`} alt="" />
      </section>
    </SiteLayout>
  );
}
