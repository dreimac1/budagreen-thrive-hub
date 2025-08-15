import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-primary/10 p-4 rounded-full">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Budagreen Global
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through comprehensive financial services, sustainable agriculture solutions, and cutting-edge technology infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary group">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Financial Excellence</h3>
              <p className="text-muted-foreground">Comprehensive investment and financing solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Agricultural Innovation</h3>
              <p className="text-muted-foreground">Sustainable farming and produce solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Technology Hub</h3>
              <p className="text-muted-foreground">24/7 cyber workspace with premium facilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;