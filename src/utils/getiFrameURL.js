import { snippets } from "./../lib/snippets.db"

export default function getURL(component) {
  return snippets[component].url
}
