import * as React from 'react';
/**
 * Window scroll hook that throttles via rAF
 *
 * Note: `{passive: true}` is not needed for scroll events
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
 */
export function useWindowCanScrollUp() {
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const ticking = React.useRef(false);

  const handleTick = () => {
    if (canScrollUp && window.pageYOffset === 0) {
      setCanScrollUp(false);
    } else if (!canScrollUp && window.pageYOffset !== 0) {
      setCanScrollUp(true);
    }
    ticking.current = false;
  };

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(handleTick);

      ticking.current = true;
    }
  };

  React.useEffect(() => {
    setCanScrollUp(window.pageYOffset !== 0);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [canScrollUp]);

  return canScrollUp;
}