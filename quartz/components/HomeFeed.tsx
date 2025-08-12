import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { Date, getDate } from "./Date"
import { byDateAndAlphabetical } from "./PageList"

type Options = {
  limit?: number
  title?: string
}

export default ((userOpts?: Options) => {
  const opts: Required<Options> = {
    limit: userOpts?.limit ?? 3,
    title: userOpts?.title ?? "Posts",
  }

  const HomeFeed: QuartzComponent = ({ allFiles, fileData, cfg }: QuartzComponentProps) => {
    const pages = allFiles
      .filter((p) => p.slug !== ("index" as FullSlug))
      .sort(byDateAndAlphabetical(cfg))
      .slice(0, opts.limit)

    return (
      <section class="home-posts">
        <h2>{opts.title}</h2>
        <div class="posts-grid">
          {pages.map((page) => {
            const title = page.frontmatter?.title ?? "Untitled"
            const href = resolveRelative(fileData.slug!, page.slug!)
            const dt = page.dates ? getDate(cfg, page) : undefined
            const description = (page.description ?? "").toString()
            const socialImage = page.frontmatter?.socialImage as string | undefined

            return (
              <a href={href} class="internal post-card-link">
                <article class="post-card">
                  {socialImage && (
                    <img
                      src={resolveRelative(fileData.slug!, socialImage as FullSlug)}
                      alt=""
                      class="post-card-image"
                    />
                  )}
                  <div class="post-card-content">
                    {dt && (
                      <time datetime={dt.toISOString()}>
                        <Date date={dt} locale={cfg.locale} />
                      </time>
                    )}
                    <h3>
                      {title}
                    </h3>
                    {description && <p>{description}</p>}
                  </div>
                </article>
              </a>
            )
          })}
        </div>
      </section>
    )
  }

  return HomeFeed
}) satisfies QuartzComponentConstructor<Partial<Options>>


