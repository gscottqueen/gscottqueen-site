import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ListingTemplate from "../../templates/listing-template"
import { Link } from "gatsby"

const IndexArt = () => (
  <Layout>
    <SEO title="G. Scott Queen | Art" />
    <ListingTemplate>
      <ul>
        <ul>
          <h2>Sculpture</h2>
          <li><Link to="/art/untitled-sculpture-1">Untitled Sculpture #1, 2011</Link></li>
          <li><Link to="/art/persistence-of-man-over-nature">Persistence of Man Over Nature, 2010</Link></li>
        </ul>
        <ul>
          <h2>Painting</h2>
          <li><Link to="/art/on-the-way-to-telos">On the Way to Telos, 2012</Link></li>
          <li><Link to="/art/we-are-one">We Are One, 2012</Link></li>
          <li><Link to="/art/dark-matter">Dark Matter, 2011</Link></li>
          <li><Link to="/art/strange-days">Strange Days, 2012</Link></li>
        </ul>
      </ul>
    </ListingTemplate>
  </Layout>
);

export default IndexArt


// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width,initial-scale=1.0">
//     <title>G. Scott Queen | Art</title>
//     <link rel="preconnect" to="https://fonts.gstatic.com">
//     <link to="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet">
//     <link rel="preconnect" to="https://fonts.gstatic.com">
//     <link to="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
//   </head>
//   <style>
//     html {
//       font-family: 'Syne Mono', monospace;
//       font-size: 14px;
//       background-color: #eae8e8;
//     }
//     body {
//       margin: 0;
//       padding: 0;
//     }
//     header {
//       position: fixed;
//       top: 0;
//       height: auto;
//       width: 580px;
//     }
//     .tape {
//       position: relative;
//       background-size: contain;
//       background-repeat: no-repeat;
//       padding: 15px 30px;
//       width: 100%;
//       transform: rotate(-2deg);
//       opacity: 0.8;
//       background-image: url('/images/tape.gif');
//     }
//     h1 {
//       font-family: 'Rock Salt', cursive;
//       margin: 0;
//       line-height: 1.6;
//     }
//     h1 a {
//       color: black;
//       text-decoration: none;
//     }
//     a {
//       color: black;
//       background-color: rgba(234, 232, 232, .5)
//     }
//     h1 a,
//     nav a {
//       background: none;
//     }
//     section {
//       margin-top: calc(100vh/3.5);
//       text-align: center;
//     }
//     ul {
//       list-style: none;
//       padding: 0;
//     }
//     li {
//       margin-bottom: 20px;
//     }
//     ul > h2 {
//       margin-top: 40px;
//     }
//   </style>
//   <body>
//     <header>
//       <div class="tape">
//         <div>
//           <h1><a to="/">G. Scott Queen</a></h1>
//           <nav>
//             <span>
//               <a to="/art">Art</a>
//             </span> / <span>
//               <a to="/writing">Writing</a>
//             </span> / <span>
//               <a to="mailto:geoffreysqueen@gmail.com">Contact</a>
//             </span>
//           </nav>
//         </div>
//       </div>
//     </header>
//   <section id="main">
//     <h1 hidden>Art</h1>
    // <ul>
    //   <ul>
    //     <h2>Sculpture</h2>
    //     <li><a to="/art/untitled-sculpture-1.html">Untitled Sculpture #1, 2011</a></li>
    //     <li><a to="/art/persistence-of-man-over-nature.html">Persistence of Man Over Nature, 2010</a></li>
    //   </ul>
    //   <ul>
    //     <h2>Painting</h2>
    //     <li><a to="/art/on-the-way-to-telos.html">On the Way to Telos, 2012</a></li>
    //     <li><a to="/art/we-are-one.html">We Are One, 2012</a></li>
    //     <li><a to="/art/dark-matter.html">Dark Matter, 2011</a></li>
    //   </ul>
    // </ul>
//   </section>
//   </body>
// </html>
