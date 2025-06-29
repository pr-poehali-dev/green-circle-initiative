import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const TokenCalculator = () => {
  const [inputTokens, setInputTokens] = useState<string>("");
  const [outputTokens, setOutputTokens] = useState<string>("");
  const [cachingWriteTokens, setCachingWriteTokens] = useState<string>("");
  const [cachingReadTokens, setCachingReadTokens] = useState<string>("");
  const [cacheReadIterations, setCacheReadIterations] = useState<string>("1");

  const rates = {
    input: 3,
    output: 15,
    cachingWrite: 3.75,
    cachingRead: 0.3,
  };

  const calculate = (tokens: string, rate: number) => {
    const tokenCount = parseFloat(tokens) || 0;
    return ((tokenCount * rate) / 1000000).toFixed(4);
  };

  const calculateCacheRead = () => {
    const tokens = parseFloat(cachingReadTokens) || 0;
    const iterations = parseFloat(cacheReadIterations) || 1;
    return ((tokens * iterations * rates.cachingRead) / 1000000).toFixed(4);
  };

  const totalCost = () => {
    const inputCost = parseFloat(calculate(inputTokens, rates.input));
    const outputCost = parseFloat(calculate(outputTokens, rates.output));
    const cachingWriteCost = parseFloat(
      calculate(cachingWriteTokens, rates.cachingWrite),
    );
    const cachingReadCost = parseFloat(calculateCacheRead());

    return (
      inputCost +
      outputCost +
      cachingWriteCost +
      cachingReadCost
    ).toFixed(4);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Icon name="Calculator" size={24} />
              Claude Sonnet 4 Token Calculator
            </CardTitle>
            <CardDescription>
              Рассчитайте стоимость использования Claude Sonnet 4
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="input-tokens">
                  Input Tokens
                  <Badge variant="secondary" className="ml-2">
                    $3/MTok
                  </Badge>
                </Label>
                <Input
                  id="input-tokens"
                  type="number"
                  placeholder="0"
                  value={inputTokens}
                  onChange={(e) => setInputTokens(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  ${calculate(inputTokens, rates.input)}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="output-tokens">
                  Output Tokens
                  <Badge variant="secondary" className="ml-2">
                    $15/MTok
                  </Badge>
                </Label>
                <Input
                  id="output-tokens"
                  type="number"
                  placeholder="0"
                  value={outputTokens}
                  onChange={(e) => setOutputTokens(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  ${calculate(outputTokens, rates.output)}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="caching-write-tokens">
                  Prompt Caching Write
                  <Badge variant="secondary" className="ml-2">
                    $3.75/MTok
                  </Badge>
                </Label>
                <Input
                  id="caching-write-tokens"
                  type="number"
                  placeholder="0"
                  value={cachingWriteTokens}
                  onChange={(e) => setCachingWriteTokens(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  ${calculate(cachingWriteTokens, rates.cachingWrite)}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="caching-read-tokens">
                  Prompt Caching Read
                  <Badge variant="secondary" className="ml-2">
                    $0.30/MTok
                  </Badge>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="caching-read-tokens"
                    type="number"
                    placeholder="0"
                    value={cachingReadTokens}
                    onChange={(e) => setCachingReadTokens(e.target.value)}
                  />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                    ×
                  </div>
                  <Input
                    type="number"
                    placeholder="1"
                    value={cacheReadIterations}
                    onChange={(e) => setCacheReadIterations(e.target.value)}
                    className="w-20"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  ${calculateCacheRead()}
                </p>
              </div>
            </div>

            <Separator />

            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Общая стоимость</h3>
              <div className="text-3xl font-bold text-green-600 my-3">
                ${totalCost()}
              </div>
              <p className="text-sm text-muted-foreground">
                200K context window • 50% скидка при batch processing
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Info" size={16} />
                Справка
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Входящие токены: токены в вашем запросе</li>
                <li>• Исходящие токены: токены в ответе Claude</li>
                <li>• Запись в кэш: запись в кэш промпта</li>
                <li>• Чтение из кэша: чтение из кэша промпта × итерации</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenCalculator;
