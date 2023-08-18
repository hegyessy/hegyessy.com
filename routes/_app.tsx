import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jason Hegyessy | Designer</title>
        <link
          rel="stylesheet"
          type="text/css"
          href={Deno.env.get("FONTS_URL")}
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
