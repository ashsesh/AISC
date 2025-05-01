
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SolutionSection = () => {
  return (
    <section className="py-16" id="how-it-works">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our AI-Powered Solution</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're improving mental health treatment through advanced AI that makes psychiatric medication selection smarter and more personalized.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-1"></div>
              <div className="bg-card p-6 space-y-6">
                <div className="space-y-4">
                  <div className="bg-muted rounded-md p-4">
                    <div className="font-medium">Patient Data</div>
                    <div className="text-sm text-muted-foreground">Demographics, Symptoms, Medical History, Genetics</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">↓</div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-md p-4">
                    <div className="font-medium text-primary">AI Analysis Engine</div>
                    <div className="text-sm text-muted-foreground">Pattern Recognition, Outcome Prediction, Risk Assessment</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">↓</div>
                  </div>
                  
                  <div className="bg-secondary/10 border border-secondary/20 rounded-md p-4">
                    <div className="font-medium text-secondary">Personalized Recommendations</div>
                    <div className="text-sm text-muted-foreground">Medication Options, Dosage Guidance, Expected Outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">How Our Technology Works</h3>
            <p>
              Our AI platform analyzes comprehensive patient data to provide evidence-based medication recommendations, improving the precision of psychiatric care.
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">1</div>
                <div>
                  <span className="font-medium">Data Collection</span>
                  <p className="text-muted-foreground">We gather comprehensive patient data including medication history, symptoms, lifestyle factors, genetic information, and biomarkers.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">2</div>
                <div>
                  <span className="font-medium">AI Analysis</span>
                  <p className="text-muted-foreground">Our algorithms analyze patterns across thousands of similar cases to identify which medications are most likely to be effective for each individual.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">3</div>
                <div>
                  <span className="font-medium">Provider Decision Support</span>
                  <p className="text-muted-foreground">Healthcare providers receive data-driven recommendations to guide their prescribing decisions, combining AI insights with clinical expertise.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
