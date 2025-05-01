
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Brain, Activity } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Guesswork Over Precision",
      description: "Providers rely on personal experience rather than predictive data when prescribing psychiatric medication."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Extended Trial Periods",
      description: "Patients must wait 4-8 weeks to determine if a medication is effective, often enduring difficult side effects."
    },
    {
      icon: <Activity className="h-10 w-10 text-primary" />,
      title: "Repetitive Cycles",
      description: "If a medication fails, patients restart the entire process with a new drug, prolonging suffering and recovery."
    }
  ];

  return (
    <section className="py-16 bg-muted" id="about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Current Challenge</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The traditional psychiatric medication prescription process is inefficient, time-consuming, and emotionally taxing for patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
