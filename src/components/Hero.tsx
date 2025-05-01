
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">AI-Powered Precision</span> in Psychiatric Medication
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Transforming mental health treatment by reducing the trial-and-error approach to medication selection through predictive AI technology.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              Request Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
