import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  Cpu,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Zap,
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

const features = [
  {
    icon: Brain,
    title: "AI tutor that explains",
    description:
      "Get step-by-step reasoning, hints, and edge-case coverage while you code.",
  },
  {
    icon: Terminal,
    title: "Fast, clean editor flow",
    description:
      "Keyboard-first UX, saved drafts, and focused problem pages that stay out of your way.",
  },
  {
    icon: Trophy,
    title: "Competitive progress",
    description:
      "Streaks, leaderboards, and goal-based tracks designed to keep you shipping solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Modern auth patterns and sensible guardrails so production deployments feel safe.",
  },
  {
    icon: Cpu,
    title: "Built for scale",
    description:
      "A SaaS-ready architecture with Drizzle + Postgres foundations.",
  },
  {
    icon: Zap,
    title: "Instant feedback",
    description:
      "A tight loop between idea → code → test results so you iterate faster.",
  },
];

const testimonials = [
  {
    name: "Élodie",
    role: "Full‑stack developer",
    quote:
      "The AI hints feel like a senior reviewing my approach, not just giving answers.",
  },
  {
    name: "Mateusz",
    role: "CS student",
    quote:
      "I finally stick to daily practice—progress feels visible and motivating.",
  },
  {
    name: "Hye‑jin",
    role: "Interview prep",
    quote:
      "The platform stays focused: solve, learn, repeat. No clutter.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-md w-md -translate-x-1/2 rounded-full bg-primary/25 blur-3xl opacity-70 motion-safe:animate-pulse" />
        <div className="absolute -bottom-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-accent/35 blur-3xl opacity-70 motion-safe:animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-secondary/70 blur-3xl opacity-70 motion-safe:animate-pulse" />
      </div>

      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-lg border bg-card shadow-sm">
              <Code2 className="size-4 text-primary" />
            </span>
            <span className="text-base">NextCode</span>
            <Badge
              variant="secondary"
              className="hidden md:inline-flex motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700"
            >
              AI SaaS
            </Badge>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#pricing">See plans</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/login">
                Get started <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24 mt-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="size-3.5" />
                  AI tutor
                </Badge>
                <Badge variant="outline">LeetCode‑style practice</Badge>
                <Badge variant="outline">SaaS-ready</Badge>
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Practice coding with an AI copilot that helps you think.
              </h1>

              <p className="mt-5 max-w-prose text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                NextCode is an AI SaaS coding platform for interview prep and skill building—
                with instant feedback, guided hints, and competitive progress.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <Link href="#cta">
                    Start practicing <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Explore features</Link>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <Card className="py-4">
                  <CardContent className="px-4">
                    <div className="text-sm text-muted-foreground">Time to value</div>
                    <div className="mt-1 text-xl font-semibold tracking-tight">Minutes</div>
                  </CardContent>
                </Card>
                <Card className="py-4">
                  <CardContent className="px-4">
                    <div className="text-sm text-muted-foreground">Focus</div>
                    <div className="mt-1 text-xl font-semibold tracking-tight">Practice</div>
                  </CardContent>
                </Card>
                <Card className="py-4">
                  <CardContent className="px-4">
                    <div className="text-sm text-muted-foreground">Guidance</div>
                    <div className="mt-1 text-xl font-semibold tracking-tight">AI hints</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-primary/30 via-accent/30 to-secondary/40 blur-xl" />
              <Card className="relative overflow-hidden border bg-card/80 shadow-lg backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-md border bg-background shadow-sm">
                      <Terminal className="size-4 text-primary" />
                    </span>
                    Live session
                  </CardTitle>
                  <CardDescription>
                    AI hints, tests, and a clean coding loop.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-hidden rounded-xl border bg-background/60 p-4 shadow-sm">
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/0 to-background/70" />
                      <div className="absolute -top-24 left-0 right-0 h-24 bg-linear-to-r from-transparent via-primary/20 to-transparent blur-sm motion-safe:animate-code-scan" />
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex size-full rounded-full bg-primary/40 motion-safe:animate-ping" />
                          <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                        Running tests
                      </span>
                      <span className="font-mono">O(n log n)</span>
                    </div>
                    <Separator className="my-4" />
                    <pre className="relative overflow-x-auto text-sm leading-6">
                      <code className="font-mono text-foreground">
{`function twoSum(nums: number[], target: number) {
  const seen = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]
    if (seen.has(need)) return [seen.get(need), i]
    seen.set(nums[i], i)
  }
}`}
                        <span className="ml-0.5 text-primary motion-safe:animate-caret">
                          ▍
                        </span>
                      </code>
                    </pre>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="gap-1">
                        <Brain className="size-3.5" /> Hint: hashmap
                      </Badge>
                      <Badge variant="outline">Edge cases ✓</Badge>
                      <Badge variant="outline">All tests ✓</Badge>
                    </div>

                    <div className="pointer-events-none absolute -right-3 -top-3 hidden md:block">
                      <div className="animate-float-slow rounded-xl border bg-card/80 p-2 shadow-sm backdrop-blur">
                        <Cpu className="size-4 text-primary" />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -left-3 -bottom-3 hidden md:block">
                      <div className="animate-float-slow rounded-xl border bg-card/80 p-2 shadow-sm backdrop-blur [animation-delay:800ms]">
                        <Sparkles className="size-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between border-t">
                  <span className="text-sm text-muted-foreground">
                    Built with Next.js + Drizzle
                  </span>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href="#features">See more</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Loved by learners
          </h2>
          <p className="mt-2 text-muted-foreground">
            A product feel that respects your focus.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <CardDescription>{t.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">“{t.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Simple pricing
              </h2>
              <p className="mt-2 text-muted-foreground">
                Start free. Upgrade when you want deeper AI coaching.
              </p>
            </div>
            <Badge variant="outline">Cancel anytime</Badge>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
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
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#cta">Create account</Link>
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
                <Button className="w-full" asChild>
                  <Link href="#cta">Upgrade to Pro</Link>
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
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#cta">Upgrade to Elite</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg border bg-card shadow-sm">
                <Code2 className="size-4 text-primary" />
              </span>
              <span>NextCode Platform</span>
            </div>

            <span className="sm:text-right">© {new Date().getFullYear()} NextCode</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
