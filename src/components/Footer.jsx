import React from "react";

export default function Footer() {
  const emailAddress = "zeusexperiments@gmail.com";

  return (
    <Footer>
            <p>
              Contact us at:<a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
            © 2023 ShowCast. All rights reserved.
    </Footer>
  )
}
