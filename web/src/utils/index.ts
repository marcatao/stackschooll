export const getRouteFromPathname = (pathname: string): string => {
  const position = pathname.lastIndexOf("/") + 1;
  const route = pathname.substring(position);
  return route;
};

export const getMaskIdentification = (profile: string): string => {
  return profile === "escola" ? "99.999.999/9999-99" : "99.999.999-99";
};

export const getLabelIdentification = (profile: string): string => {
  return profile === "escola" ? "CNPJ" : "CPF";
};
