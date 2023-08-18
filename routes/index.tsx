import { Layout } from "../components/Layouts.tsx";
import { WorkHistory } from "../components/WorkHistory.tsx";
import { JournalEntries } from "../components/Journal.tsx";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <WorkHistory />
      <JournalEntries entries={[]} />
    </Layout>
  );
}

function Intro() {
  return (
    <header>
      <span class="text-[#f34213] font-bold text-2xl mb-8">
        Jason Hegyessy
      </span>
      <span class="font-normal ml-1 text-2xl text-[#2e2e3a]">
        is a software designer and developer with 13 years of experience
        designing easy to use enterprise scale web and mobile apps.
      </span>
    </header>
  );
}
