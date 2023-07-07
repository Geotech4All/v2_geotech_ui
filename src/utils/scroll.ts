import React from "react";

export function getDocHeight() {
  if (typeof window !== "undefined") {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
  }
  return 0;
}

export function hasScrolledDown(modifier = 0) {
  const docHeight = getDocHeight();
  const currentScroll = window.scrollY + window.innerHeight;
  return currentScroll + modifier > docHeight;
}

export function hasReachedBottom(e: React.UIEvent) {
  const clientHeight = e.currentTarget.clientHeight;
  const scrollTop = e.currentTarget.scrollTop;
  const scrollHeight = e.currentTarget.scrollHeight;
  return scrollHeight - scrollTop === clientHeight;
}
