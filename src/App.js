import { Layout, Wrapper, Component } from "@components/"
import { Home, GetStarted } from "@pages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import {
  AvatarWrapper,
  AlertsWrapper,
  BadgesWrapper,
  ButtonWrapper,
  CardsWrapper,
  ImagesWrapper,
  InputWrapper,
  ListsWrapper,
  NavigationWrapper,
  ModalWrapper,
  RatingsWrapper,
  GridWrapper,
  TypographyWrapper,
} from "./lib"

export default function App() {
  return (
    <div className="dark:bg-primary-900 transition-all">
      <Router>
        <Switch>
          <Route
            path="/core/components/:component"
            exact
            component={Component}
          />
          <Route path="/" exact component={Home} />
          <Layout>
            <Route path="/get-started" exact component={GetStarted} />

            {/* Make these mapped and not hardcoded */}
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
            <Route
              path="/navigation"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <NavigationWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/modal"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <ModalWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/rating"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <RatingsWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/simple-grid"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <GridWrapper />
                </Wrapper>
              )}
            />
            <Route
              path="/typography"
              exact
              render={(routeProps) => (
                <Wrapper>
                  <TypographyWrapper />
                </Wrapper>
              )}
            />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}
