import { FluxPlaygroundPage } from "@/components/extensions/flux-polza/FluxPlaygroundPage";

const API_URL = "https://devfunctions.poehali.dev/658e642e-be01-439c-958a-980fa29eaf9d";

export default function FluxPlayground() {
  return (
    <FluxPlaygroundPage
      apiUrl={API_URL}
      defaultModel="flux-2-pro"
    />
  );
}
