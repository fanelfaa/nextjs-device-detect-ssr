import { DeviceDetectProvider } from "../contexts/DeviceDetectProvider";

function MyApp({ Component, pageProps }) {
  return (
    <DeviceDetectProvider initialDeviceType={pageProps?.deviceType ?? {}}>
      <Component {...pageProps} />
    </DeviceDetectProvider>
  );
}

export default MyApp;
