import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"


export const JournalApp = () => {
  return (

    <AppTheme>
    <AppRouter />
    </AppTheme>

  )
}