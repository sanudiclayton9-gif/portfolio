"use client";

import { useEffect, useState } from "react";

const LINE = 'echo "Let\'s build something."';

export default function Terminal() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(LINE.slice(0, i));
      if (i >= LINE.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span></span>
        <span></span>
        <span></span>
        <div className="terminal-title">clayton@sanudi:~</div>
      </div>
      <div className="terminal-body">
        <div>
          <span className="prompt">$</span> <span className="cmd">whoami</span>
        </div>
        <div className="out">Clayton Sanudi — Software Engineer</div>
        <div style={{ height: 8 }} />
        <div>
          <span className="prompt">$</span> <span className="cmd">{typed}</span>
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}
