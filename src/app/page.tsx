import Intro from "@/components/Intro/Intro";
import { SectionDivider } from "@/components/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <SectionDivider />
    </main>
  );
}
