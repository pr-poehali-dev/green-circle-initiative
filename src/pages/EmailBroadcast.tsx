import { EmailBroadcastForm } from "@/components/EmailBroadcastForm";

const EmailBroadcast = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <EmailBroadcastForm apiUrl="https://devfunctions.poehali.dev/016fc154-c7e9-4deb-b174-a94dd098fdf0" />
    </div>
  );
};

export default EmailBroadcast;
