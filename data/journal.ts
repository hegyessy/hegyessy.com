import { parse } from "$std/";

const journalEntries = await Deno.readTextFile("./journal");

export const data = parse(journalEntries);
