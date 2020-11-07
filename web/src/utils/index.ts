export const getRouteFromPathname = (pathname: string): string => {
  const position = pathname.lastIndexOf("/") + 1;
  const route = pathname.substring(position);
  return route;
};
