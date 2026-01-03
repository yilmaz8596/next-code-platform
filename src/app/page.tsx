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
      "A SaaS-ready architecture with Prisma + Postgres foundations.",
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

          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#features">
              Features
            </a>
            <a className="hover:text-foreground" href="#workflow">
              Workflow
            </a>
            <a className="hover:text-foreground" href="#pricing">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="#pricing">See plans</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#cta">
                Get started <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
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
                  <a href="#cta">
                    Start practicing <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">Explore features</a>
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
                    Built with Next.js + Prisma
                  </span>
                  <Button variant="secondary" size="sm" asChild>
                    <a href="#features">See more</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Everything you need to ship a coding SaaS
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                A modern foundation for an AI-first LeetCode-style platform.
              </p>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Bold Tech theme
            </Badge>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="transition-transform motion-safe:hover:-translate-y-0.5"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-lg border bg-background shadow-sm">
                        <Icon className="size-4 text-primary" />
                      </span>
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Designed for flow</CardTitle>
                <CardDescription>
                  A predictable loop that keeps you learning.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary">1</Badge>
                  <div>
                    <div className="font-medium">Pick a track</div>
                    <div className="text-sm text-muted-foreground">
                      DSA, system design, or language paths.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary">2</Badge>
                  <div>
                    <div className="font-medium">Solve with guardrails</div>
                    <div className="text-sm text-muted-foreground">
                      Get hints without spoilers.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary">3</Badge>
                  <div>
                    <div className="font-medium">Review and iterate</div>
                    <div className="text-sm text-muted-foreground">
                      Explanations and improvements that stick.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  Built for ambitious product teams
                </CardTitle>
                <CardDescription>
                  From landing page → auth → billing → practice sessions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border bg-background/60 p-4">
                    <div className="text-sm font-medium">Founder-friendly</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Clean UI primitives, composable sections, fast iteration.
                    </div>
                  </div>
                  <div className="rounded-xl border bg-background/60 p-4">
                    <div className="text-sm font-medium">Interview-ready</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Problem sets, constraints, and performance focus.
                    </div>
                  </div>
                  <div className="rounded-xl border bg-background/60 p-4">
                    <div className="text-sm font-medium">AI-first</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Coaching tone, progressive hints, and explainers.
                    </div>
                  </div>
                  <div className="rounded-xl border bg-background/60 p-4">
                    <div className="text-sm font-medium">Production-minded</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Prisma + Postgres workflow with safe deploy migrations.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <a href="#cta">Create account</a>
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
                <div className="text-4xl font-semibold tracking-tight">$19</div>
                <Separator />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>AI hints & explanations</li>
                  <li>Advanced tracks + streaks</li>
                  <li>Personalized review prompts</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#cta">Upgrade to Pro</a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team</CardTitle>
                <CardDescription>For cohorts and small teams.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-4xl font-semibold tracking-tight">$49</div>
                <Separator />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Team workspaces</li>
                  <li>Shared tracks + goals</li>
                  <li>Admin & usage controls</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#cta">Contact sales</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary/15 via-accent/10 to-secondary/25" />
            <CardContent className="relative px-6 py-12 sm:px-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Build your streak. Ship better solutions.
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted-foreground">
                    Launch your AI-powered coding platform with a premium UI and a modern data stack.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="#">Start now</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a href="#features">See what you get</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Responsive UI</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Looks sharp on mobile and desktop.
                  </div>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Theme tokens</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Uses your `globals.css` palette.
                  </div>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">Shadcn components</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Composable, production-friendly building blocks.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-10 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg border bg-card shadow-sm">
              <Code2 className="size-4 text-primary" />
            </span>
            <span>NextCode Platform</span>
          </div>
          <div className="text-right">
            <span>© {new Date().getFullYear()} NextCode</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
