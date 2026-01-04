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
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {

  const handleGoogleLogin = async () => {
    return await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      newUserCallbackURL: "/onboarding",
    });
  };

  const handleGithubLogin = async () => {
    return await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      newUserCallbackURL: "/onboarding",
    });
  };


  return (
    <div className="h-dvh overflow-hidden bg-background px-4">
      <div className="mx-auto flex h-full w-full max-w-md items-center">
        <Card className="w-full max-h-[calc(100dvh-2rem)] overflow-hidden">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl tracking-tight">Welcome back</CardTitle>
            <CardDescription>Sign in to continue.</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 overflow-auto">
            <div className="grid gap-3">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleLogin}
              >
                Continue with Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGithubLogin}
              >
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
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              <Button type="button" className="w-full">
                Sign in
              </Button>

              <Button type="button" variant="link" className="h-auto p-0 text-xs">
                Forgot password?
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary underline-offset-4 hover:underline"
              >
                Create one
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
