import { DeviceType } from "../components/DeviceType";

export default function Index() {
  return (
    <div>
      <DeviceType />
    </div>
  );
}

export function getServerSideProps({ req }) {
  const data = `Data from server: ${Date.now()}`;
  const deviceType = getDeviceFromReq(req);

  return {
    props: {
      initialData: data,
      deviceType,
    },
  };
}
