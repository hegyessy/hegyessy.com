import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";

export interface Props {
  children?: JSX.Element | JSX.Element[];
}

export function Layout({ children }: Props) {
  return (
    <main class="font-serif p-4 w-full text-[#2e2e3a] flex flex-col items-center">
      <Head>
        <title>Jason Hegyessy | Designer</title>
        <link
          rel="stylesheet"
          type="text/css"
          href={Deno.env.get("FONTS_URL")}
        />
      </Head>
      <article class="max-w-[68ch]">
        {children}
      </article>
    </main>
  );
}
