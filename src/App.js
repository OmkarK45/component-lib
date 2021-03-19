import { Layout, Wrapper, Component } from "@components/"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import {
  AvatarWrapper,
  AlertsWrapper,
  BadgesWrapper,
  ButtonWrapper,
  CardsWrapper,
  ImagesWrapper,
  InputWrapper,
} from "./lib"
import ListsWrapper from "./lib/Lists/ListsWrapper"

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
            {/* Make these mapped and not hardcode */}
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
            <Route
              path="/images"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <ImagesWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/inputs"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <InputWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/lists"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <ListsWrapper />
                </Wrapper>
              )}
            />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}
