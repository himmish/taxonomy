import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            © Qunxt 2023
            . Contact us on {"  "}
            <a className="u-btn u-button-link u-button-style u-none u-text-active-palette-1-base u-text-body-color u-text-hover-palette-1-base u-btn-1"
                href="mailto:operations@qunxt.com?subject=Query">operations@qunxt.com</a>
          
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
