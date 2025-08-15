import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Building, 
  FileCheck, 
  Zap, 
  FolderOpen, 
  Globe, 
  Leaf, 
  GraduationCap,
  ShoppingCart 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Investment Solutions",
      description: "Strategic investment opportunities with guaranteed returns and portfolio diversification.",
      icon: TrendingUp,
      features: ["Portfolio Management", "Risk Assessment", "Strategic Planning"]
    },
    {
      title: "SME Support",
      description: "Comprehensive support for small and medium enterprises to scale their operations.",
      icon: Building,
      features: ["Business Development", "Operational Support", "Market Expansion"]
    },
    {
      title: "Proof of Funds",
      description: "Verified financial documentation and proof of funds for international transactions.",
      icon: FileCheck,
      features: ["Documentation", "Verification", "International Standards"]
    },
    {
      title: "Quick Finance",
      description: "Fast-track financing solutions with minimal paperwork and quick approvals.",
      icon: Zap,
      features: ["Rapid Processing", "Flexible Terms", "Competitive Rates"]
    },
    {
      title: "Project Funds",
      description: "Specialized funding for large-scale projects and infrastructure development.",
      icon: FolderOpen,
      features: ["Large Scale Funding", "Infrastructure Focus", "Long-term Support"]
    },
    {
      title: "E-Business Solutions",
      description: "Digital transformation and e-commerce solutions for modern businesses.",
      icon: Globe,
      features: ["Digital Strategy", "E-commerce Platform", "Online Marketing"]
    },
    {
      title: "Agriculture Services",
      description: "Sustainable farming solutions and agricultural technology implementation.",
      icon: Leaf,
      features: ["Sustainable Farming", "Technology Integration", "Crop Management"]
    },
    {
      title: "Training & Consultancy",
      description: "Professional training programs and expert consultancy services.",
      icon: GraduationCap,
      features: ["Professional Training", "Expert Consultation", "Skill Development"]
    },
    {
      title: "Farm Produce Sales",
      description: "Direct sales of fresh farm produce with quality assurance and timely delivery.",
      icon: ShoppingCart,
      features: ["Fresh Produce", "Quality Assurance", "Direct Sales"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions across finance, agriculture, and technology to drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;