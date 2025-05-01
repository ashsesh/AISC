
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This AI system has transformed how I prescribe psychiatric medications. My patients are finding relief much faster, with fewer failed medication trials.",
      author: "Dr. Sarah Chen",
      role: "Psychiatrist, Mercy Medical Center"
    },
    {
      quote: "After struggling with depression for years and trying multiple medications, the AI recommended one that finally worked for me. It's changed my life.",
      author: "Michael D.",
      role: "Patient"
    },
    {
      quote: "As a healthcare administrator, I've seen firsthand how this technology has improved patient outcomes while reducing costs associated with ineffective treatments.",
      author: "Robert Johnson",
      role: "Healthcare Administrator"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what healthcare professionals and patients are saying about our technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="feature-card h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
