// A framed illustration "plate". The source artwork is colourful; the CSS in
// styles.css gently desaturates it and lets a warm ink fade melt its edges into
// the page, so it reads as part of the dawn palette rather than against it.
//
// `square` constrains width for the near-square pieces; `caption` renders a
// quiet label beneath the frame in the site's eyebrow voice.
export function Plate({
  src,
  alt,
  width,
  height,
  caption,
  square = false,
  eager = false,
  delay,
}: {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  square?: boolean
  eager?: boolean
  delay?: string
}) {
  return (
    <figure
      className={`plate-fig${square ? ' is-square' : ''}`}
      data-reveal
      style={delay ? { '--reveal-delay': delay } : undefined}
    >
      <span className="plate">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </span>
      {caption ? <figcaption className="plate-caption">{caption}</figcaption> : null}
    </figure>
  )
}
