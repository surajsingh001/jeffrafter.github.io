import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

type StaticQueryData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: {
        name: string
      }
    }
  }
}

interface Props {
  readonly title: string
  readonly image: string
  readonly description?: string
  readonly lang?: string
  readonly keywords?: string[]
}

export default class Head extends React.Component<Props> {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author {
                  name
                }
              }
            }
          }
        `}
        render={(data: StaticQueryData) => {
          const description = this.props.description || data.site.siteMetadata.description || ''
          const lang = this.props.lang || 'en'
          const title = this.props.title
          const image = this.props.image ? `https://jeffrafter.com/${this.props.image}` : ''
          const keywords = this.props.keywords || []
          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: description,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: description,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:image`,
                  content: image,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author.name,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: description,
                },
              ].concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )}
            />
          )
        }}
      />
    )
  }
}
