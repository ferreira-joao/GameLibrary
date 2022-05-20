import {
  SiPlaystation,
  SiXbox,
  SiNintendo,
  SiPcgamingwiki,
  SiApple,
  SiApplearcade,
} from "react-icons/si";

export function renderIconNav(console: string) {
  switch (console) {
    case "playstation":
      return (
        <SiPlaystation size={20} color="#FFF" style={{ marginRight: 5 }} />
      );
    case "xbox":
      return <SiXbox size={20} color="#FFF" style={{ marginRight: 5 }} />;
    case "nintendo":
      return <SiNintendo size={20} color="#FFF" style={{ marginRight: 5 }} />;
    case "pc":
      return (
        <SiPcgamingwiki size={20} color="#FFF" style={{ marginRight: 5 }} />
      );
    case "mac":
      return <SiApple size={20} color="#FFF" style={{ marginRight: 5 }} />;
    default:
      return (
        <SiApplearcade size={20} color="#FFF" style={{ marginRight: 5 }} />
      );
  }
}
