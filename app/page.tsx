import { MenuPanel } from "@/components/menuPanel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
        <MenuPanel title="Dashboard" />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <main>
          <h1>Dashboard Main Content</h1>
          {/* Add your dashboard content here */}
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
