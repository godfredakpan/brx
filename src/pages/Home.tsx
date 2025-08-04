import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import { 
  Globe, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Calendar,
  Shield,
  Target,
  Star
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const stats = [
    { number: "323+", label: "Immigration Consultants", icon: Users },
    { number: "144+", label: "Processing Officers", icon: Shield },
    { number: "43+", label: "Managerial Professionals", icon: Target },
    { number: "24+", label: "Global Offices", icon: Globe },
  ];

  const services = [
    {
      title: "Permanent Residency",
      description: "Expert guidance for obtaining permanent residency in your preferred destination",
      features: ["Express Entry", "Provincial Nomination", "Family Sponsorship"]
    },
    {
      title: "Business Visas",
      description: "Comprehensive business immigration solutions for entrepreneurs and investors",
      features: ["Investor Programs", "Start-up Visas", "Self-employed Persons"]
    },
    {
      title: "Student Visas",
      description: "Complete support for international students pursuing education abroad",
      features: ["Study Permits", "Post-graduation Work", "Pathway to PR"]
    },
    {
      title: "Work Permits",
      description: "Professional assistance for temporary and permanent work authorization",
      features: ["LMIA Applications", "Work Permits", "Employer Services"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "UK",
      rating: 5,
      text: "Brexiton Travels  made my Canadian PR dream come true. Their expertise and professional guidance throughout the process was exceptional."
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "The team helped my family immigrate to Australia seamlessly. Their attention to detail and constant support made all the difference."
    },
    {
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      text: "Outstanding service for my UK business visa. They handled everything professionally and kept me informed at every step."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              Leading Global Immigration Firm in UK
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Brexiton Travels </span>
              <br />
              <span className="text-foreground">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Based in Dubai, we are the leading global immigration firm with over 323 consultants 
              operating from 24+ offices across five continents, offering comprehensive immigration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.location.href = "/services"}
                className="px-8 py-4 text-lg font-semibold bg-background/10 backdrop-blur-sm"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal/Section */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowContactForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Immigration Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive immigration solutions tailored to your unique needs and aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="luxury-card group cursor-pointer">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-6 p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Success stories from families who achieved their immigration dreams with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful clients who trusted Brexiton Travels  
            to make their immigration dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
            >
              Call Now: +44 7587 559462
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;