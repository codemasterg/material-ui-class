
// scroll window to the given component reference
export const executeScroll = (ref, offset) => window.scrollTo(0, ref.current.offsetTop + offset);  // subtract to utilize any remaining scroll to top