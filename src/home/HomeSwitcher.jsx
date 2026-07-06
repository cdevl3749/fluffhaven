import { HOME_VERSION } from "./homeConfig";
import HomeClassic from "./HomeClassic";
import HomePonpon from "./HomePonpon";

export default function HomeSwitcher() {
  if (HOME_VERSION === "B") {
    return <HomePonpon />;
  }

  return <HomeClassic />;
}