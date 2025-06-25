import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { 
  Terminal, 
  FileText, 
  Search, 
  Globe, 
  FolderOpen,
  Code,
  GitBranch,
  Package,
  Database,
  Settings,
  Loader2,
  Check,
  X,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

const toolExecutionVariants = cva(
  "relative w-full rounded-lg border p-4 flex items-center justify-between",
  {
    variants: {
      status: {
        pending: "bg-muted/50 border-muted-foreground/20",
        running: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800",
        completed: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800",
        failed: "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800",
        warning: "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800",
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
)

const toolIcons: Record<string, React.ComponentType<any>> = {
  terminal: Terminal,
  bash: Terminal,
  file: FileText,
  read: FileText,
  write: FileText,
  search: Search,
  grep: Search,
  glob: Search,
  web: Globe,
  folder: FolderOpen,
  ls: FolderOpen,
  code: Code,
  edit: Code,
  git: GitBranch,
  package: Package,
  npm: Package,
  database: Database,
  settings: Settings,
  default: Terminal,
}

const statusIcons = {
  pending: null,
  running: Loader2,
  completed: Check,
  failed: X,
  warning: AlertCircle,
}

export interface ToolExecutionBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolExecutionVariants> {
  tool?: string
  toolName?: string
  description?: string
}

const ToolExecutionBlock = React.forwardRef<
  HTMLDivElement,
  ToolExecutionBlockProps
>(({ className, status = "pending", tool = "default", toolName, description, children, ...props }, ref) => {
  const ToolIcon = toolIcons[tool.toLowerCase()] || toolIcons.default
  const StatusIcon = statusIcons[status as keyof typeof statusIcons]
  
  return (
    <div
      ref={ref}
      className={cn(toolExecutionVariants({ status }), className)}
      {...props}
    >
      <div className="flex items-center gap-3 flex-1">
        <ToolIcon className="h-5 w-5 text-muted-foreground shrink-0" />
        <div className="flex-1 min-w-0">
          {toolName && (
            <div className="font-medium text-sm">{toolName}</div>
          )}
          {description && (
            <div className="text-sm text-muted-foreground truncate">{description}</div>
          )}
          {children}
        </div>
      </div>
      {StatusIcon && (
        <div className="ml-3 shrink-0">
          {status === "running" ? (
            <StatusIcon className="h-5 w-5 animate-spin text-blue-600 dark:text-blue-400" />
          ) : status === "completed" ? (
            <StatusIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
          ) : status === "failed" ? (
            <StatusIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
          ) : status === "warning" ? (
            <StatusIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          ) : null}
        </div>
      )}
    </div>
  )
})
ToolExecutionBlock.displayName = "ToolExecutionBlock"

export { ToolExecutionBlock, toolExecutionVariants }