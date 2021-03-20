import { GetStarted } from "@pages"
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

export const Routes = [
  {
    path: "/get-started",
    component: GetStarted,
  },
  {
    path: "/avatars",
    component: AvatarWrapper,
  },
  {
    path: "/alerts",
    component: AlertsWrapper,
  },
  {
    path: "/badges",
    component: BadgesWrapper,
  },
  {
    path: "/buttons",
    component: ButtonWrapper,
  },
  {
    path: "/cards",
    component: CardsWrapper,
  },
  {
    path: "/images",
    component: ImagesWrapper,
  },
  {
    path: "/inputs",
    component: InputWrapper,
  },
  {
    path: "/lists",
    component: ListsWrapper,
  },
  {
    path: "/navigation",
    component: NavigationWrapper,
  },
  {
    path: "/modal",
    component: ModalWrapper,
  },
  {
    path: "/rating",
    component: RatingsWrapper,
  },
  {
    path: "/simple-grid",
    component: GridWrapper,
  },
  {
    path: "/typography",
    component: TypographyWrapper,
  },
]
