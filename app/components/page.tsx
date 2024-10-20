"use client";

import React, { useState } from "react";

const CodeInput = () => {
  const [code, setCode] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  return (
    <div className="flex flex-col w-full max-w-xl p-4">
      <label htmlFor="code" className="mb-2 text-lg font-semibold">
        Paste your code:
      </label>
      <textarea
        id="code"
        value={code}
        onChange={handleChange}
        className="p-4 w-full h-64 bg-gray-100 dark:bg-gray-800 text-sm font-mono rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
        placeholder="Write or paste your code here..."
      />
    </div>
  );
};

export default CodeInput;
