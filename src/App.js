import { Layout } from "@components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="bg-primary-100 dark:bg-primary-900 transition-all">
      <Router>
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Layout />
      </Router>
    </div>
  )
}
