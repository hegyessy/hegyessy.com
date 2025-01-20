export default function RSVP() {
  return (
    <article class="col-start-3 col-end-4 text-2xl pb-12">
      <header class="pt-12">
        <h1 class="text-primary font-bold mb-2">
          Dear friends, I miss you.
        </h1>
        <p class="mb-4">
          I’ve been thinking about how much I miss you all. For some, it’s been
          years; for others, months or weeks. No matter the time, it feels far
          too long.
        </p>
        <p class="mb-4">
          To change that, I’ve rented High Treason, the wine bar where Jill and
          I celebrated our engagement. I’d love for you to join me there for an
          evening of connection and good cheer. Wine and{" "}
          <a
            class="underline hover:text-primary"
            href="https://www.instagram.com/uncofranks/"
            title="Unco Frank
          's Instagram Page"
          >
            food
          </a>{" "}
          will be on me.
        </p>
        <p class="mb-4">
          I truly hope you can make it—I’d love to catch up, no matter how much
          time has passed.
        </p>
        <p class="mb-4">
          Warmly, <br /> Jason Hegyessy
        </p>
      </header>
      <hr class="bg-primary h-1 my-8" />
      <section>
        <a href="https://maps.apple.com/?ll=37.782847,-122.464104&q=Inner Richmond — San Francisco&spn=0.010225,0.011640&t=m">
          <address class="not-italic">
            <ul class="mb-2">
              <li class="font-bold">High Treason</li>
              <li>
                443 Clement St. San Francisco, Ca
              </li>
              <li>
                Saturday, February 22nd, 5-9 p.m.
              </li>
            </ul>
          </address>
        </a>
        <img
          class="w-[50%] mb-2 "
          src="/ht.png"
          alt="record player and wine bottles"
        />
        <h3 class="font-bold text-base">RSVP</h3>
        <p class="text-base">
          RSVPs aren’t required but would be greatly appreciated to help provide
          the caterer with an estimated headcount.
        </p>
      </section>
      <hr class="bg-primary h-1 my-8" />
      <section>
        <details class="mb-2">
          <summary class="italic mb-2">
            Isn't this around the time of your birthday?
          </summary>
          <div class="pl-6">
            <p class="text-lg mb-2">
              Yes, I'll be 46 the next day, but this is not a birthday
              celebration. There will be no cake and for the love of God no
              singing please.
            </p>
            <p class="text-lg mb-2">
              Also, no gifts please. If you insist on a gift I'd ask you make a
              donation to the{" "}
              <a
                class="underline hover:text-primary"
                href="https://www.budapestjewishcemetery.com"
                title="Donate"
              >
                Friends of Budapest Jewish Cemetery 501(C)(3).
              </a>
            </p>
          </div>
        </details>
        <details class="mb-2">
          <summary class="italic mb-2">
            May I bring a friend or significant other?
          </summary>
          <div class="pl-6">
            <p class="text-lg mb-2">
              Yes, I'd love to meet them. Just give me a heads up so I can
              coordinate with the venue on headcount.
            </p>
          </div>
        </details>
        <details class="mb-2">
          <summary class="italic mb-2">
            Will XYZ be there?
          </summary>
          <div class="pl-6">
            <p class="text-lg mb-2">
              They might attend—feel free to send me a message, and I’ll let you
              know if they’ve RSVP’d. If you’re asking due to a past
              disagreement, I kindly ask that everyone keep things respectful
              and cordial. No fisticuffs allowed.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
