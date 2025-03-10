
import React, { useState } from 'react';
import { useSupabase } from '@/hooks/useSupabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { saveEmail } = useSupabase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return;
    }
    
    setLoading(true);
    
    try {
      await saveEmail(email, { source: 'newsletter' });
      setEmail('');
    } catch (error) {
      console.error('Erro ao salvar email:', error);
      toast.error('Ocorreu um erro ao salvar seu email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
      <Input
        type="email"
        placeholder="Seu melhor email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Inscrever'}
      </Button>
    </form>
  );
};

export default EmailSubscribe;
