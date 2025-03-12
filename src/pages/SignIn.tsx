
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
      // Este é um placeholder para a autenticação Google real
      // Em uma implementação real, você se conectaria a um serviço backend
      toast.success("A funcionalidade de login com Google será implementada com um backend");
      // Simular login bem-sucedido
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error("Falha na autenticação");
      console.error("Erro de autenticação:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Bem-vindo de volta</CardTitle>
          <CardDescription>
            Faça login na sua conta WebWise
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2 py-6"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="h-5 w-5" />
            Entrar com Google
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
          {/* Placeholder para formulário de login com email/senha */}
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>Login com email/senha será implementado com um backend</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <a href="/signup" className="text-primary underline-offset-4 hover:underline">
              Cadastre-se
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
