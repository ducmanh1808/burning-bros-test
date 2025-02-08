import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { AppContent } from "./layout/AppContent"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header" style={{ display: "none" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Quotes />
      </header>
      <AppContent>acb</AppContent>
    </div>
  )
}

export default App
