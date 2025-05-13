
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { SocialAuth } from "./SocialAuth";

export function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-white/5">
        <TabsTrigger value="login" className="text-[#D6BCFA] data-[state=active]:bg-white/10">
          Вход
        </TabsTrigger>
        <TabsTrigger value="register" className="text-[#D6BCFA] data-[state=active]:bg-white/10">
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
