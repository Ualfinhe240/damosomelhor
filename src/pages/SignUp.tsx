
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    try {
      // This is a placeholder for the actual Google authentication
      // In a real implementation, you would connect to a backend service
      toast.success("Google sign-up functionality will be implemented with a backend");
      // Simulate successful registration
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error("Registration failed");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Sign up for WebWise to start learning
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2 py-6"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle className="h-5 w-5" />
            Sign up with Google
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
          {/* Placeholder for email/password registration form */}
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>Email/password registration will be implemented with a backend</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/signin" className="text-primary underline-offset-4 hover:underline">
              Sign in
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
