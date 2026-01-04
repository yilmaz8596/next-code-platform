"use client";

import Link from "next/link";

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

export default function RegisterPage() {
  return (
    <div className="h-dvh overflow-hidden bg-background px-4">
      <div className="mx-auto flex h-full w-full max-w-md items-center">
        <Card className="w-full max-h-[calc(100dvh-2rem)] overflow-hidden">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl tracking-tight">Create your account</CardTitle>
            <CardDescription>Start practicing with NextCode.</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 overflow-auto">
            <div className="grid gap-3">
              <Button type="button" variant="outline" className="w-full">
                Continue with Google
              </Button>
              <Button type="button" variant="outline" className="w-full">
                Continue with GitHub
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            <form className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your name" autoComplete="name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                />
              </div>

              <Button type="button" className="w-full">
                Create account
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline-offset-4 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
