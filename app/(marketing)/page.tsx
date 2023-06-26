import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Accordion, AccordionItem,AccordionTrigger,AccordionContent } from "@/components/ui/accordion"
async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Enabling people to make their plants smarter.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We helps you make your plants smarter by providing you with the tools and insights you need to care for them intelligently.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M 9.824219 2.15625 C 5.289062 3.148438 1.875 7.351562 1.875 12 C 1.875 14.53125 3.039062 17.269531 4.875 19.125 C 10.539062 24.769531 20.15625 21.898438 21.863281 14.0625 C 22.179688 12.523438 22.179688 11.476562 21.863281 9.917969 C 20.699219 4.445312 15.320312 0.957031 9.824219 2.15625 Z M 14.8125 4.667969 C 17.960938 5.886719 20.0625 9.132812 19.835938 12.429688 C 19.59375 15.824219 17.4375 18.542969 14.195312 19.539062 C 11.023438 20.492188 7.5 19.238281 5.570312 16.5 C 2.550781 12.167969 4.59375 6.148438 9.65625 4.5 C 11.117188 4.011719 13.332031 4.085938 14.8125 4.667969 Z M 14.8125 4.667969 "/>
              <path d="M 11.867188 5.851562 C 11.230469 6.695312 8.230469 12.207031 8.34375 12.355469 C 8.398438 12.46875 8.980469 12.5625 9.636719 12.5625 C 10.292969 12.5625 10.894531 12.65625 11.023438 12.789062 C 11.175781 12.9375 11.25 13.855469 11.25 15.710938 C 11.25 18.355469 11.25 18.394531 11.664062 18.335938 C 11.960938 18.300781 12.523438 17.476562 13.914062 15.09375 C 14.925781 13.351562 15.730469 11.832031 15.695312 11.71875 C 15.65625 11.625 15.09375 11.511719 14.4375 11.476562 C 13.761719 11.4375 13.125 11.324219 12.992188 11.210938 C 12.804688 11.0625 12.75 10.292969 12.75 8.324219 C 12.75 5.8125 12.730469 5.625 12.394531 5.625 C 12.207031 5.625 11.960938 5.738281 11.867188 5.851562 Z M 11.867188 5.851562 "/>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Low powered</h3>
                <p className="text-sm text-muted-foreground">
                  A low-power device with an intuitive mobile app for easy control.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M 7.6875 1.40625 C 7.6875 2.664062 7.726562 2.832031 8.023438 2.773438 C 8.289062 2.71875 8.34375 2.492188 8.34375 1.40625 C 8.34375 0.320312 8.289062 0.09375 8.023438 0.0390625 C 7.726562 -0.0195312 7.6875 0.148438 7.6875 1.40625 Z M 7.6875 1.40625 "/>
                <path d="M 11.757812 0.113281 C 11.679688 0.1875 11.625 0.824219 11.625 1.539062 C 11.625 2.699219 11.664062 2.8125 12 2.8125 C 12.355469 2.8125 12.394531 2.71875 12.335938 1.460938 C 12.28125 0.242188 12.09375 -0.207031 11.757812 0.113281 Z M 11.757812 0.113281 "/>
                <path d="M 15.636719 0.261719 C 15.582031 0.394531 15.5625 1.011719 15.601562 1.613281 C 15.636719 2.492188 15.730469 2.71875 15.992188 2.773438 C 16.273438 2.832031 16.3125 2.664062 16.3125 1.425781 C 16.3125 0.261719 16.257812 0 16.03125 0 C 15.863281 0 15.695312 0.113281 15.636719 0.261719 Z M 15.636719 0.261719 "/>
                <path d="M 4.761719 4.761719 L 4.125 5.398438 L 4.125 18.601562 L 5.398438 19.875 L 18.601562 19.875 L 19.875 18.601562 L 19.875 5.398438 L 18.601562 4.125 L 5.398438 4.125 Z M 13.648438 9.601562 C 14.382812 9.824219 15.375 10.613281 15.375 10.988281 C 15.375 11.289062 14.699219 11.34375 14.53125 11.0625 C 14.25 10.632812 12.917969 10.125 12 10.125 C 11.082031 10.125 9.75 10.632812 9.46875 11.0625 C 9.300781 11.34375 8.625 11.289062 8.625 11.007812 C 8.625 10.855469 8.8125 10.574219 9.054688 10.367188 C 10.199219 9.320312 11.8125 9.039062 13.648438 9.601562 Z M 13.332031 11.757812 C 13.929688 12.113281 14.082031 12.75 13.554688 12.75 C 13.367188 12.75 13.050781 12.617188 12.863281 12.46875 C 12.65625 12.320312 12.261719 12.1875 12 12.1875 C 11.738281 12.1875 11.34375 12.320312 11.136719 12.46875 C 10.648438 12.84375 10.125 12.824219 10.125 12.414062 C 10.125 11.570312 12.261719 11.117188 13.332031 11.757812 Z M 12.65625 13.667969 C 12.824219 14.230469 12.5625 14.625 12 14.625 C 11.4375 14.625 11.175781 14.230469 11.34375 13.667969 C 11.417969 13.425781 11.644531 13.3125 12 13.3125 C 12.355469 13.3125 12.582031 13.425781 12.65625 13.667969 Z M 12.65625 13.667969 "/>
                <path d="M 0.0390625 8.007812 C 0.09375 8.289062 0.320312 8.34375 1.40625 8.34375 C 2.492188 8.34375 2.71875 8.289062 2.773438 8.007812 C 2.832031 7.726562 2.664062 7.6875 1.40625 7.6875 C 0.148438 7.6875 -0.0195312 7.726562 0.0390625 8.007812 Z M 0.0390625 8.007812 "/>
                <path d="M 21.226562 8.007812 C 21.28125 8.289062 21.507812 8.34375 22.59375 8.34375 C 23.679688 8.34375 23.90625 8.289062 23.960938 8.007812 C 24.019531 7.726562 23.851562 7.6875 22.59375 7.6875 C 21.335938 7.6875 21.167969 7.726562 21.226562 8.007812 Z M 21.226562 8.007812 "/>
                <path d="M 0.09375 11.8125 C -0.148438 12.207031 0.261719 12.375 1.519531 12.375 C 2.679688 12.375 2.8125 12.335938 2.8125 12 C 2.8125 11.664062 2.679688 11.625 1.519531 11.625 C 0.789062 11.625 0.148438 11.699219 0.09375 11.8125 Z M 0.09375 11.8125 "/>
                <path d="M 21.1875 12 C 21.1875 12.375 21.28125 12.394531 22.554688 12.335938 C 23.605469 12.300781 23.90625 12.226562 23.90625 12 C 23.90625 11.773438 23.605469 11.699219 22.554688 11.664062 C 21.28125 11.605469 21.1875 11.625 21.1875 12 Z M 21.1875 12 "/>
                <path d="M 0.132812 15.675781 C 0.0546875 15.75 0 15.917969 0 16.070312 C 0 16.257812 0.355469 16.3125 1.425781 16.3125 C 2.664062 16.3125 2.832031 16.273438 2.773438 15.976562 C 2.71875 15.710938 2.476562 15.636719 1.480469 15.601562 C 0.824219 15.5625 0.207031 15.601562 0.132812 15.675781 Z M 0.132812 15.675781 "/>
                <path d="M 21.320312 15.675781 C 21.242188 15.75 21.1875 15.917969 21.1875 16.070312 C 21.1875 16.257812 21.542969 16.3125 22.613281 16.3125 C 23.851562 16.3125 24.019531 16.273438 23.960938 15.976562 C 23.90625 15.710938 23.664062 15.636719 22.667969 15.601562 C 22.011719 15.5625 21.394531 15.601562 21.320312 15.675781 Z M 21.320312 15.675781 "/>
                <path d="M 7.6875 22.59375 C 7.6875 23.851562 7.726562 24.019531 8.023438 23.960938 C 8.289062 23.90625 8.34375 23.679688 8.34375 22.59375 C 8.34375 21.507812 8.289062 21.28125 8.023438 21.226562 C 7.726562 21.167969 7.6875 21.335938 7.6875 22.59375 Z M 7.6875 22.59375 "/>
                <path d="M 11.664062 22.539062 C 11.699219 23.605469 11.773438 23.90625 12 23.90625 C 12.226562 23.90625 12.300781 23.605469 12.335938 22.539062 C 12.394531 21.28125 12.375 21.1875 12 21.1875 C 11.625 21.1875 11.605469 21.28125 11.664062 22.539062 Z M 11.664062 22.539062 "/>
                <path d="M 15.636719 21.449219 C 15.582031 21.582031 15.5625 22.199219 15.601562 22.800781 C 15.636719 23.679688 15.730469 23.90625 15.992188 23.960938 C 16.273438 24.019531 16.3125 23.851562 16.3125 22.613281 C 16.3125 21.449219 16.257812 21.1875 16.03125 21.1875 C 15.863281 21.1875 15.695312 21.300781 15.636719 21.449219 Z M 15.636719 21.449219 "/>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">IoT</h3>
                <p className="text-sm text-muted-foreground">
                  We use IoT technology to make homes smarter and more efficient.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M 8.71875 0.355469 C 4.667969 1.519531 1.332031 4.914062 0.300781 8.925781 C -0.09375 10.445312 -0.09375 13.554688 0.300781 15.074219 C 1.367188 19.199219 4.949219 22.761719 9.019531 23.71875 C 10.554688 24.074219 13.445312 24.074219 14.980469 23.71875 C 18.09375 22.988281 21.148438 20.585938 22.632812 17.71875 C 23.664062 15.710938 24 14.324219 24 12 C 24 9.675781 23.664062 8.289062 22.632812 6.28125 C 21.167969 3.449219 18.207031 1.105469 15.074219 0.300781 C 13.5 -0.113281 10.21875 -0.0742188 8.71875 0.355469 Z M 14.34375 6.65625 C 15.957031 7.070312 17.625 7.949219 18.769531 9.019531 C 19.59375 9.789062 19.707031 9.957031 19.5 10.21875 C 19.164062 10.632812 18.882812 10.574219 18.28125 9.9375 C 17.476562 9.09375 16.199219 8.324219 14.8125 7.875 C 13.78125 7.519531 13.292969 7.480469 11.625 7.539062 C 9.335938 7.648438 8.082031 8.0625 6.636719 9.1875 C 4.835938 10.632812 4.894531 10.59375 4.539062 10.257812 C 4.257812 9.957031 4.3125 9.882812 5.230469 9.019531 C 7.632812 6.804688 11.25 5.867188 14.34375 6.65625 Z M 14.886719 10.085938 C 16.125 10.667969 17.4375 11.699219 17.4375 12.09375 C 17.4375 12.226562 17.324219 12.429688 17.175781 12.542969 C 16.949219 12.730469 16.761719 12.65625 16.179688 12.132812 C 14.8125 10.894531 13.988281 10.59375 12 10.59375 C 10.011719 10.59375 9.1875 10.894531 7.820312 12.132812 C 7.238281 12.65625 7.050781 12.730469 6.824219 12.542969 C 6.675781 12.429688 6.5625 12.226562 6.5625 12.09375 C 6.5625 11.492188 8.945312 9.957031 10.445312 9.5625 C 11.679688 9.261719 13.59375 9.488281 14.886719 10.085938 Z M 13.914062 12.957031 C 14.832031 13.425781 15.449219 14.210938 15.167969 14.550781 C 14.886719 14.886719 14.492188 14.886719 14.304688 14.53125 C 14.0625 14.101562 12.75 13.5 12.054688 13.5 C 11.304688 13.5 10.386719 13.875 9.769531 14.417969 C 9.242188 14.886719 9.113281 14.90625 8.832031 14.550781 C 8.417969 14.042969 9.730469 12.898438 11.15625 12.542969 C 11.90625 12.355469 13.070312 12.523438 13.914062 12.957031 Z M 13.914062 12.957031 "/>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">WiFi</h3>
                <p className="text-sm text-muted-foreground">
                  The device uses 802.11 protocol for seamless communication.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Order Now
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            H2O is a smart drip irrigation system that takes care of your plants when you&apos;re away, so you can relax and not worry.{" "}
            <Link
              href="\pricing"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Order here
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            FAQs
          </h2>
          <Accordion className="" type="single" defaultValue="item-1" collapsible>
            <AccordionItem className="" value="item-1">
              <AccordionTrigger>Is the device compatible with 5GHz WiFi networks?</AccordionTrigger>
              <AccordionContent>No. But if your router supports dual band then the device will work.</AccordionContent>
            </AccordionItem>

            <AccordionItem className="" value="item-2">
              <AccordionTrigger>How many device can i connect to using mobile app at
              once?&nbsp;</AccordionTrigger>
              <AccordionContent>Currently one, we are working on the multiple version.</AccordionContent>
            </AccordionItem>

            <AccordionItem className="" value="item-3">
              <AccordionTrigger>If I place an order now, what will I receive?</AccordionTrigger>
              <AccordionContent className="AccordionContent">
                <div className="AccordionContentText">
                Our kit includes a drip irrigation module that supports up to 5 plants, as well as an electronic
                  valve that can be controlled through WiFi via our mobile application. You will receive all of these
                  components upon placing your order.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="" value="item-4">
              <AccordionTrigger>How do I place an order?</AccordionTrigger>
              <AccordionContent>Click on order now. Or contact us via whatsapp</AccordionContent>
            </AccordionItem>
          </Accordion>
          
          
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
