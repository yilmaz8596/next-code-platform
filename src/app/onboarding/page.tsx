"use client";

import Link from "next/link";
import { ArrowRight, Compass, GraduationCap, Target } from "lucide-react";

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

export default function OnboardingPage() {
  return (
    <div className="h-dvh overflow-hidden bg-background">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Onboarding</Badge>
              <Badge variant="outline">2–3 steps</Badge>
            </div>
            <h1 className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s personalize your practice
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Pick what fits you best. No worries—you can change this later.
            </p>
          </div>

          <Button asChild className="shrink-0">
            <Link href="/dashboard">
              Skip <ArrowRight className="size-4" />
            </Link>
          </Button>
        </header>

        <div className="mt-6 grid flex-1 gap-4 overflow-auto lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="size-4 text-primary" /> Step 1: What&apos;s your goal?
              </CardTitle>
              <CardDescription>Choose one that best describes you.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button type="button" variant="outline" className="w-full justify-start">
                Preparing for interviews
              </Button>
              <Button type="button" variant="outline" className="w-full justify-start">
                Learning to code
              </Button>
              <Button type="button" variant="outline" className="w-full justify-start">
                Practicing for fun
              </Button>
              <Button type="button" variant="outline" className="w-full justify-start">
                Specific company prep
              </Button>
            </CardContent>
            <CardFooter className="border-t">
              <p className="text-xs text-muted-foreground">
                Example: Google, Amazon, Microsoft.
              </p>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" /> Step 2: What&apos;s your level?
              </CardTitle>
              <CardDescription>We&apos;ll adjust difficulty and pacing.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button type="button" variant="outline" className="w-full justify-start">
                Beginner (new to coding)
              </Button>
              <Button type="button" variant="outline" className="w-full justify-start">
                Intermediate (know basics)
              </Button>
              <Button type="button" variant="outline" className="w-full justify-start">
                Advanced (interview-ready)
              </Button>
            </CardContent>
            <CardFooter className="border-t">
              <p className="text-xs text-muted-foreground">
                Tip: You can switch tracks anytime.
              </p>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="size-4 text-primary" /> Step 3: Choose your path (optional)
              </CardTitle>
              <CardDescription>
                Recommended paths are shown here. (No selection logic yet.)
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              <Card className="py-4">
                <CardContent className="px-4">
                  <div className="text-sm font-medium">Interview Sprint</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    High-signal problems + patterns.
                  </p>
                </CardContent>
                <CardFooter className="px-4">
                  <Button type="button" variant="outline" className="w-full">
                    Choose
                  </Button>
                </CardFooter>
              </Card>

              <Card className="py-4">
                <CardContent className="px-4">
                  <div className="text-sm font-medium">Core Foundations</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Data structures, basics, practice.
                  </p>
                </CardContent>
                <CardFooter className="px-4">
                  <Button type="button" variant="outline" className="w-full">
                    Choose
                  </Button>
                </CardFooter>
              </Card>

              <Card className="py-4">
                <CardContent className="px-4">
                  <div className="text-sm font-medium">Daily Streak</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Small sessions that compound.
                  </p>
                </CardContent>
                <CardFooter className="px-4">
                  <Button type="button" variant="outline" className="w-full">
                    Choose
                  </Button>
                </CardFooter>
              </Card>

              <div className="md:col-span-3">
                <Separator className="my-2" />
                <Button type="button" variant="ghost" className="w-full">
                  I&apos;ll explore on my own
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 border-t sm:flex-row sm:justify-end">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/problems">Go to problems</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/dashboard">
                  Continue to dashboard <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
