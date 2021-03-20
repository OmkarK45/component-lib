import { Layout } from "@components/"
import { Home } from "@pages"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Routes } from "./Routes"

export default function App() {
  return (
    <div className="dark:bg-primary-900 transition-all">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            {Routes.map((route) => {
              return (
                <Route path={route.path} exact component={route.component} />
              )
            })}
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}
