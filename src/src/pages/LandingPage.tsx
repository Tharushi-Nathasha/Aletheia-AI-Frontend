import { PageTransition } from '../components/PageTransition';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
export function LandingPage() {
  return (
    <PageTransition>
      <div className="space-y-12">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </div>
    </PageTransition>);

}