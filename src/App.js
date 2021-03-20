import { Layout, Component } from "@components/"
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
              render={(routeProps) => <CardsWrapper />}
            />
            <Route
              path="/buttons"
              exact
              render={(routeProps) => <ButtonWrapper />}
            />
            <Route
              path="/avatars"
              exact
              render={(routeProps) => <AvatarWrapper />}
            />
            <Route
              path="/alerts"
              exact
              render={(routeProps) => <AlertsWrapper />}
            />
            <Route
              path="/badges"
              exact
              render={(routeProps) => <BadgesWrapper />}
            />
            <Route
              path="/images"
              exact
              render={(routeProps) => <ImagesWrapper />}
            />
            <Route
              path="/inputs"
              exact
              render={(routeProps) => <InputWrapper />}
            />
            <Route
              path="/lists"
              exact
              render={(routeProps) => <ListsWrapper />}
            />
            <Route
              path="/navigation"
              exact
              render={(routeProps) => <NavigationWrapper />}
            />
            <Route
              path="/modal"
              exact
              render={(routeProps) => <ModalWrapper />}
            />
            <Route
              path="/rating"
              exact
              render={(routeProps) => <RatingsWrapper />}
            />
            <Route
              path="/simple-grid"
              exact
              render={(routeProps) => <GridWrapper />}
            />
            <Route
              path="/typography"
              exact
              render={(routeProps) => <TypographyWrapper />}
            />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}
