import { Layout } from "../components/Layouts.tsx";
import { JSX } from "preact";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <WorkHistory />
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

interface WorkHistoryItemProps {
  title: string;
  date: string;
  children: string | JSX.Element;
}

function WorkHistoryItem({ title, date, children }: WorkHistoryItemProps) {
  return (
    <li class="mb-4">
      <time>{date}</time>
      <br />
      <strong class="text-[#0e3b3b]">{title}</strong>
      <p>{children}</p>
    </li>
  );
}

function WorkHistory() {
  return (
    <section id="work-history" class="my-8">
      <header>
        <h2 class="font-bold text-xl text-[#f34213] mb-2">Work History</h2>
      </header>
      <ol>
        <WorkHistoryItem
          title="Application Designer, Apple Inc"
          date="2017 to Today"
        >
          Design company wide security applications for the engineering team at
          Information Security.
        </WorkHistoryItem>
        <WorkHistoryItem
          title="Senior Product Designer, SmartRecruiters"
          date="2012 to 2017"
        >
          Designed the reucruiting platform used by Ikea, McDonalds, Visa, City
          of San Francisco, and many more.
        </WorkHistoryItem>
        <WorkHistoryItem
          title="Application Designer, Apple Inc"
          date="2012 to 2014"
        >
          Designed global asset managment solutions for use at Apple retail
          stores.
        </WorkHistoryItem>
        <WorkHistoryItem
          title="Web Designer &amp; Developer, Fulltime Freelance"
          date="2010 to 2012"
        >
          Worked with media, artists, and production companies in San Francisco.
        </WorkHistoryItem>
      </ol>
    </section>
  );
}
