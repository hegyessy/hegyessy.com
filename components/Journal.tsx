interface JournalEntrySnippetProps {
  title: string;
  slug: string;
  snippet?: string;
}

interface JournalEntriesProps {
  entries: JournalEntrySnippetProps[];
}

function JournalEntrySnippet(
  { title, slug, snippet }: JournalEntrySnippetProps,
) {
  return (
    <li>
      <a href={slug} title={title}>{title}</a>
      <p>{snippet && snippet}</p>
    </li>
  );
}

export function JournalEntries({ entries }: JournalEntriesProps) {
  return (
    <div>
      <h2 class="font-bold text-xl text-[#f34213] mb-2">Journal</h2>
      {entries.length
        ? (
          entries.map((entry) => {
            return (
              <JournalEntrySnippet
                title={entry.title}
                slug={entry.slug}
                snippet={entry.snippet}
              />
            );
          })
        )
        : <p>No entries found</p>}
    </div>
  );
}
