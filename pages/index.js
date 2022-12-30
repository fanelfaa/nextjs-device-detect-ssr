import Link from "next/link";
import { useDeviceType } from "../hooks/useDeviceType";

export default function Index() {
  const deviceType = useDeviceType();

  return (
    <div>
      <Link href={"/ssr"}>
        <a>Navigate</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = () => ({
  props: { initialData: "Ayam Goreng" },
});
