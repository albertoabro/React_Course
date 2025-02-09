import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import { AppRouter } from "./router/AppRouter"
import { LanguageProvider } from "./context/LanguageProvider"
import { store } from "./store/store"


export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <LanguageProvider>
          <AppRouter />
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  )
}
