import Download from "@components/download/download";
import Feature from "@components/feature/feature";
import Hero from "@components/hero/hero";
import { LANDING_FEATURES } from "@lib/constants";

export default function Landing() {
  return (
    <>
      <Hero />
      {LANDING_FEATURES.map((feature, index) => (
        <Feature 
          key={index}
          index={index}
          heading={feature.heading}
          subheading={feature.subheading}
          imageUrl={feature.imageUrl} 
          imageAltText={feature.imageAltText}
        />
        )
      )}
      <Download />
    </>
  );
}