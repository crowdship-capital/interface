const addUrlParam = (url: string, params: unknown): string => {
  const tmpBase = !url.startsWith('http') ? 'http://tmp-base.com' : undefined;
  const modifiedUrl = new URL(url || '', tmpBase);

  Object.keys(params).forEach((key) => {
    if (modifiedUrl.searchParams.has(key)) {
      modifiedUrl.searchParams.set(key, params[key]);
    } else {
      modifiedUrl.searchParams.append(key, params[key]);
    }
  });

  return modifiedUrl.toString().replace(tmpBase, '');
};

export default addUrlParam;
