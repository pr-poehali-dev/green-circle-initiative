import React from "react"
import { ToolExecutionBlock } from "./ToolExecutionBlock"
import { BuildStatusBlock } from "./BuildStatusBlock"

export function StatusBlocksDemo() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Tool Execution Blocks</h2>
        <div className="space-y-3">
          <ToolExecutionBlock
            tool="bash"
            toolName="Running npm install"
            description="Installing project dependencies"
            status="running"
          />
          
          <ToolExecutionBlock
            tool="file"
            toolName="Reading configuration"
            description="Reading package.json"
            status="completed"
          />
          
          <ToolExecutionBlock
            tool="search"
            toolName="Searching for imports"
            description="Finding all TypeScript imports"
            status="completed"
          />
          
          <ToolExecutionBlock
            tool="git"
            toolName="Git commit failed"
            description="Pre-commit hooks failed"
            status="failed"
          />
          
          <ToolExecutionBlock
            tool="web"
            toolName="Fetching API data"
            description="Waiting for response..."
            status="pending"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Build Status Blocks</h2>
        <div className="space-y-3">
          <BuildStatusBlock
            buildType="build"
            title="Building application"
            description="Compiling TypeScript files"
            status="running"
            progress={65}
          />
          
          <BuildStatusBlock
            buildType="test"
            title="Running tests"
            description="All tests passed (42 tests)"
            status="success"
          />
          
          <BuildStatusBlock
            buildType="deploy"
            title="Deployment failed"
            description="Failed to connect to server"
            status="failed"
          />
          
          <BuildStatusBlock
            buildType="package"
            title="Creating bundle"
            description="Optimizing for production"
            status="running"
            progress={30}
          />
          
          <BuildStatusBlock
            buildType="security"
            title="Security scan"
            description="Found 2 vulnerabilities"
            status="warning"
          />
          
          <BuildStatusBlock
            buildType="compile"
            title="Compilation queued"
            description="Waiting for resources"
            status="queued"
          />
        </div>
      </div>
    </div>
  )
}