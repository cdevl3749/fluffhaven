import { HOME_VERSION } from "./homeConfig";

export default function HomeClassic({ children }) {
  if (HOME_VERSION !== "A") return null;

  return children;
}