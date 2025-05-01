
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Heart, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Higher First-Try Success",
      description: "Increase the likelihood of prescribing an effective medication on the first attempt."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Reduced Wait Times",
      description: "Minimize the time patients spend suffering while waiting to find an effective treatment."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Better Patient Outcomes",
      description: "Improve recovery rates and quality of life through faster symptom relief."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Fewer Adverse Effects",
      description: "Reduce exposure to unnecessary side effects from ineffective medications."
    }
  ];

  return (
    <section className="py-16 bg-muted" id="benefits">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits for Patients & Providers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-driven approach delivers measurable improvements in psychiatric care efficiency and effectiveness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="feature-card h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
