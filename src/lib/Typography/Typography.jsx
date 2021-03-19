import "./Typography.scss"
export function Headings() {
  return (
    <div>
      <h1 className="heading-xl">Heading 1</h1>
      <h2 className="heading-lg">Heading 2</h2>
      <h3 className="heading-md">Heading 3</h3>
      <h4 className="heading-sm">Heading 4</h4>
      <h5 className="heading-xs">Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  )
}

export default function BlogParagraph() {
  return (
    <div>
      <p className="blog">
        Have you ever tried to read Wikipedia on a very large screen? It looks
        like this. Those paragraphs are so wide! Wikipedia doesn't constrain the
        container width at all. This leads to lines that are hundreds of
        characters in length. It's hard for our eyes to wrap around when we
        reach the end of a line. If you're like me, you wind up using your mouse
        to assist. In addition to the line-wrapping concern, it's just generally
        hard to read lines of text that are so wide; it fatigues the eye.
        Research has shown that the ideal line length is about 65 characters.
        Anywhere between 45 and 85 is generally seen as acceptable, in the
        context of a roman alphabet. Reading is a complex process, and we should
        strive to make it as easy as possible. The standard solution to this
        problem is to create a single fixed-width column in the center of the
        page. You've seen this layout everywhere: online magazines,
        documentation, news sites, and blogs. You're looking at it right now, on
        this site! - Excerpt from Josh Comeau's blog. &copy; Josh Comeau Ref{" "}
        <a href="https://www.joshwcomeau.com/css/full-bleed/">Learn More</a>
      </p>
    </div>
  )
}
