import Link from "next/link";
import { ArrowLeft, Brain, Building2, Sparkles } from "lucide-react";

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

export default function RecommendedProblemsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="size-3.5" /> Smart recommendations
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Brain className="size-3.5" /> Better than random
              </Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Recommended for you
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              A ranked list with quick “why this” explanations. (UI-only)
            </p>
          </div>

          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/problems">
              <ArrowLeft className="size-4" /> Back to problems
            </Link>
          </Button>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Top picks</CardTitle>
              <CardDescription>Based on your goal, level, and recent activity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border bg-background/60 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-medium">Two Sum</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Why: unlocks hashmap pattern for 10+ follow-ups.
                    </p>
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/problems/two-sum">Solve</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border bg-background/60 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-medium">Valid Parentheses</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Why: stack fundamentals show up everywhere.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="/problems/valid-parentheses">Solve</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border bg-background/60 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-medium">Binary Search</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Why: improves performance intuition and boundary handling.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="/problems/binary-search">Solve</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <p className="text-xs text-muted-foreground">
                Replace these with real ranking and signals later.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="size-4 text-primary" /> Company-specific prep
              </CardTitle>
              <CardDescription>Try a focused plan instead of a random list.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border bg-background/60 p-4">
                <div className="font-medium">Land a job at Google in 60 days</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  A structured path with milestones and weekly targets.
                </p>
              </div>
              <Separator />
              <Button asChild className="w-full">
                <Link href="/paths/google-60-days">Open the Google plan</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
