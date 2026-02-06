import Alone from "@/components/Alone";
import Chat from "@/components/chat";
import FAQs from "@/components/FAQs";
import Hero from "@/components/hero";
import MySpecialties from "@/components/MySpecialties";
import Professional from "@/components/Professional";
import Second from "@/components/LiveCalm";
import Started from "@/components/Started";
import Office from "@/components/Office";

export default function Home() {
  return (
    <>
      <div className="w-full bg-background text-primary font-sans">
        <Hero />
        <Second />
        <MySpecialties />
        <Alone />
        <Chat />
        <Office />
        <FAQs />
        <Professional />
        <Started />
      </div>
    </>
  );
}
