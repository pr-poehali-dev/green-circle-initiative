
import { Skeleton } from "@/components/ui/skeleton";

interface LoaderProps {
  count?: number;
  height?: number;
}

export function Loader({ count = 3, height = 50 }: LoaderProps) {
  return (
    <div className="space-y-3 w-full">
      {Array(count).fill(0).map((_, i) => (
        <Skeleton key={i} className="w-full rounded-md" style={{ height }} />
      ))}
    </div>
  );
}
