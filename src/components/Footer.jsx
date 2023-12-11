import React from "react";

export default function Footer() {
  const emailAddress = "zeusexperiments@gmail.com";

  return (
    <footer className="Footer">
            <p>
              Contact us at: <a className="footer-link" href={`mailto:${emailAddress}`}>{emailAddress}</a><br/>© 2023 ShowCast. All rights reserved.
            </p>
    </footer>
  )
}
