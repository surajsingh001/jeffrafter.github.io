(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return l}),t.d(e,"pageQuery",function(){return s});var o=t(0),i=t.n(o),r=t(206),a=t(207);var l=function(n){var e,t;function o(){return n.apply(this,arguments)||this}return t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,o.prototype.render=function(){var n=this.props.data.site.siteMetadata.title;return i.a.createElement(r.a,{title:n},i.a.createElement(a.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},o}(i.a.Component),s="1097489062"},201:function(n,e,t){"use strict";t.d(e,"b",function(){return f});var o=t(0),i=t.n(o),r=t(66),a=t.n(r);t.d(e,"a",function(){return a.a});t(203),t(9).default.enqueue;var l=i.a.createContext({});function s(n){var e=n.staticQueryData,t=n.data,o=n.query,r=n.render,a=t?t.data:e[o]&&e[o].data;return i.a.createElement(i.a.Fragment,null,a&&r(a),!a&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(n){var e=n.data,t=n.query,o=n.render,r=n.children;return i.a.createElement(l.Consumer,null,function(n){return i.a.createElement(s,{data:e,query:t,render:o||r,staticQueryData:n})})}},203:function(n,e,t){var o;n.exports=(o=t(205))&&o.default||o},204:function(n,e,t){"use strict";var o=t(202);function i(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n","\n","\n"]);return i=function(){return n},n}t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o.b});var r={black:"#000000",background:"#fffff8",contrast:"#111",contrastLightest:"#dad9d9",accent:"red",white:"#ffffff"},a=Object(o.a)(i(),"\nhtml {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0 !important;\n  padding: 0;\n}\n\n::selection {\n  background-color: "+r.contrastLightest+";\n  color: rgba(0, 0, 0, 0.70);\n}\n\na.anchor, a.anchor:hover, a.anchor:link {\n  background: none !important;\n}\n\nfigure {\n  a.gatsby-resp-image-link {\n    background: none;\n  }\n\n  span.gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n  }\n}\n\narticle .excerpt {\n  display: none;\n}\n",'\n@charset "UTF-8";\n\n/* Import ET Book styles\n   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */\n\n@font-face { font-family: "et-book";\n             src: url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot");\n             src: url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff") format("woff"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf") format("truetype"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf") format("svg");\n             font-weight: normal;\n             font-style: normal; }\n\n@font-face { font-family: "et-book";\n             src: url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot");\n             src: url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff") format("woff"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf") format("truetype"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf") format("svg");\n             font-weight: normal;\n             font-style: italic; }\n\n@font-face { font-family: "et-book";\n             src: url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot");\n             src: url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff") format("woff"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf") format("truetype"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf") format("svg");\n             font-weight: bold;\n             font-style: normal; }\n\n@font-face { font-family: "et-book-roman-old-style";\n             src: url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot");\n             src: url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff") format("woff"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf") format("truetype"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf") format("svg");\n             font-weight: normal;\n             font-style: normal; }\n\n/* Tufte CSS styles */\nhtml { font-size: 15px; }\n\nbody { width: 87.5%;\n       margin-left: auto;\n       margin-right: auto;\n       padding-left: 12.5%;\n       font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;\n       background-color: #fffff8;\n       color: #111;\n       max-width: 1400px;\n       counter-reset: sidenote-counter; }\n\nh1 { font-weight: 400;\n     margin-top: 4rem;\n     margin-bottom: 1.5rem;\n     font-size: 3.2rem;\n     line-height: 1; }\n\nh2 { font-style: italic;\n     font-weight: 400;\n     margin-top: 2.1rem;\n     margin-bottom: 1.4rem;\n     font-size: 2.2rem;\n     line-height: 1; }\n\nh3 { font-style: italic;\n     font-weight: 400;\n     font-size: 1.7rem;\n     margin-top: 2rem;\n     margin-bottom: 1.4rem;\n     line-height: 1; }\n\nhr { display: block;\n     height: 1px;\n     width: 55%;\n     border: 0;\n     border-top: 1px solid #ccc;\n     margin: 1em 0;\n     padding: 0; }\n\np.subtitle { font-style: italic;\n             margin-top: 1rem;\n             margin-bottom: 1rem;\n             font-size: 1.8rem;\n             display: block;\n             line-height: 1; }\n\n.numeral { font-family: et-book-roman-old-style; }\n\n.danger { color: red; }\n\narticle { position: relative;\n          padding: 5rem 0rem; }\n\nsection { padding-top: 1rem;\n          padding-bottom: 1rem; }\n\np, ol, ul { font-size: 1.4rem;\n            line-height: 2rem; }\n\np { margin-top: 1.4rem;\n    margin-bottom: 1.4rem;\n    padding-right: 0;\n    vertical-align: baseline; }\n\n/* Chapter Epigraphs */\ndiv.epigraph { margin: 5em 0; }\n\ndiv.epigraph > blockquote { margin-top: 3em;\n                            margin-bottom: 3em; }\n\ndiv.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }\n\ndiv.epigraph > blockquote > footer { font-style: normal; }\n\ndiv.epigraph > blockquote > footer > cite { font-style: italic; }\n/* end chapter epigraphs styles */\n\nblockquote { font-size: 1.4rem; }\n\nblockquote p { width: 55%;\n               margin-right: 40px;\n               font-style: italic;\n               color: #999; }\n\nblockquote footer { width: 55%;\n                    font-size: 1.1rem;\n                    text-align: right; }\n\nsection > p, section > footer, section > table { width: 55%; }\n\n/* 50 + 5 == 55, to be the same width as paragraph */\nsection > ol, section > ul { width: 50%;\n                             -webkit-padding-start: 5%; }\n\nli:not(:first-child) { margin-top: 0.25rem; }\n\nfigure { padding: 0;\n         border: 0;\n         font-size: 100%;\n         font: inherit;\n         vertical-align: baseline;\n         max-width: 55%;\n         -webkit-margin-start: 0;\n         -webkit-margin-end: 0;\n         margin: 0 0 3em 0; }\n\nfigcaption { margin-top: -2em;\n\n             margin-bottom: 0;\n             font-size: 1.1rem;\n             font-style: italic;\n             line-height: 1.6;\n             vertical-align: baseline;\n             position: relative;\n             max-width: 40%; }\n\nfigure.fullwidth figcaption { max-width: 80%; }\n\n/* Links: replicate underline that clears descenders */\na:link, a:visited { color: inherit; }\n\na:link { text-decoration: none;\n         display: inline-block;\n         background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);\n         background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);\n         -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-repeat: no-repeat, no-repeat, repeat-x;\n         background-position: 0% 101%, 101% 101%, 0% 101%; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 101%, 101%, 101%; } }\n\n/* Sidenotes, margin notes, figures, captions */\nimg { max-width: 100%; }\n\n.sidenote, .marginnote { float: right;\n                         clear: right;\n                         margin-right: -60%;\n                         width: 50%;\n                         margin-top: 0;\n                         margin-bottom: 0;\n                         margin-left: 5%;\n                         font-size: 1.1rem;\n                         line-height: 1.3;\n                         vertical-align: baseline;\n                         position: relative; }\n\n.sidenote-number { counter-increment: sidenote-counter; }\n\n.sidenote-number:after, .sidenote:before { font-family: et-book-roman-old-style;\n                                           position: relative;\n                                           vertical-align: baseline; }\n\n.sidenote-number:after { content: counter(sidenote-counter);\n                         font-size: 1rem;\n                         top: -0.5rem;\n                         left: 0.1rem; }\n\n.sidenote:before { content: counter(sidenote-counter) " ";\n                   font-size: 1rem;\n                   top: -0.5rem; }\n\nblockquote .sidenote, blockquote .marginnote { margin-right: -82%;\n                                               min-width: 59%;\n                                               text-align: left; }\n\ndiv.fullwidth, table.fullwidth { width: 100%; }\n\ndiv.table-wrapper { overflow-x: auto;\n                    font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif; }\n\n.sans { font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;\n        letter-spacing: .03em; }\n\ncode { font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\n       font-size: 1.0rem;\n       line-height: 1.42; }\n\n.sans > code { font-size: 1.2rem; }\n\nh1 > code, h2 > code, h3 > code { font-size: 0.80em; }\n\n.marginnote > code, .sidenote > code { font-size: 1rem; }\n\npre.code { font-size: 0.9rem;\n           width: 52.5%;\n           margin-left: 2.5%;\n           overflow-x: auto; }\n\npre.code.fullwidth { width: 90%; }\n\n.fullwidth { max-width: 100%;\n             clear:both; }\n\nspan.newthought { font-variant: small-caps;\n                  font-size: 1.2em; }\n\ninput.margin-toggle { display: none; }\n\nlabel.sidenote-number { display: inline; }\n\nlabel.margin-toggle:not(.sidenote-number) { display: none; }\n\n.iframe-wrapper { position: relative;\n                  padding-bottom: 56.25%; /* 16:9 */\n                  padding-top: 25px;\n                  height: 0; }\n\n.iframe-wrapper iframe { position: absolute;\n                         top: 0;\n                         left: 0;\n                         width: 100%;\n                         height: 100%; }\n\n@media (max-width: 760px) { body { width: 100%;\n                                   padding-left: 8%;\n                                   padding-right: 8%; }\n                            hr, section > p, section > footer, section > table { width: 100%; }\n                            pre.code { width: 97%; }\n                            section > ol { width: 90%; }\n                            section > ul { width: 90%; }\n                            figure { max-width: 90%; }\n                            figcaption, figure.fullwidth figcaption { margin-right: 0%;\n                                                                      max-width: none; }\n                            blockquote { margin-left: 1.5em;\n                                         margin-right: 0em; }\n                            blockquote p, blockquote footer { width: 100%; }\n                            label.margin-toggle:not(.sidenote-number) { display: inline; }\n                            .sidenote, .marginnote { display: none; }\n                            .margin-toggle:checked + .sidenote,\n                            .margin-toggle:checked + .marginnote { display: block;\n                                                                   float: left;\n                                                                   left: 1rem;\n                                                                   clear: both;\n                                                                   width: 95%;\n                                                                   margin: 1rem 2.5%;\n                                                                   vertical-align: baseline;\n                                                                   position: relative; }\n                            label { cursor: pointer; }\n                            div.table-wrapper, table { width: 85%; }\n                            img { width: 100%; } }\n')},205:function(n,e,t){"use strict";t.r(e);t(23);var o=t(0),i=t.n(o),r=t(92);e.default=function(n){var e=n.location,t=n.pageResources;return t?i.a.createElement(r.a,Object.assign({location:e,pageResources:t},t.json)):null}},206:function(n,e,t){"use strict";t.d(e,"a",function(){return m});var o=t(0),i=t.n(o),r=t(201),a=t(204);function l(){var n=f(["\n  padding-bottom: 36px;\n"]);return l=function(){return n},n}function s(){var n=f(["\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin: 16px;\n\n    a {\n      background: none;\n    }\n  }\n"]);return s=function(){return n},n}function f(n,e){return e||(e=n.slice(0)),n.raw=e,n}var d=a.b.nav(s()),c=a.b.footer(l()),m=function(n){var e,t;function o(){return n.apply(this,arguments)||this}return t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,o.prototype.render=function(){var n=this.props.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null),i.a.createElement(d,{className:"navigation"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(r.a,{to:"/"},"&")),i.a.createElement("li",null,i.a.createElement(r.a,{to:"/tags"},"Tags")),i.a.createElement("li",null,i.a.createElement(r.a,{to:"/about"},"About")))),i.a.createElement("main",{className:"content",role:"main"},n),i.a.createElement(c,{className:"footer"},"© ",(new Date).getFullYear(),","," ",i.a.createElement("a",{href:"https://jeffrafter.com"},"jeffrafter.com"),". Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},o}(i.a.Component)},207:function(n,e,t){"use strict";t.d(e,"a",function(){return f});t(38);var o=t(208),i=t(0),r=t.n(i),a=t(209),l=t.n(a),s=t(201);var f=function(n){var e,t;function i(){return n.apply(this,arguments)||this}return t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,i.prototype.render=function(){var n=this;return r.a.createElement(s.b,{query:"872482878",render:function(e){var t=n.props.description||e.site.siteMetadata.description||"",o=n.props.lang||"en",i=n.props.title,a=n.props.image?"https://jeffrafter.com/"+n.props.image:"",s=n.props.keywords||[];return r.a.createElement(l.a,{htmlAttributes:{lang:o},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{property:"og:image",content:a},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author.name},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[])})},data:o})},i}(r.a.Component)},208:function(n){n.exports={data:{site:{siteMetadata:{title:"Jeff Rafter",description:"How to.",author:{name:"Jeff Rafter"}}}}}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-8c48f3f42933d9297930.js.map