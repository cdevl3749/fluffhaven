import { HOME_VERSION } from "./homeConfig";
import HomeClassic from "./HomeClassic";
import HomePonpon from "./HomePonpon";
import HomeUS from "./HomeUS";

export default function HomeSwitcher({ onShopPet }) {
  if (HOME_VERSION === "C") {
    return <HomeUS onShopPet={onShopPet} />;
  }

  if (HOME_VERSION === "B") {
    return <HomePonpon />;
  }

  return <HomeClassic />;
}
