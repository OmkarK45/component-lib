import {
  AiOutlineLink,
  AiOutlineUnorderedList,
  AiOutlineStar,
} from "react-icons/ai"
import { BiCard, BiUserCircle, BiHeading } from "react-icons/bi"
import { BsCardText } from "react-icons/bs"
import { FiAlertTriangle } from "react-icons/fi"
import { IoImageOutline } from "react-icons/io5"
import { MdInput } from "react-icons/md"

import {
  RiNavigationLine,
  RiNotificationBadgeLine,
  RiLayoutGridLine,
} from "react-icons/ri"

export const links = [
  {
    to: "/get-started",
    name: "Get Started",
  },
  {
    to: "/avatars",
    name: "Avatars",
    Icon: BiUserCircle,
  },
  {
    to: "/alerts",
    name: "Alerts",
    Icon: FiAlertTriangle,
  },
  {
    to: "/badges",
    name: "Badges",
    Icon: RiNotificationBadgeLine,
  },
  {
    to: "/buttons",
    name: "Button",
    Icon: AiOutlineLink,
  },
  {
    to: "/cards",
    name: "Cards",
    Icon: BsCardText,
  },
  {
    to: "/images",
    name: "Images",
    Icon: IoImageOutline,
  },
  {
    to: "/inputs",
    name: "Inputs",
    Icon: MdInput,
  },
  {
    to: "/lists",
    name: "Lists",
    Icon: AiOutlineUnorderedList,
  },
  {
    to: "/navigation",
    name: "Navigation",
    Icon: RiNavigationLine,
  },
  {
    to: "/modal",
    name: "Modal",
    Icon: BiCard,
  },
  {
    to: "/rating",
    name: "Ratings",
    Icon: AiOutlineStar,
  },
  {
    to: "/simple-grid",
    name: "Simple Grid",
    Icon: RiLayoutGridLine,
  },
  {
    to: "/typography",
    name: "Typography",
    Icon: BiHeading,
  },
]
