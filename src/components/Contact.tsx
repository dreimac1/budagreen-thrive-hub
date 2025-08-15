import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Contact us today to discuss your needs and discover how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">07039605097</p>
                    <p className="text-muted-foreground">09025490266</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@budagreenglobal.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">Starcade Shopping Mall No 4, 2nd Floor</p>
                    <p className="text-muted-foreground">Kachina Road Sabo, Kaduna</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Management Team</CardTitle>
                <CardDescription>Meet our experienced leadership team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">CEO/MD</p>
                    <p className="text-muted-foreground text-sm">BUJI ELISHA SAMAILA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">COO/Acting HR</p>
                    <p className="text-muted-foreground text-sm">NDAROT BUJI SAMAILA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Business Manager</p>
                    <p className="text-muted-foreground text-sm">NASIRU RILWAN</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Risk and Compliance</p>
                    <p className="text-muted-foreground text-sm">EJIRO EKPEDE</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">General Manager</p>
                    <p className="text-muted-foreground text-sm">NWOKOCHA GODSON</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Social Media Manager</p>
                    <p className="text-muted-foreground text-sm">CHRISTABEL WARAD KWAIBE</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" className="border-border/50 bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" className="border-border/50 bg-background/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email address" className="border-border/50 bg-background/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What is this about?" className="border-border/50 bg-background/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your requirements..." 
                    rows={4}
                    className="border-border/50 bg-background/50" 
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;