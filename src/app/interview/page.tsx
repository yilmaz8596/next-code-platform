"use client";

import Link from "next/link";
import { ArrowLeft, Brain, Headphones, Mic, MicOff, Send, Timer } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function InterviewPage() {
  return (
    <div className="h-dvh overflow-hidden bg-background">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Interview</Badge>
              <Badge variant="outline" className="gap-1">
                <Timer className="size-3.5" /> 45 min
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Brain className="size-3.5" /> AI coach
              </Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Mock interview (AI)
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              UI-only interview room with an AI panel.
            </p>
          </div>

          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/dashboard">
              <ArrowLeft className="size-4" /> Back
            </Link>
          </Button>
        </header>

        <div className="mt-6 grid flex-1 gap-4 overflow-hidden lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="h-full overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>Prompt</CardTitle>
              <CardDescription>
                Explain your approach, write code, and talk through tradeoffs.
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4 overflow-auto">
              <div className="rounded-xl border bg-background/60 p-4">
                <div className="text-sm font-medium">Problem</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Implement a function that finds the first unique character in a string.
                </p>
              </div>

              <div className="grid gap-2">
                <div className="text-sm font-medium">Your notes / code</div>
                <Textarea
                  placeholder="Write your solution outline or code here..."
                  className="min-h-44"
                />
              </div>
            </CardContent>

            <CardFooter className="border-t">
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <Button type="button" className="w-full sm:w-auto">
                  Start timer
                </Button>
                <Button type="button" variant="outline" className="w-full sm:w-auto">
                  Submit answer
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="h-full overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Brain className="size-4 text-primary" /> AI interviewer
              </CardTitle>
              <CardDescription>
                Ask for hints, feedback, or edge cases. (No logic)
              </CardDescription>
            </CardHeader>

            <CardContent className="flex h-full flex-col gap-4 overflow-hidden">
              <Tabs defaultValue="chat" className="flex min-h-0 flex-1 flex-col gap-4">
                <TabsList className="w-full">
                  <TabsTrigger value="chat" className="flex-1">
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="voice" className="flex-1">
                    Voice agent
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="chat"
                  className="min-h-0 flex-1 data-[state=active]:flex data-[state=active]:flex-col data-[state=active]:gap-4"
                >
                  <ScrollArea className="min-h-0 flex-1 rounded-xl border bg-background/60">
                    <div className="space-y-3 p-4">
                      <div className="rounded-lg border bg-card p-3">
                        <div className="text-xs text-muted-foreground">AI</div>
                        <p className="mt-1 text-sm">
                          Start by describing your approach. What&apos;s the time complexity?
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <div className="text-xs text-muted-foreground">You</div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          I&apos;ll count frequencies and then scan for the first count of 1.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-3">
                        <div className="text-xs text-muted-foreground">AI</div>
                        <p className="mt-1 text-sm">
                          Great. What edge cases should you consider?
                        </p>
                      </div>
                    </div>
                  </ScrollArea>

                  <Separator />

                  <div className="grid gap-2">
                    <Input placeholder="Ask the AI..." />
                    <div className="grid grid-cols-2 gap-2">
                      <Button type="button" variant="outline" className="w-full">
                        <Mic className="size-4" /> Voice
                      </Button>
                      <Button type="button" className="w-full">
                        <Send className="size-4" /> Send
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="voice"
                  className="min-h-0 flex-1 data-[state=active]:flex data-[state=active]:flex-col data-[state=active]:gap-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Headphones className="size-3.5" /> AI voice agent
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <MicOff className="size-3.5" /> No audio logic
                    </Badge>
                  </div>

                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Microphone device</div>
                    <Input placeholder="Default microphone" />
                  </div>

                  <ScrollArea className="min-h-0 flex-1 rounded-xl border bg-background/60">
                    <div className="space-y-3 p-4">
                      <div className="rounded-lg border bg-card p-3">
                        <div className="text-xs text-muted-foreground">Agent</div>
                        <p className="mt-1 text-sm">
                          Tell me your approach out loud. I’ll interrupt with clarifying questions.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <div className="text-xs text-muted-foreground">Transcript</div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          “I’ll build a frequency map and then scan the string again…”
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-3">
                        <div className="text-xs text-muted-foreground">Agent</div>
                        <p className="mt-1 text-sm">
                          What’s the complexity and how would you optimize space?
                        </p>
                      </div>
                    </div>
                  </ScrollArea>

                  <Separator />

                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Button type="button" variant="outline" className="w-full">
                        Mute
                      </Button>
                      <Button type="button" className="w-full">
                        Start voice session
                      </Button>
                    </div>
                    <Button type="button" variant="outline" className="w-full">
                      End session
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
