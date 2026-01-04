"use client";

import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Profile</Badge>
              <Badge variant="outline">Settings</Badge>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your profile
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Update preferences and account details. (UI-only)
            </p>
          </div>

          <Button asChild className="w-full sm:w-auto">
            <Link href="/dashboard">
              Back to dashboard <ArrowRight className="size-4" />
            </Link>
          </Button>
        </header>

        <section className="mt-8 grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-4 text-primary" /> Account
              </CardTitle>
              <CardDescription>Basic information shown on your profile.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="headline">Headline</Label>
                <Input id="headline" placeholder="e.g. Interview prep · Full-stack" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 border-t sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button type="button" className="w-full sm:w-auto">
                Save changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Controls for your practice experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Preferences UI goes here (theme, difficulty, reminders).
              </p>
              <Separator />
              <div className="grid gap-2 sm:grid-cols-2">
                <Button type="button" variant="outline" className="w-full">
                  Change password
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  Manage plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
