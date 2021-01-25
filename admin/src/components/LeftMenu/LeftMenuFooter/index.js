/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a
          key="website"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By Traveler
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
