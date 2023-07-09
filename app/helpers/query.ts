import queryString from "query-string";

export const stringifyQuery = (
  object?: object,
  options?: queryString.StringifyOptions
) => {
  if (object) {
    const query = queryString.stringify(object, {
      skipNull: true,
      skipEmptyString: true,
      ...options,
    });

    return query ? `?${query}` : "";
  }

  return "";
};
