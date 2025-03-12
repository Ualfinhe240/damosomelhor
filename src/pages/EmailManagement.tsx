
import React, { useEffect, useState } from 'react';
import { useSupabase } from '@/hooks/useSupabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

interface EmailRecord {
  id: number;
  email: string;
  name: string | null;
  subscribed: boolean;
  created_at: string;
  last_updated: string | null;
  source: string | null;
}

const EmailManagement = () => {
  const { fetchData, updateEmailSubscription, saveEmail } = useSupabase();
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [newEmail, setNewEmail] = useState('ualfinhe@gmail.com');
  const [newName, setNewName] = useState('');

  // Carregar emails do banco
  const loadEmails = async () => {
    setLoading(true);
    try {
      const data = await fetchData<EmailRecord>('emails', {
        columns: 'id, email, name, subscribed, created_at, last_updated, source',
      });
      setEmails(data);
    } catch (error) {
      console.error('Erro ao carregar emails:', error);
      toast.error('Falha ao carregar emails do banco de dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmails();
  }, []);

  // Adicionar novo email
  const handleAddEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEmail || !newEmail.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return;
    }
    
    setLoading(true);
    
    try {
      await saveEmail(newEmail, { name: newName || undefined });
      // Não resetamos o email para manter o email preferido
      setNewName('');
      loadEmails();
    } catch (error) {
      console.error('Erro ao adicionar email:', error);
      toast.error('Ocorreu um erro ao adicionar o email');
    } finally {
      setLoading(false);
    }
  };

  // Atualizar status de inscrição
  const handleToggleSubscription = async (email: string, currentStatus: boolean) => {
    setLoading(true);
    
    try {
      await updateEmailSubscription(email, !currentStatus);
      loadEmails();
    } catch (error) {
      console.error('Erro ao atualizar inscrição:', error);
      toast.error('Falha ao atualizar status de inscrição');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-background px-4 py-12">
      <Card className="w-full max-w-4xl mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Gerenciamento de Emails</CardTitle>
          <CardDescription>
            Adicione, visualize e gerencie os emails cadastrados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleAddEmail} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Input
              type="text"
              placeholder="Nome (opcional)"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Adicionando...' : 'Adicionar'}
            </Button>
          </form>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Emails Cadastrados:</h3>
            {loading && emails.length === 0 ? (
              <p className="text-center text-muted-foreground">Carregando...</p>
            ) : emails.length === 0 ? (
              <p className="text-center text-muted-foreground">Nenhum email cadastrado</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-2">Email</th>
                      <th className="text-left p-2">Nome</th>
                      <th className="text-left p-2">Fonte</th>
                      <th className="text-left p-2">Criado em</th>
                      <th className="text-center p-2">Inscrito</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emails.map((record) => (
                      <tr key={record.id} className="border-b border-border">
                        <td className="p-2">{record.email}</td>
                        <td className="p-2">{record.name || '-'}</td>
                        <td className="p-2">{record.source || 'website'}</td>
                        <td className="p-2">{formatDate(record.created_at)}</td>
                        <td className="p-2 text-center">
                          <Switch
                            checked={record.subscribed}
                            onCheckedChange={() => 
                              handleToggleSubscription(record.email, record.subscribed)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={loadEmails} disabled={loading}>
              {loading ? 'Atualizando...' : 'Atualizar Lista'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailManagement;
