import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { 
  Hammer,
  Package,
  TestTube,
  Rocket,
  Server,
  FileCode,
  Layers,
  Zap,
  Shield,
  Loader2,
  Check,
  X,
  AlertCircle,
  Clock
} from "lucide-react"
import { cn } from "@/lib/utils"

const buildStatusVariants = cva(
  "relative w-full rounded-lg border p-4 flex items-center justify-between",
  {
    variants: {
      status: {
        idle: "bg-muted/50 border-muted-foreground/20",
        queued: "bg-slate-50 border-slate-200 dark:bg-slate-950/20 dark:border-slate-800",
        running: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800",
        success: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800",
        failed: "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800",
        warning: "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800",
        cancelled: "bg-gray-50 border-gray-200 dark:bg-gray-950/20 dark:border-gray-800",
      },
    },
    defaultVariants: {
      status: "idle",
    },
  }
)

const buildTypeIcons: Record<string, React.ComponentType<any>> = {
  build: Hammer,
  compile: FileCode,
  package: Package,
  test: TestTube,
  deploy: Rocket,
  server: Server,
  bundle: Layers,
  optimize: Zap,
  security: Shield,
  default: Hammer,
}

const statusIcons = {
  idle: null,
  queued: Clock,
  running: Loader2,
  success: Check,
  failed: X,
  warning: AlertCircle,
  cancelled: X,
}

export interface BuildStatusBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buildStatusVariants> {
  buildType?: string
  title?: string
  description?: string
  progress?: number
}

const BuildStatusBlock = React.forwardRef<
  HTMLDivElement,
  BuildStatusBlockProps
>(({ className, status = "idle", buildType = "default", title, description, progress, children, ...props }, ref) => {
  const BuildIcon = buildTypeIcons[buildType.toLowerCase()] || buildTypeIcons.default
  const StatusIcon = statusIcons[status as keyof typeof statusIcons]
  
  return (
    <div
      ref={ref}
      className={cn(buildStatusVariants({ status }), className)}
      {...props}
    >
      <div className="flex items-center gap-3 flex-1">
        <BuildIcon className="h-5 w-5 text-muted-foreground shrink-0" />
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-medium text-sm">{title}</div>
          )}
          {description && (
            <div className="text-sm text-muted-foreground truncate">{description}</div>
          )}
          {progress !== undefined && status === "running" && (
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div 
                className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          {children}
        </div>
      </div>
      {StatusIcon && (
        <div className="ml-3 shrink-0">
          {status === "running" ? (
            <StatusIcon className="h-5 w-5 animate-spin text-blue-600 dark:text-blue-400" />
          ) : status === "queued" ? (
            <StatusIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          ) : status === "success" ? (
            <StatusIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
          ) : status === "failed" ? (
            <StatusIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
          ) : status === "warning" ? (
            <StatusIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          ) : status === "cancelled" ? (
            <StatusIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          ) : null}
        </div>
      )}
    </div>
  )
})
BuildStatusBlock.displayName = "BuildStatusBlock"

export { BuildStatusBlock, buildStatusVariants }