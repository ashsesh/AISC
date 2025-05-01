
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileSpreadsheet, CircleCheck, Brain } from 'lucide-react';

const ForProvidersSection = () => {
  return (
    <section className="py-16" id="for-providers">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">For Healthcare Providers</h2>
            <p className="text-xl text-muted-foreground">
              Enhance your practice with AI-powered decision support that complements your clinical expertise.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileSpreadsheet className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Evidence-Based Recommendations</h3>
                  <p className="text-muted-foreground">Access data-driven insights from thousands of similar cases to inform your prescribing decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CircleCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Improved Patient Satisfaction</h3>
                  <p className="text-muted-foreground">Increase patient trust and confidence by reducing the number of medication trials required.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Brain className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Human-AI Collaboration</h3>
                  <p className="text-muted-foreground">Our technology doesn't replace your expertise—it enhances it, allowing you to make more informed decisions.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="gap-2">
              Join Our Provider Network <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-muted rounded-xl p-6 lg:p-8">
            <h3 className="text-2xl font-bold mb-6">Provider Dashboard Preview</h3>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-primary/90 text-white p-4 rounded-t-lg">
                  <div className="font-medium">Patient Recommendation Report</div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Patient Profile</div>
                    <div className="font-medium">34-year-old female with moderate depression and anxiety</div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground">Top Recommended Medications</div>
                    <ol className="space-y-2 mt-2">
                      <li className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="font-medium">1. Sertraline</span>
                          <span className="text-sm text-muted-foreground">50-100mg daily</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium py-1 px-2 rounded">87% match</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="font-medium">2. Escitalopram</span>
                          <span className="text-sm text-muted-foreground">10mg daily</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium py-1 px-2 rounded">75% match</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="font-medium">3. Venlafaxine</span>
                          <span className="text-sm text-muted-foreground">75mg daily</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium py-1 px-2 rounded">68% match</span>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground">Recommendation Rationale</div>
                    <p className="text-sm">Based on symptom profile, medical history, and response patterns in similar patients, with consideration for minimizing side effects based on patient preferences.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProvidersSection;
