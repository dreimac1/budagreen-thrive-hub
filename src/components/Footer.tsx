import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/4380115b-88dd-4dae-8f3e-0f2011840352.png" 
                alt="Budagreen Global Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering businesses through comprehensive financial services, sustainable agriculture solutions, 
              and cutting-edge technology infrastructure.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Leaf className="h-4 w-4 text-primary" />
              <span>Committed to sustainable business practices</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Investment Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SME Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quick Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agriculture Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cyber Workspace</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News & Updates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Budagreen Global. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;