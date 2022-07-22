/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1>Hegyessy.com</h1>
      <p>One day this will be a website</p>
    </div>
  );
}
