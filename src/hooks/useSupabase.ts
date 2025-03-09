
import { useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export function useSupabase() {
  // Função para buscar dados de uma tabela
  const fetchData = useCallback(async <T>(
    tableName: string,
    options?: {
      columns?: string;
      filter?: { column: string; value: any };
      limit?: number;
    }
  ): Promise<T[]> => {
    try {
      let query = supabase
        .from(tableName)
        .select(options?.columns || '*');

      if (options?.filter) {
        query = query.eq(options.filter.column, options.filter.value);
      }

      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Erro ao buscar dados:', error);
        toast.error(`Erro ao buscar dados: ${error.message}`);
        return [];
      }

      return data as T[];
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      toast.error('Erro ao buscar dados do banco de dados');
      return [];
    }
  }, []);

  // Função para inserir dados em uma tabela
  const insertData = useCallback(async <T>(
    tableName: string,
    data: Partial<T>
  ): Promise<T | null> => {
    try {
      const { data: insertedData, error } = await supabase
        .from(tableName)
        .insert(data)
        .select()
        .single();

      if (error) {
        console.error('Erro ao inserir dados:', error);
        toast.error(`Erro ao inserir dados: ${error.message}`);
        return null;
      }

      toast.success('Dados inseridos com sucesso!');
      return insertedData as T;
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      toast.error('Erro ao inserir dados no banco de dados');
      return null;
    }
  }, []);

  // Função para atualizar dados em uma tabela
  const updateData = useCallback(async <T>(
    tableName: string,
    id: string | number,
    data: Partial<T>
  ): Promise<T | null> => {
    try {
      const { data: updatedData, error } = await supabase
        .from(tableName)
        .update(data)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Erro ao atualizar dados:', error);
        toast.error(`Erro ao atualizar dados: ${error.message}`);
        return null;
      }

      toast.success('Dados atualizados com sucesso!');
      return updatedData as T;
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      toast.error('Erro ao atualizar dados no banco de dados');
      return null;
    }
  }, []);

  // Função para deletar dados em uma tabela
  const deleteData = useCallback(async (
    tableName: string,
    id: string | number
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Erro ao deletar dados:', error);
        toast.error(`Erro ao deletar dados: ${error.message}`);
        return false;
      }

      toast.success('Dados deletados com sucesso!');
      return true;
    } catch (error) {
      console.error('Erro ao deletar dados:', error);
      toast.error('Erro ao deletar dados do banco de dados');
      return false;
    }
  }, []);

  return {
    fetchData,
    insertData,
    updateData,
    deleteData,
    supabase,
  };
}
