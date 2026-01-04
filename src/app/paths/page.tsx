import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

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

const paths = [
  {
    id: "google-60-days",
    title: "Google 60‑day plan",
    description: 'Company-specific prep: "Land a job at Google in 60 days".',
    meta: "60 days · milestones · focused set",
  },
  {
    id: "interview-sprint",
    title: "Interview Sprint",
    description: "Patterns-first track for quick prep.",
    meta: "4 weeks · 25 problems",
  },
  {
    id: "core-foundations",
    title: "Core Foundations",
    description: "Data structures + fundamentals.",
    meta: "6 weeks · 30 problems",
  },
  {
    id: "daily-streak",
    title: "Daily Streak",
    description: "Short sessions to build consistency.",
    meta: "Ongoing · 1 problem/day",
  },
];

export default function PathsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Learning paths</Badge>
              <Badge variant="outline">Browse</Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Choose a path
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Structured practice with milestones. (UI-only)
            </p>
          </div>

          <Button asChild className="w-full sm:w-auto">
            <Link href="/dashboard">
              Back to dashboard <ArrowRight className="size-4" />
            </Link>
          </Button>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p) => (
            <Card key={p.id} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="size-4 text-primary" /> {p.title}
                </CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.meta}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/paths/${p.id}`}>Open path</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
