import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Target
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Permanent Residency",
      description: "Your pathway to permanent residency in your dream destination country",
      features: [
        "Express Entry Programs",
        "Provincial Nominee Programs (PNP)",
        "Family Class Sponsorship",
        "Skilled Worker Programs",
        "Investor Immigration Programs"
      ],
      countries: ["Canada", "Australia", "New Zealand", "Germany"],
      processTime: "12-24 months",
      successRate: "96%"
    },
    {
      icon: Briefcase,
      title: "Business & Investment Visas",
      description: "Comprehensive business immigration solutions for entrepreneurs and investors",
      features: [
        "Start-up Visa Programs",
        "Investor Visa Programs",
        "Self-employed Persons Program",
        "Business Visitor Visas",
        "Intra-company Transfer Programs"
      ],
      countries: ["USA", "UK", "Canada", "Australia"],
      processTime: "6-18 months",
      successRate: "94%"
    },
    {
      icon: GraduationCap,
      title: "Student Visas",
      description: "Complete support for international students pursuing education abroad",
      features: [
        "Study Permit Applications",
        "Post-graduation Work Permits",
        "Pathway to Permanent Residency",
        "Education Counseling",
        "University Application Support"
      ],
      countries: ["Canada", "UK", "Australia", "USA"],
      processTime: "2-4 months",
      successRate: "98%"
    },
    {
      icon: Users,
      title: "Work Permits",
      description: "Professional assistance for temporary and permanent work authorization",
      features: [
        "Labour Market Impact Assessment (LMIA)",
        "Temporary Foreign Worker Program",
        "International Mobility Program",
        "Employer Compliance Services",
        "Work Permit Extensions"
      ],
      countries: ["Canada", "USA", "UK", "Australia"],
      processTime: "3-8 months",
      successRate: "95%"
    }
  ];

  const additionalServices = [
    {
      title: "Visitor Visas",
      description: "Tourist and family visit visa applications",
      icon: Globe
    },
    {
      title: "Document Assessment",
      description: "Professional credential evaluation services",
      icon: Award
    },
    {
      title: "Language Test Preparation",
      description: "IELTS, TOEFL, and other language test coaching",
      icon: GraduationCap
    },
    {
      title: "Settlement Services",
      description: "Post-landing support and settlement assistance",
      icon: Users
    },
    {
      title: "Appeal Services",
      description: "Immigration appeal and review assistance",
      icon: Shield
    },
    {
      title: "Consultation Services",
      description: "Expert immigration advice and case evaluation",
      icon: Target
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free assessment of your immigration profile and eligibility evaluation"
    },
    {
      step: "02",
      title: "Documentation",
      description: "Comprehensive document preparation and verification process"
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Professional application submission with complete documentation"
    },
    {
      step: "04",
      title: "Follow-up & Support",
      description: "Continuous case monitoring and client support throughout the process"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Comprehensive Immigration Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From permanent residency to business visas, we provide end-to-end immigration 
              services tailored to your unique goals and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="luxury-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="mb-6">
                        <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-semibold mb-4 text-lg">What's Included:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full sm:w-auto">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-secondary p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Popular Destinations</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.countries.map((country, idx) => (
                              <Badge key={idx} variant="outline" className="bg-background">
                                {country}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-background rounded-lg">
                            <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-sm text-muted-foreground mb-1">Process Time</div>
                            <div className="font-semibold">{service.processTime}</div>
                          </div>
                          <div className="text-center p-4 bg-background rounded-lg">
                            <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
                            <div className="font-semibold">{service.successRate}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support services to complement your immigration journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="luxury-card group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4 text-primary hover:text-primary/80">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined, transparent process designed to maximize your success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Brexiton Travels ?</h2>
            <p className="text-xl opacity-90">
              Unmatched expertise, proven results, and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">323+</div>
              <div className="opacity-90">Immigration Consultants</div>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">24+</div>
              <div className="opacity-90">Global Offices</div>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">96%</div>
              <div className="opacity-90">Average Success Rate</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">15K+</div>
              <div className="opacity-90">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Immigration Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert consultants are ready to evaluate your case and provide 
            personalized guidance for your immigration goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;