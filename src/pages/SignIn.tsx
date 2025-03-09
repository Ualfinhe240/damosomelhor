
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // This is a placeholder for the actual Google authentication
      // In a real implementation, you would connect to a backend service
      toast.success("Google sign-in functionality will be implemented with a backend");
      // Simulate successful login
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error("Authentication failed");
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Sign in to your WebWise account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2 py-6"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {/* Placeholder for email/password login form */}
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>Email/password login will be implemented with a backend</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary underline-offset-4 hover:underline">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
