import {
  AvatarWrapper,
  AlertsWrapper,
  BadgesWrapper,
  ButtonWrapper,
  CardsWrapper,
  ImagesWrapper,
} from "./lib"
export const Routes = [
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
]
