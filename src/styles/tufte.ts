export default () => `
@charset "UTF-8";

/* Import ET Book styles
   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */

@font-face { font-family: "et-book";
             src: url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot");
             src: url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff") format("woff"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf") format("truetype"), url("/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf") format("svg");
             font-weight: normal;
             font-style: normal; }

@font-face { font-family: "et-book";
             src: url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot");
             src: url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff") format("woff"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf") format("truetype"), url("/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf") format("svg");
             font-weight: normal;
             font-style: italic; }

@font-face { font-family: "et-book";
             src: url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot");
             src: url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff") format("woff"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf") format("truetype"), url("/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf") format("svg");
             font-weight: bold;
             font-style: normal; }

@font-face { font-family: "et-book-roman-old-style";
             src: url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot");
             src: url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix") format("embedded-opentype"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff") format("woff"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf") format("truetype"), url("/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf") format("svg");
             font-weight: normal;
             font-style: normal; }

/* Tufte CSS styles */
html { font-size: 15px; }

body { width: 87.5%;
       margin-left: auto;
       margin-right: auto;
       padding-left: 12.5%;
       font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
       background-color: #fffff8;
       color: #111;
       max-width: 1400px;
       counter-reset: sidenote-counter; }

h1 { font-weight: 400;
     margin-top: 4rem;
     margin-bottom: 1.5rem;
     font-size: 3.2rem;
     line-height: 1; }

h2 { font-style: italic;
     font-weight: 400;
     margin-top: 2.1rem;
     margin-bottom: 1.4rem;
     font-size: 2.2rem;
     line-height: 1; }

h3 { font-style: italic;
     font-weight: 400;
     font-size: 1.7rem;
     margin-top: 2rem;
     margin-bottom: 1.4rem;
     line-height: 1; }

hr { display: block;
     height: 1px;
     width: 55%;
     border: 0;
     border-top: 1px solid #ccc;
     margin: 1em 0;
     padding: 0; }

p.subtitle { font-style: italic;
             margin-top: 1rem;
             margin-bottom: 1rem;
             font-size: 1.8rem;
             display: block;
             line-height: 1; }

.numeral { font-family: et-book-roman-old-style; }

.danger { color: red; }

article { position: relative;
          padding: 5rem 0rem; }

section { padding-top: 1rem;
          padding-bottom: 1rem; }

p, ol, ul { font-size: 1.4rem;
            line-height: 2rem; }

p { margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    padding-right: 0;
    vertical-align: baseline; }

/* Chapter Epigraphs */
div.epigraph { margin: 5em 0; }

div.epigraph > blockquote { margin-top: 3em;
                            margin-bottom: 3em; }

div.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }

div.epigraph > blockquote > footer { font-style: normal; }

div.epigraph > blockquote > footer > cite { font-style: italic; }
/* end chapter epigraphs styles */

blockquote { font-size: 1.4rem; }

blockquote p { width: 55%;
               margin-right: 40px;
               font-style: italic;
               color: #999; }

blockquote footer { width: 55%;
                    font-size: 1.1rem;
                    text-align: right; }

section > p, section > footer, section > table { width: 55%; }

/* 50 + 5 == 55, to be the same width as paragraph */
section > ol, section > ul { width: 50%;
                             -webkit-padding-start: 5%; }

li:not(:first-child) { margin-top: 0.25rem; }

figure { padding: 0;
         border: 0;
         font-size: 100%;
         font: inherit;
         vertical-align: baseline;
         max-width: 55%;
         -webkit-margin-start: 0;
         -webkit-margin-end: 0;
         margin: 0 0 3em 0; }

figcaption { float: right;
             clear: right;
             margin-top: 0;
             margin-bottom: 0;
             font-size: 1.1rem;
             line-height: 1.6;
             vertical-align: baseline;
             position: relative;
             max-width: 40%; }

figure.fullwidth figcaption { margin-right: 24%; }

/* Links: replicate underline that clears descenders */
a:link, a:visited { color: inherit; }

a:link { text-decoration: none;
         display: inline-block;
         background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);
         background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);
         -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
         -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
         background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
         background-repeat: no-repeat, no-repeat, repeat-x;
         background-position: 0% 101%, 101% 101%, 0% 101%; }

@media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 101%, 101%, 101%; } }

/* Sidenotes, margin notes, figures, captions */
img { max-width: 100%; }

.sidenote, .marginnote { float: right;
                         clear: right;
                         margin-right: -60%;
                         width: 50%;
                         margin-top: 0;
                         margin-bottom: 0;
                         margin-left: 5%;
                         font-size: 1.1rem;
                         line-height: 1.3;
                         vertical-align: baseline;
                         position: relative; }

.sidenote-number { counter-increment: sidenote-counter; }

.sidenote-number:after, .sidenote:before { font-family: et-book-roman-old-style;
                                           position: relative;
                                           vertical-align: baseline; }

.sidenote-number:after { content: counter(sidenote-counter);
                         font-size: 1rem;
                         top: -0.5rem;
                         left: 0.1rem; }

.sidenote:before { content: counter(sidenote-counter) " ";
                   font-size: 1rem;
                   top: -0.5rem; }

blockquote .sidenote, blockquote .marginnote { margin-right: -82%;
                                               min-width: 59%;
                                               text-align: left; }

div.fullwidth, table.fullwidth { width: 100%; }

div.table-wrapper { overflow-x: auto;
                    font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif; }

.sans { font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
        letter-spacing: .03em; }

code { font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
       font-size: 1.0rem;
       line-height: 1.42; }

.sans > code { font-size: 1.2rem; }

h1 > code, h2 > code, h3 > code { font-size: 0.80em; }

.marginnote > code, .sidenote > code { font-size: 1rem; }

pre.code { font-size: 0.9rem;
           width: 52.5%;
           margin-left: 2.5%;
           overflow-x: auto; }

pre.code.fullwidth { width: 90%; }

.fullwidth { max-width: 90%;
             clear:both; }

span.newthought { font-variant: small-caps;
                  font-size: 1.2em; }

input.margin-toggle { display: none; }

label.sidenote-number { display: inline; }

label.margin-toggle:not(.sidenote-number) { display: none; }

.iframe-wrapper { position: relative;
                  padding-bottom: 56.25%; /* 16:9 */
                  padding-top: 25px;
                  height: 0; }

.iframe-wrapper iframe { position: absolute;
                         top: 0;
                         left: 0;
                         width: 100%;
                         height: 100%; }

@media (max-width: 760px) { body { width: 100%;
                                   padding-left: 8%;
                                   padding-right: 8%; }
                            hr, section > p, section > footer, section > table { width: 100%; }
                            pre.code { width: 97%; }
                            section > ol { width: 90%; }
                            section > ul { width: 90%; }
                            figure { max-width: 90%; }
                            figcaption, figure.fullwidth figcaption { margin-right: 0%;
                                                                      max-width: none; }
                            blockquote { margin-left: 1.5em;
                                         margin-right: 0em; }
                            blockquote p, blockquote footer { width: 100%; }
                            label.margin-toggle:not(.sidenote-number) { display: inline; }
                            .sidenote, .marginnote { display: none; }
                            .margin-toggle:checked + .sidenote,
                            .margin-toggle:checked + .marginnote { display: block;
                                                                   float: left;
                                                                   left: 1rem;
                                                                   clear: both;
                                                                   width: 95%;
                                                                   margin: 1rem 2.5%;
                                                                   vertical-align: baseline;
                                                                   position: relative; }
                            label { cursor: pointer; }
                            div.table-wrapper, table { width: 85%; }
                            img { width: 100%; } }
`
