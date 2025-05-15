import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { SocialAuth } from "./SocialAuth";

export function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-red-800/50">
        <TabsTrigger
          value="login"
          className="text-red-300 data-[state=active]:bg-red-700/60"
        >
          Вход
        </TabsTrigger>
        <TabsTrigger
          value="register"
          className="text-red-300 data-[state=active]:bg-red-700/60"
        >
          Регистрация
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login" className="space-y-4 mt-6">
        <LoginForm />
        <SocialAuth />
      </TabsContent>

      <TabsContent value="register" className="space-y-4">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}
