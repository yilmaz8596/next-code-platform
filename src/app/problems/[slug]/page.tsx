import Link from "next/link";
import { ArrowLeft, Brain, Play, Timer } from "lucide-react";

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

export default async function ProblemSolvePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Solve</Badge>
              <Badge variant="outline" className="font-mono">
                {slug}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Timer className="size-3.5" /> Interview mode
              </Badge>
            </div>
            <h1 className="mt-3 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
              Problem workspace
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              This is a UI placeholder for the editor + AI hints.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/problems">
                <ArrowLeft className="size-4" /> Back
              </Link>
            </Button>
            <Button type="button" className="w-full sm:w-auto">
              Run tests <Play className="size-4" />
            </Button>
          </div>
        </header>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle>Prompt</CardTitle>
              <CardDescription>Read the statement and constraints.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Replace this with your real problem content later.
              </p>
              <Separator />
              <div className="rounded-xl border bg-background/60 p-4">
                <div className="text-sm font-medium">Example</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Given an array of numbers, return indices that sum to a target.
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <p className="text-xs text-muted-foreground">
                No data fetching is implemented.
              </p>
            </CardFooter>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Brain className="size-4 text-primary" /> AI hints
              </CardTitle>
              <CardDescription>UI-only assistant panel.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border bg-background/60 p-4 text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Hint 1</div>
                <p className="mt-1">Try a hashmap to track seen values.</p>
              </div>
              <div className="rounded-xl border bg-background/60 p-4 text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Hint 2</div>
                <p className="mt-1">Watch out for duplicates and index order.</p>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button asChild variant="outline" className="w-full">
                <Link href="/interview">Open interview (AI)</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
