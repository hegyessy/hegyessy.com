import { type AppProps } from "$fresh/server.ts";
export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jason Hegyessy | Software Designer</title>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href={Deno.env.get("FONTS_URL")}
        />
      </head>
      <body>
        <main class="grid grid-cols-site">
          <Component />
        </main>
      </body>
    </html>
  );
}
