export const detectDevice = (userAgent) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindowsMobile = () => Boolean(userAgent.match(/IEMobile|WPDesktop/i));
  const isBB = () => Boolean(userAgent.match(/BlackBerry/i));
  const isSSR = () => Boolean(userAgent.match(/SSR/i));
  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindowsMobile() || isBB());
  const isDesktop = () => Boolean(!isMobile() && !isSSR());
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
};

const getUaFromAppContext = (appContext) => {
  const { ctx } = appContext;
  const ua = ctx.req?.headers["user-agent"] || navigator?.userAgent || "";
  return ua;
};

const getUaFromReq = (req) => {
  const ua = req?.headers["user-agent"] || navigator?.userAgent || "";
  return ua;
};

export const getDeviceFromAppContext = (appContext) => {
  const ua = getUaFromAppContext(appContext);

  const deviceTypes = detectDevice(ua);

  const isMobile = deviceTypes.isMobile();
  const isDesktop = deviceTypes.isDesktop();

  return { isMobile, isDesktop };
};

export const getDeviceFromReq = (req) => {
  const ua = getUaFromReq(req);
  const deviceTypes = detectDevice(ua);

  const isMobile = deviceTypes.isMobile();
  const isDesktop = deviceTypes.isDesktop();

  return { isMobile, isDesktop };
};
