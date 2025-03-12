
import React, { useState, useEffect } from 'react';
import { useSupabase } from '@/hooks/useSupabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Tipo para nosso exemplo
interface Message {
  id: number;
  created_at: string;
  content: string;
  email: string;
}

const DatabaseExample = () => {
  const { fetchData, insertData, deleteData } = useSupabase();
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('ualfinhe@gmail.com');
  const [loading, setLoading] = useState(false);

  // Buscar mensagens ao carregar a página
  const loadMessages = async () => {
    setLoading(true);
    const data = await fetchData<Message>('messages');
    setMessages(data);
    setLoading(false);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  // Enviar uma nova mensagem
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !email.trim()) return;

    setLoading(true);
    await insertData<Message>('messages', { content, email });
    setContent('');
    // Não resetamos o email para manter o email preferido
    await loadMessages();
    setLoading(false);
  };

  // Deletar uma mensagem
  const handleDelete = async (id: number) => {
    setLoading(true);
    await deleteData('messages', id);
    await loadMessages();
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Comunicação com Banco de Dados</CardTitle>
          <CardDescription>
            Exemplo de comunicação com o Supabase
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Sua mensagem"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Mensagens Salvas:</h3>
            {loading ? (
              <p className="text-center text-muted-foreground">Carregando...</p>
            ) : messages.length === 0 ? (
              <p className="text-center text-muted-foreground">Nenhuma mensagem encontrada</p>
            ) : (
              <ul className="space-y-2">
                {messages.map((message) => (
                  <li key={message.id} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <div>
                      <p className="text-sm font-medium">{message.email}</p>
                      <p>{message.content}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(message.id)}
                    >
                      Excluir
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={loadMessages}>
            Atualizar Mensagens
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DatabaseExample;
