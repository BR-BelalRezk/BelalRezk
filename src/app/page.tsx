import { Section } from "@/exports";
import { navbar } from "@/constants";
export default function Home() {
  return (
    <main>
      {navbar.map((item) => (
        <Section key={item.id} id={item.id}>
          <item.element />
        </Section>
      ))}
    </main>
  );
}
