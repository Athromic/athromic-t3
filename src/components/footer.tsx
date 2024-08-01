import * as React from "react";

export const Footer: React.FC = () => (
  <footer className="flex h-[80px] items-center justify-center text-center">
<iframe
  frameBorder="0"
  height="30"
  scrolling="no"
  src="https://status.athromic.com/badge?theme=dark"
  width="250"
/>
    <p className="text-base inline-flex items-center gap-2 text-default-400 [text-shadow:_0_2px_2px_rgb(0_0_0_/_25%)] ">
      © 2024 Athromic. All rights reserved.
    </p>
  </footer>
);
