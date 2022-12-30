import { createContext, useState } from "react";

export const DeviceDetectContext = createContext({
  isMobile: undefined,
  isDesktop: undefined,
});

export const DeviceDetectProvider = ({
  children,
  initialDeviceType = { isMobile: undefined, isDesktop: undefined },
}) => {
  const [deviceType] = useState(() => initialDeviceType);

  return (
    <DeviceDetectContext.Provider value={deviceType}>
      {children}
    </DeviceDetectContext.Provider>
  );
};
