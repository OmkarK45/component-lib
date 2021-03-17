import { Layout } from "@components/"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Wrapper from "./components/Layout/Wrapper"
import Component from "./components/Component/Component"
import {
  AvatarWrapper,
  AlertsWrapper,
  BadgesWrapper,
  ButtonWrapper,
  CardsWrapper,
} from "./lib"

export default function App() {
  return (
    <div className=" dark:bg-primary-900 transition-all">
      <Router>
        <Switch>
          <Route
            path="/core/components/:component"
            exact
            component={Component}
          />
          <Layout>
            <Route path="/" exact />
            <Route
              path="/cards"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <CardsWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/buttons"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <ButtonWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/avatars"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <AvatarWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/alerts"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <AlertsWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/badges"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <BadgesWrapper />
                </Wrapper>
              )}
            />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}
