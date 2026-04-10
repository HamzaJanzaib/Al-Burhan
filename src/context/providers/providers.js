"use client";

import React from "react";

// Helper to create a simple provider stub
const createProvider = (name) => {
  return ({ children }) => {
    return <div data-provider={name}>{children}</div>;
  };
};

