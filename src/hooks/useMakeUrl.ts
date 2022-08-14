const useMakeUrl = (): ((url: string, path: string) => string) => {
  return (url: string, path: string) => {
    const base = !url.startsWith('http')
      ? new URL(url, 'http://tmp-base.com')
      : new URL(url);

    const searchParams = base.search;
    console.log('res', `${base.pathname}/${path}${searchParams}`);

    return `${base.pathname}/${path}${searchParams}`;
  };
};

export default useMakeUrl;
