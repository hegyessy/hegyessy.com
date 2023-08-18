import { JSX } from "preact";

function WorkHistoryItem({ title, date, children }: {
  title: string;
  date: string;
  children: string | JSX.Element;
}) {
  return (
    <li class="mb-4">
      <time>{date}</time>
      <br />
      <strong class="text-[#0e3b3b]">{title}</strong>
      <p>{children}</p>
    </li>
  );
}

export function WorkHistory() {
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
