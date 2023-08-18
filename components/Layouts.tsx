import { JSX } from "preact";

export interface Props {
  children?: JSX.Element | JSX.Element[];
}

export function Layout({ children }: Props) {
  return (
    <main class="font-serif p-4 w-full text-[#2e2e3a] flex flex-col items-center">
      <article class="max-w-[68ch]">
        {children}
      </article>
    </main>
  );
}
