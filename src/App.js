import { Layout } from "@components/"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cards from "./lib/Cards"

export default function App() {
  return (
    <div className="bg-primary-100 dark:bg-primary-900 transition-all">
      <Router>
        <Switch>
          <Route path="/" exact />
          <Route
            path="/cards"
            exact
            render={(routeProps) => (
              <Layout>
                <Cards />
              </Layout>
            )}
          />
        </Switch>
        <Layout />
      </Router>
    </div>
  )
}
