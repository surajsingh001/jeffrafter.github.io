(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,n,t){"use strict";t.r(n);var o=t(7),i=t.n(o),r=t(0),a=t.n(r),l=t(148),s=t(152),f=t(154),d=t(179),m=function(){return a.a.createElement(l.b,{query:"3599211134",render:function(e){var n=e.site.siteMetadata,t=n.description,o=n.social;return a.a.createElement("div",null,a.a.createElement("h1",null,t),a.a.createElement("p",null,"By Jeff Rafter",a.a.createElement("br",null),a.a.createElement("a",{href:o.twitter},"Twitter")))},data:d})};t.d(n,"default",function(){return c}),t.d(n,"pageQuery",function(){return u});var c=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this.props.data,n=e.site.siteMetadata.title,t=e.allMarkdownRemark?e.allMarkdownRemark.edges:[];return a.a.createElement(s.a,{title:n},a.a.createElement(f.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.a.createElement(m,null),a.a.createElement("article",null,a.a.createElement("div",{className:"page-content"},t.map(function(e){var n=e.node,t=n.frontmatter.title||n.fields.slug;return a.a.createElement("div",{key:n.fields.slug},a.a.createElement("h3",null,a.a.createElement(l.a,{to:n.fields.slug},t)),a.a.createElement("small",null,n.frontmatter.date),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.excerpt}}))}))))},n}(a.a.Component),u="3927474892"},148:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var o=t(0),i=t.n(o),r=t(4),a=t.n(r),l=t(147),s=t.n(l);t.d(n,"a",function(){return s.a});t(150),t(32);var f=i.a.createContext({}),d=function(e){return i.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},150:function(e,n,t){var o;e.exports=(o=t(153))&&o.default||o},151:function(e,n,t){"use strict";var o=t(156),i=t.n(o),r=t(149);function a(){var e=i()(["\n","\n","\n"]);return a=function(){return e},e}t.d(n,"c",function(){return l}),t.d(n,"a",function(){return s}),t.d(n,"b",function(){return r.b});var l={colors:{black:"#000000",background:"#fffff8",contrast:"#111",contrastLightest:"#dad9d9",accent:"red",white:"#ffffff"}},s=Object(r.a)(a(),"\nhtml {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0 !important;\n  padding: 0;\n}\n\n::selection {\n  background-color: "+l.colors.contrastLightest+";\n  color: rgba(0, 0, 0, 0.70);\n}\n\na.anchor, a.anchor:hover, a.anchor:link {\n  background: none !important;\n}\n\nfigure {\n  a.gatsby-resp-image-link {\n    background: none;\n  }\n\n  span.gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n  }\n}\n\n",'\n@charset "UTF-8";\n\n/* Import ET Book styles\n   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */\n\n@font-face { font-family: "et-book";\n             src: url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot");\n             src: url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff") format("woff"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf") format("truetype"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf") format("svg");\n             font-weight: normal;\n             font-style: normal; }\n\n@font-face { font-family: "et-book";\n             src: url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot");\n             src: url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff") format("woff"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf") format("truetype"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf") format("svg");\n             font-weight: normal;\n             font-style: italic; }\n\n@font-face { font-family: "et-book";\n             src: url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot");\n             src: url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff") format("woff"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf") format("truetype"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf") format("svg");\n             font-weight: bold;\n             font-style: normal; }\n\n@font-face { font-family: "et-book-roman-old-style";\n             src: url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot");\n             src: url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff") format("woff"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf") format("truetype"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf") format("svg");\n             font-weight: normal;\n             font-style: normal; }\n\n/* Tufte CSS styles */\nhtml { font-size: 15px; }\n\nbody { width: 87.5%;\n       margin-left: auto;\n       margin-right: auto;\n       padding-left: 12.5%;\n       font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;\n       background-color: #fffff8;\n       color: #111;\n       max-width: 1400px;\n       counter-reset: sidenote-counter; }\n\nh1 { font-weight: 400;\n     margin-top: 4rem;\n     margin-bottom: 1.5rem;\n     font-size: 3.2rem;\n     line-height: 1; }\n\nh2 { font-style: italic;\n     font-weight: 400;\n     margin-top: 2.1rem;\n     margin-bottom: 1.4rem;\n     font-size: 2.2rem;\n     line-height: 1; }\n\nh3 { font-style: italic;\n     font-weight: 400;\n     font-size: 1.7rem;\n     margin-top: 2rem;\n     margin-bottom: 1.4rem;\n     line-height: 1; }\n\nhr { display: block;\n     height: 1px;\n     width: 55%;\n     border: 0;\n     border-top: 1px solid #ccc;\n     margin: 1em 0;\n     padding: 0; }\n\np.subtitle { font-style: italic;\n             margin-top: 1rem;\n             margin-bottom: 1rem;\n             font-size: 1.8rem;\n             display: block;\n             line-height: 1; }\n\n.numeral { font-family: et-book-roman-old-style; }\n\n.danger { color: red; }\n\narticle { position: relative;\n          padding: 5rem 0rem; }\n\nsection { padding-top: 1rem;\n          padding-bottom: 1rem; }\n\np, ol, ul { font-size: 1.4rem;\n            line-height: 2rem; }\n\np { margin-top: 1.4rem;\n    margin-bottom: 1.4rem;\n    padding-right: 0;\n    vertical-align: baseline; }\n\n/* Chapter Epigraphs */\ndiv.epigraph { margin: 5em 0; }\n\ndiv.epigraph > blockquote { margin-top: 3em;\n                            margin-bottom: 3em; }\n\ndiv.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }\n\ndiv.epigraph > blockquote > footer { font-style: normal; }\n\ndiv.epigraph > blockquote > footer > cite { font-style: italic; }\n/* end chapter epigraphs styles */\n\nblockquote { font-size: 1.4rem; }\n\nblockquote p { width: 55%;\n               margin-right: 40px; }\n\nblockquote footer { width: 55%;\n                    font-size: 1.1rem;\n                    text-align: right; }\n\nsection > p, section > footer, section > table { width: 55%; }\n\n/* 50 + 5 == 55, to be the same width as paragraph */\nsection > ol, section > ul { width: 50%;\n                             -webkit-padding-start: 5%; }\n\nli:not(:first-child) { margin-top: 0.25rem; }\n\nfigure { padding: 0;\n         border: 0;\n         font-size: 100%;\n         font: inherit;\n         vertical-align: baseline;\n         max-width: 55%;\n         -webkit-margin-start: 0;\n         -webkit-margin-end: 0;\n         margin: 0 0 3em 0; }\n\nfigcaption { float: right;\n             clear: right;\n             margin-top: 0;\n             margin-bottom: 0;\n             font-size: 1.1rem;\n             line-height: 1.6;\n             vertical-align: baseline;\n             position: relative;\n             max-width: 40%; }\n\nfigure.fullwidth figcaption { margin-right: 24%; }\n\n/* Links: replicate underline that clears descenders */\na:link, a:visited { color: inherit; }\n\na:link { text-decoration: none;\n         display: inline-block;\n         background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);\n         background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);\n         -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-repeat: no-repeat, no-repeat, repeat-x;\n         background-position: 0% 101%, 101% 101%, 0% 101%; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 101%, 101%, 101%; } }\n\n/* Sidenotes, margin notes, figures, captions */\nimg { max-width: 100%; }\n\n.sidenote, .marginnote { float: right;\n                         clear: right;\n                         margin-right: -60%;\n                         width: 50%;\n                         margin-top: 0;\n                         margin-bottom: 0;\n                         margin-left: 5%;\n                         font-size: 1.1rem;\n                         line-height: 1.3;\n                         vertical-align: baseline;\n                         position: relative; }\n\n.sidenote-number { counter-increment: sidenote-counter; }\n\n.sidenote-number:after, .sidenote:before { font-family: et-book-roman-old-style;\n                                           position: relative;\n                                           vertical-align: baseline; }\n\n.sidenote-number:after { content: counter(sidenote-counter);\n                         font-size: 1rem;\n                         top: -0.5rem;\n                         left: 0.1rem; }\n\n.sidenote:before { content: counter(sidenote-counter) " ";\n                   font-size: 1rem;\n                   top: -0.5rem; }\n\nblockquote .sidenote, blockquote .marginnote { margin-right: -82%;\n                                               min-width: 59%;\n                                               text-align: left; }\n\ndiv.fullwidth, table.fullwidth { width: 100%; }\n\ndiv.table-wrapper { overflow-x: auto;\n                    font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif; }\n\n.sans { font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;\n        letter-spacing: .03em; }\n\ncode { font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\n       font-size: 1.0rem;\n       line-height: 1.42; }\n\n.sans > code { font-size: 1.2rem; }\n\nh1 > code, h2 > code, h3 > code { font-size: 0.80em; }\n\n.marginnote > code, .sidenote > code { font-size: 1rem; }\n\npre.code { font-size: 0.9rem;\n           width: 52.5%;\n           margin-left: 2.5%;\n           overflow-x: auto; }\n\npre.code.fullwidth { width: 90%; }\n\n.fullwidth { max-width: 90%;\n             clear:both; }\n\nspan.newthought { font-variant: small-caps;\n                  font-size: 1.2em; }\n\ninput.margin-toggle { display: none; }\n\nlabel.sidenote-number { display: inline; }\n\nlabel.margin-toggle:not(.sidenote-number) { display: none; }\n\n.iframe-wrapper { position: relative;\n                  padding-bottom: 56.25%; /* 16:9 */\n                  padding-top: 25px;\n                  height: 0; }\n\n.iframe-wrapper iframe { position: absolute;\n                         top: 0;\n                         left: 0;\n                         width: 100%;\n                         height: 100%; }\n\n@media (max-width: 760px) { body { width: 84%;\n                                   padding-left: 8%;\n                                   padding-right: 8%; }\n                            hr, section > p, section > footer, section > table { width: 100%; }\n                            pre.code { width: 97%; }\n                            section > ol { width: 90%; }\n                            section > ul { width: 90%; }\n                            figure { max-width: 90%; }\n                            figcaption, figure.fullwidth figcaption { margin-right: 0%;\n                                                                      max-width: none; }\n                            blockquote { margin-left: 1.5em;\n                                         margin-right: 0em; }\n                            blockquote p, blockquote footer { width: 100%; }\n                            label.margin-toggle:not(.sidenote-number) { display: inline; }\n                            .sidenote, .marginnote { display: none; }\n                            .margin-toggle:checked + .sidenote,\n                            .margin-toggle:checked + .marginnote { display: block;\n                                                                   float: left;\n                                                                   left: 1rem;\n                                                                   clear: both;\n                                                                   width: 95%;\n                                                                   margin: 1rem 2.5%;\n                                                                   vertical-align: baseline;\n                                                                   position: relative; }\n                            label { cursor: pointer; }\n                            div.table-wrapper, table { width: 85%; }\n                            img { width: 100%; } }\n')},152:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var o=t(7),i=t.n(o),r=t(0),a=t.n(r),l=t(148),s=t(151),f=s.b.nav.withConfig({displayName:"layout__StyledNav",componentId:"sc-4wr7ms-0"})(["ul{list-style-type:none;margin:0;padding:0;}li{display:inline-block;margin:16px;a{background:none;}}"]),d=s.b.footer.withConfig({displayName:"layout__StyledFooter",componentId:"sc-4wr7ms-1"})(["padding-bottom:36px;"]),m=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this.props.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,null),a.a.createElement(f,{className:"navigation"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.a,{to:"/"},"&")),a.a.createElement("li",null,a.a.createElement(l.a,{to:"/tags"},"Tags")),a.a.createElement("li",null,a.a.createElement(l.a,{to:"/about"},"About")))),a.a.createElement("main",{className:"content",role:"main"},e),a.a.createElement(d,{className:"footer"},"© ",(new Date).getFullYear(),","," ",a.a.createElement("a",{href:"https://jeffrafter.com"},"jeffrafter.com"),". Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},n}(a.a.Component)},153:function(e,n,t){"use strict";t.r(n);t(33);var o=t(0),i=t.n(o),r=t(4),a=t.n(r),l=t(52),s=t(2),f=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};f.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},n.default=f},154:function(e,n,t){"use strict";t.d(n,"a",function(){return m});t(157);var o=t(7),i=t.n(o),r=t(155),a=t(0),l=t.n(a),s=t(158),f=t.n(s),d=t(148),m=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this;return l.a.createElement(d.b,{query:"872482878",render:function(n){var t=e.props.description||n.site.siteMetadata.description,o=e.props.lang||"en",i=e.props.title,r=e.props.keywords||[];return l.a.createElement(f.a,{htmlAttributes:{lang:o},title:i,titleTemplate:"%s | "+n.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.site.siteMetadata.author.name},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[])})},data:r})},n}(l.a.Component)},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jeff Rafter",description:"How to.",author:{name:"Jeff Rafter"}}}}}},179:function(e){e.exports={data:{site:{siteMetadata:{description:"How to.",social:{twitter:"https://twitter.com/jeffrafter"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-593f5d0e4b2eb3d78266.js.map