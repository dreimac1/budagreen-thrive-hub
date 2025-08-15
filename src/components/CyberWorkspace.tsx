import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Wifi, Shield, Clock, MapPin, Users } from "lucide-react";

const CyberWorkspace = () => {
  const features = [
    {
      icon: Zap,
      title: "24/7 Electricity",
      description: "Uninterrupted power supply with backup generators"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fiber optic connection with 99.9% uptime guarantee"
    },
    {
      icon: Shield,
      title: "Secure Environment",
      description: "Advanced security systems and access control"
    },
    {
      icon: Clock,
      title: "Round-the-Clock Access",
      description: "24/7 facility access for maximum flexibility"
    },
    {
      icon: MapPin,
      title: "Serene Location",
      description: "Quiet, peaceful environment for productive work"
    },
    {
      icon: Users,
      title: "Collaborative Spaces",
      description: "Modern meeting rooms and collaboration areas"
    }
  ];

  return (
    <section id="workspace" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Budagreen Cyber Workspace
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the perfect blend of technology and tranquility in our state-of-the-art cyber workspace. 
              Designed for productivity with 24-hour electricity and a serene environment that fosters creativity and focus.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card/30 border border-border/50">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                Book a Tour
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Pricing
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>
            <Card className="relative bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Workspace Features</CardTitle>
                <CardDescription>Everything you need for a productive work environment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Infrastructure Highlights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dedicated workstations with ergonomic furniture</li>
                    <li>• Climate-controlled environment</li>
                    <li>• Modern conference facilities</li>
                    <li>• 24/7 technical support</li>
                    <li>• Refreshment areas and break rooms</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Location Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Peaceful, distraction-free environment</li>
                    <li>• Ample parking space</li>
                    <li>• Easy accessibility</li>
                    <li>• Green surroundings for mental wellness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberWorkspace;