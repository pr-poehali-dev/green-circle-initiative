import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Database, Table, AlertCircle } from 'lucide-react';

const DatabaseViewer: React.FC = () => {
  const [query, setQuery] = useState('SELECT * FROM project_489d77e8.users');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const executeQuery = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('https://functions.yandexcloud.net/d4ecoiiufjjig7un1s4j', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setResult(data);
      } else {
        setError(data.error || 'Произошла ошибка при выполнении запроса');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  const formatValue = (value: any): string => {
    if (value === null) return 'NULL';
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            SQL Database Viewer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">SQL запрос:</label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-32 p-3 border rounded-md font-mono text-sm"
                placeholder="Введите SQL запрос..."
              />
            </div>
            <Button 
              onClick={executeQuery} 
              disabled={loading || !query.trim()}
              className="w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Выполнение...
                </>
              ) : (
                'Выполнить запрос'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && result.data && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Table className="h-5 w-5" />
              Результат ({result.row_count} записей)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-gray-50">
                    {result.columns.map((col: string) => (
                      <th key={col} className="text-left p-3 font-medium text-sm">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.data.map((row: any, idx: number) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      {result.columns.map((col: string) => (
                        <td key={col} className="p-3 text-sm">
                          <pre className="whitespace-pre-wrap">{formatValue(row[col])}</pre>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {result.column_info && (
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                  Информация о колонках
                </summary>
                <div className="mt-2 overflow-x-auto">
                  <table className="text-sm border-collapse">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left p-2">Название</th>
                        <th className="text-left p-2">Тип</th>
                        <th className="text-left p-2">Null OK</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.column_info.map((col: any) => (
                        <tr key={col.name} className="border-b">
                          <td className="p-2">{col.name}</td>
                          <td className="p-2">{col.type_code}</td>
                          <td className="p-2">{col.null_ok ? 'Да' : 'Нет'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DatabaseViewer;