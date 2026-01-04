import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PricingPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Pricing</Badge>
              <Badge variant="outline">Cancel anytime</Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Upgrade when you&apos;re ready
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Simple plans for solo practice or small teams.
            </p>
          </div>

          <Button asChild className="w-full sm:w-auto">
            <Link href="/dashboard">
              Go to dashboard <ArrowRight className="size-4" />
            </Link>
          </Button>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Practice the fundamentals.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-4xl font-semibold tracking-tight">$0</div>
              <Separator />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Curated problem set</li>
                <li>Basic progress tracking</li>
                <li>Community solutions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button type="button" variant="outline" className="w-full">
                Start free
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-primary/30">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Pro <Badge variant="secondary">Popular</Badge>
              </CardTitle>
              <CardDescription>AI coaching that compounds.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-4xl font-semibold tracking-tight">$4.99</div>
              <Separator />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AI hints & explanations</li>
                <li>Advanced tracks + streaks</li>
                <li>Personalized review prompts</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button type="button" className="w-full">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Elite</CardTitle>
              <CardDescription>For cohorts and small teams.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-4xl font-semibold tracking-tight">$9.99</div>
              <Separator />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Team workspaces</li>
                <li>Shared tracks + goals</li>
                <li>Admin & usage controls</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button type="button" variant="outline" className="w-full">
                Upgrade to Elite
              </Button>
            </CardFooter>
          </Card>
        </section>

        <Separator className="my-8" />

        <section className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Looking for a guided plan? Explore learning paths.
          </p>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/paths">View paths</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
