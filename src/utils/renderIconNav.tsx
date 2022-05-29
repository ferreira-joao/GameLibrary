import {
  SiPlaystation,
  SiXbox,
  SiNintendo,
  SiPcgamingwiki,
  SiAndroid,
  SiIos,
  SiApple,
  SiLinux,
  SiSega,
  SiAtari,
  SiApplearcade,
} from "react-icons/si";

export function renderIconNav(console: string) {
  switch (console) {
    case "playstation":
      return (
        <SiPlaystation size={15} color="#FFF" style={{ marginRight: 5 }} />
      );
    case "xbox":
      return <SiXbox size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "nintendo":
      return <SiNintendo size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "pc":
      return (
        <SiPcgamingwiki size={15} color="#FFF" style={{ marginRight: 5 }} />
      );
    case "android":
      return <SiAndroid size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "ios":
      return <SiIos size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "mac":
      return <SiApple size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "linux":
      return <SiLinux size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "sega":
      return <SiSega size={15} color="#FFF" style={{ marginRight: 5 }} />;
    case "atari":
      return <SiAtari size={15} color="#FFF" style={{ marginRight: 5 }} />;
    default:
      return (
        <SiApplearcade size={15} color="#FFF" style={{ marginRight: 5 }} />
      );
  }
}
