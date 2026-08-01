import { getPackageStats } from "@/lib/pub-dev";
import PackagesGrid from "./packages-grid";

/** Server component: pulls live pub.dev stats (revalidated daily) and hands
 *  them to the client grid for animation. */
export default async function Packages() {
  const packages = await getPackageStats();

  return <PackagesGrid packages={packages} />;
}
