import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  ListChecks,
  Target,
} from "lucide-react";

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

export default async function PathDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === "google-60-days") {
    return (
      <div className="min-h-dvh bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Briefcase className="size-3.5" /> Company prep
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <CalendarDays className="size-3.5" /> 60 days
                </Badge>
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Land a job at Google in 60 days
              </h1>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                A structured plan: milestones, weekly targets, and a focused set.
                (UI-only)
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/paths">
                  <ArrowLeft className="size-4" /> Back to paths
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/problems/recommended">
                  See recommended problems <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </header>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="space-y-1">
                <CardDescription>Duration</CardDescription>
                <CardTitle className="text-2xl">60 days</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4" /> 8 weeks + buffer
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardDescription>Weekly target</CardDescription>
                <CardTitle className="text-2xl">12 problems</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="size-4" /> Consistency beats cramming
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardDescription>Core focus</CardDescription>
                <CardTitle className="text-2xl">Patterns</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="size-4" /> Templates + trade-offs
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardDescription>Practice style</CardDescription>
                <CardTitle className="text-2xl">Timed</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                <Flame className="size-4" /> Interview pacing
              </CardContent>
            </Card>
          </section>

          <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Milestones</CardTitle>
                <CardDescription>
                  Checkpoints that keep you honest. Marked as examples only.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                    <div>
                      <div className="font-medium">Week 1–2: Fundamentals</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Arrays/strings, hashing, stacks/queues.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                    <div>
                      <div className="font-medium">Week 3–4: Search + recursion</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Binary search, BFS/DFS, recursion patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                    <div>
                      <div className="font-medium">Week 5–6: Graphs + DP basics</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Trees/graphs, intro DP, greedy, intervals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-4 text-primary" />
                    <div>
                      <div className="font-medium">Week 7–8: Mock interviews</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Timebox, narrate trade-offs, refine communication.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/interview">Start a mock interview</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="/problems">Browse all problems</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> Weekly cadence
                </CardTitle>
                <CardDescription>
                  A simple schedule that’s easy to stick to.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Mon–Thu</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    2 problems/day + quick review notes.
                  </p>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Fri</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Re-solve 2 missed problems from memory.
                  </p>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Sat</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    One timed session (45–60 min).
                  </p>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Sun</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Light review + plan next week.
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="text-sm font-medium">Starter focus areas</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Hashmap</Badge>
                    <Badge variant="outline">Stack</Badge>
                    <Badge variant="outline">Two pointers</Badge>
                    <Badge variant="outline">Binary search</Badge>
                    <Badge variant="outline">BFS/DFS</Badge>
                    <Badge variant="outline">DP basics</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Path</Badge>
              <Badge variant="outline" className="font-mono">
                {id}
              </Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Learning path
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              A structured set of problems and milestones. (UI-only)
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/paths">
                <ArrowLeft className="size-4" /> Back
              </Link>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/problems">
                Start practicing <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="size-4 text-primary" /> Overview
              </CardTitle>
              <CardDescription>What you&apos;ll learn in this path.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                This page is a placeholder for the selected path content.
              </p>
              <Separator />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Week 1: Arrays + Hashmaps</li>
                <li>Week 2: Two pointers + Sliding window</li>
                <li>Week 3: Stacks + Queues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="size-4 text-primary" /> Next up
              </CardTitle>
              <CardDescription>Suggested first problem.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-background/60 p-4">
                <div className="font-medium">Two Sum</div>
                <p className="mt-1 text-sm text-muted-foreground">Hashmap warm-up</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/problems/two-sum">Open problem</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
