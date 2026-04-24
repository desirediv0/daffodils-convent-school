"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-4 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:items-start",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-xl border border-border bg-muted/60 p-1 text-muted-foreground shadow-sm backdrop-blur-sm data-[variant=line]:rounded-none data-[variant=line]:border-0 data-[variant=line]:bg-transparent data-[variant=line]:p-0",
  {
    variants: {
      variant: {
        default: "",
        line: "gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(
        tabsListVariants({ variant }),
        "data-[orientation=horizontal]:w-full data-[orientation=horizontal]:justify-start data-[orientation=horizontal]:overflow-x-auto data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-semibold whitespace-nowrap text-foreground/70 transition-all duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border-border",
        "data-[variant=line]:rounded-none data-[variant=line]:border-b-2 data-[variant=line]:border-transparent data-[variant=line]:bg-transparent data-[variant=line]:px-3 data-[variant=line]:py-2 data-[variant=line]:shadow-none data-[variant=line]:data-[state=active]:border-primary data-[variant=line]:data-[state=active]:text-primary",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:px-4 data-[orientation=vertical]:py-3",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none focus-visible:ring-0", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
