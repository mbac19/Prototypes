import Layout from "./layout";
import MainPane from "./main_pane";
import SidePane from "./side_pane";
import Toolbar from "./toolbar";

export default function App() {
  return (
    <Layout
      MainPane={<MainPane />}
      SidePane={<SidePane />}
      Toolbar={<Toolbar />}
    />
  );
}
