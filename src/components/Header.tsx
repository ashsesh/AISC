
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">EmpathyAI Prescribe</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
          <a href="#for-providers" className="text-muted-foreground hover:text-foreground transition-colors">For Providers</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
