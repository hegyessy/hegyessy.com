import { ComponentChildren } from "preact";

interface SiteHeaderProps {
  title?: string;
  subtitle?: string;
  children?: ComponentChildren;
}

export function SiteHeader(
  {
    title = "Jason Hegyessy",
    subtitle = "Interface Designer",
    children,
  }: SiteHeaderProps,
) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children && children}
    </header>
  );
}

interface SiteLayoutProps {
  children: ComponentChildren;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <main class="p-4 mx-auto max-w-screen-md">
      {children}
    </main>
  );
}

interface SiteFooterProps {
  children?: string | ComponentChildren;
}

export function SiteFooter({ children }: SiteFooterProps) {
  return (
    <footer>
      <p>Made with love in San Francisco</p>
      <p>{children}</p>
    </footer>
  );
}
