import { useContext, useEffect, useState } from "react";
import { isMobile as isMobileC, isBrowser } from "react-device-detect";
import { DeviceDetectContext } from "../contexts/DeviceDetectProvider";

export const useDeviceType = () => {
  const initialDeviceType = useContext(DeviceDetectContext);

  const [deviceType, setDeviceType] = useState(() => initialDeviceType);

  useEffect(() => {
    setDeviceType(() => ({
      isMobile: isMobileC,
      isDesktop: isBrowser,
    }));
    // will only run if js enable
  }, [isMobileC, isBrowser]);

  return deviceType;
};
