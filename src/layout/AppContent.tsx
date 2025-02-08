import { PropsWithChildren } from "react"
import styles from "./AppContent.module.css"

export const AppContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.appContent}>{children}</div>
}
