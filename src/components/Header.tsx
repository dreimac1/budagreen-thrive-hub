import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4380115b-88dd-4dae-8f3e-0f2011840352.png" 
              alt="Budagreen Global Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#workspace" className="text-foreground hover:text-primary transition-colors">Cyber Workspace</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default" className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;