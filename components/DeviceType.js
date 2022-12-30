import { useEffect } from "react";
import { useDeviceType } from "../hooks/useDeviceType";

export const DeviceType = () => {
  const deviceType = useDeviceType();

  return <div>{JSON.stringify(deviceType)}</div>;
};
