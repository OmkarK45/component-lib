import { Layout } from "@components/"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cards from "./lib/Cards"
import Wrapper from "./components/Layout/Wrapper"

export default function App() {
  return (
    <div className=" dark:bg-primary-900 transition-all">
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact />
            <Route
              path="/cards"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <Cards />
                </Wrapper>
              )}
            />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}
