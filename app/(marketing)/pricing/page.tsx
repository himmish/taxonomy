import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Enjoy your vacation without having to worry about your plants.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_240px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the Start plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Power Cable
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Electronic Valve
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Connection Pipe(valve to tap)
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 2 Way Tap (optional)
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Main Supply Pipe 5m
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feeder Pipe 10m
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Drip emitter 10
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Pin Connectors(feeder to main) 10
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Emitter Stakes 10
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Elbow & T Connector 2 each
            </li>
            
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">₹3499</h4>
            <p className="text-sm font-medium text-muted-foreground">
              One Time
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock premium features including H2O+ subscription.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_240px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Flower Seeds
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Organic Fertilizer
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">₹149</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <a className={cn(buttonVariants({ size: "lg" }))}>
            Coming Soon
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        
      </div>
    </section>
  )
}
