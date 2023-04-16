export const useAnchorNavigationClick =
  () => (event, id) => {
    const anchor = (
      event.target.ownerDocument || document
    ).querySelector(id);

    if (anchor) {
      anchor.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };
