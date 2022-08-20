const useMakeUrl = (): ((url: string, path?: string) => string) => {
  return (url: string, path: string) => {
    const { search } = window.location;

    if (url === '/') {
      return path ? `/${path}${search}` : `/${search}`;
    }

    const base = !url.startsWith('http')
      ? new URL(url, 'http://tmp-base.com')
      : new URL(url);

    return `${base.pathname}/${path}${search}`;
  };
};

export default useMakeUrl;
