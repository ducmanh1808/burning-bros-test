import type { PropsWithChildren } from "react"

export const AppContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex items-center justify-center p-12">{children}</div>
}
