
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { supabase } from '@/lib/supabase';

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      });

      if (error) {
        toast.error("Falha no cadastro com Google");
        console.error("Erro de cadastro:", error);
      }
    } catch (error) {
      toast.error("Falha no cadastro");
      console.error("Erro de cadastro:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Crie uma conta</CardTitle>
          <CardDescription>
            Cadastre-se no WebWise para começar a aprender
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2 py-6"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle className="h-5 w-5" />
            Cadastrar com Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          {/* Placeholder para formulário de cadastro com email/senha */}
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>Cadastro com email/senha será implementado com um backend</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <a href="/signin" className="text-primary underline-offset-4 hover:underline">
              Entrar
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
