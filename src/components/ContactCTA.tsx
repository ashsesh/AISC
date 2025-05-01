
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Psychiatric Care?</h2>
            <p className="text-muted-foreground">
              Join our network of healthcare providers using AI to make better medication decisions for their patients.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Dr. Jane Smith" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="doctor@hospital.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" placeholder="Hospital or Practice Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select id="role" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select your role</option>
                  <option value="psychiatrist">Psychiatrist</option>
                  <option value="psychologist">Psychologist</option>
                  <option value="nurse_practitioner">Psychiatric Nurse Practitioner</option>
                  <option value="physician_assistant">Physician Assistant</option>
                  <option value="administrator">Healthcare Administrator</option>
                  <option value="other">Other Healthcare Professional</option>
                </select>
              </div>
              
              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full">Request Information</Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground pt-2">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
