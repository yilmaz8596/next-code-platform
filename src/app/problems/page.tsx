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

export default function ProblemsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Problems</Badge>
              <Badge variant="outline">UI only</Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Pick a problem to practice
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Placeholder page so onboarding can link here.
            </p>
          </div>

          <Button asChild className="w-full sm:w-auto">
            <Link href="/dashboard">
              Back to dashboard <ArrowRight className="size-4" />
            </Link>
          </Button>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Smart problem recommendations</CardTitle>
              <CardDescription>
                A ranked list with “why this” explanations. (UI-only)
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/problems/recommended">View recommendations</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Two Sum</CardTitle>
              <CardDescription>Hashmap warm-up</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Difficulty: Easy</p>
            </CardContent>
            <CardFooter>
              <Button type="button" className="w-full">
                Start
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Valid Parentheses</CardTitle>
              <CardDescription>Stack fundamentals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Difficulty: Easy</p>
            </CardContent>
            <CardFooter>
              <Button type="button" variant="outline" className="w-full">
                Start
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Binary Search</CardTitle>
              <CardDescription>Classic pattern</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Difficulty: Easy</p>
            </CardContent>
            <CardFooter>
              <Button type="button" variant="outline" className="w-full">
                Start
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
