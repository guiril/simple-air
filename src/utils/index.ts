export function stopHashHrefNavigation(e: React.MouseEvent<HTMLAnchorElement>) {
  if (e.currentTarget.getAttribute('href') === '#') {
    e.preventDefault();
  }
}
