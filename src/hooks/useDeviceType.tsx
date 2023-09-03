import { useState, useEffect } from "react";

export enum DeviceType {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}
export const DEVICE_RANGE = {
  [DeviceType.DESKTOP]: [961, 10000],
  [DeviceType.TABLET]: [601, 960],
  [DeviceType.MOBILE]: [0, 600],
};

interface DeviceTypeHook {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function useDeviceType(): DeviceTypeHook {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.DESKTOP);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= DEVICE_RANGE[DeviceType.DESKTOP][0]) {
        setDeviceType(DeviceType.DESKTOP);
      } else if (screenWidth >= DEVICE_RANGE[DeviceType.TABLET][0]) {
        setDeviceType(DeviceType.TABLET);
      } else {
        setDeviceType(DeviceType.MOBILE);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = deviceType === DeviceType.MOBILE;
  const isTablet = deviceType === DeviceType.TABLET;
  const isDesktop = deviceType === DeviceType.DESKTOP;

  return { deviceType, isMobile, isTablet, isDesktop };
}

export default useDeviceType;
