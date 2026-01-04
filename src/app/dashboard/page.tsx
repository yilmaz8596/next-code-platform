"use client";

import Link from "next/link";
import {
  ArrowRight,
  Flame,
  ListChecks,
  Play,
  Sparkles,
  Trophy,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Dashboard</Badge>
              <Badge variant="outline" className="gap-1">
                <Flame className="size-3.5" /> Streak: 7
              </Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Your progress and next steps—ready when you are.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/onboarding">Update onboarding</Link>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/problems">
                Continue <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Problems solved</CardTitle>
              <CardDescription>Total</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold tracking-tight">12</div>
              <p className="mt-1 text-xs text-muted-foreground">+3 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <CardDescription>Last 10 submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold tracking-tight">80%</div>
              <p className="mt-1 text-xs text-muted-foreground">Good pace</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Time spent</CardTitle>
              <CardDescription>This week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold tracking-tight">2.4h</div>
              <p className="mt-1 text-xs text-muted-foreground">Keep it consistent</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Rank</CardTitle>
              <CardDescription>Practice leaderboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Trophy className="size-4 text-primary" />
                <span className="text-3xl font-semibold tracking-tight">#128</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Top 20%</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" /> Recommended next problem
              </CardTitle>
              <CardDescription>Based on your recent practice.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="rounded-xl border bg-background/60 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-medium">Two Sum</div>
                    <p className="text-sm text-muted-foreground">
                      Warm-up with hashmaps (easy)
                    </p>
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/problems">
                      Start <Play className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button type="button" variant="outline" className="w-full">
                  Continue learning path
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  Start random problem
                </Button>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <p className="text-xs text-muted-foreground">
                Quick actions are UI-only placeholders.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="size-4 text-primary" /> Recent submissions
              </CardTitle>
              <CardDescription>Your latest activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Problem</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">When</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Two Sum</TableCell>
                    <TableCell>Accepted</TableCell>
                    <TableCell className="text-right">Today</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Valid Parentheses</TableCell>
                    <TableCell>Wrong</TableCell>
                    <TableCell className="text-right">Yesterday</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Binary Search</TableCell>
                    <TableCell>Accepted</TableCell>
                    <TableCell className="text-right">2d</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t">
              <Button asChild variant="outline" className="w-full">
                <Link href="/problems">View problems</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <Separator className="my-8" />

        <section className="grid gap-3 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Tip: Go to onboarding to set your goal and level.
          </p>
          <Button asChild variant="link" className="h-auto p-0">
            <Link href="/onboarding">Open onboarding</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
