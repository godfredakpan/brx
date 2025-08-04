import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Star,
  MapPin,
  Clock
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear progression paths with regular performance reviews and promotion opportunities"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work across our 24+ offices worldwide with international transfer possibilities"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous training programs, certifications, and skill development opportunities"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, remote work options, and comprehensive leave policies"
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, health insurance, and retirement benefits"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with diverse, passionate professionals from around the world"
    }
  ];

  const openPositions = [
    {
      title: "Senior Immigration Consultant",
      department: "Consulting",
      location: "UK",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead complex immigration cases and mentor junior consultants while maintaining high client satisfaction rates.",
      skills: ["Immigration Law", "Client Management", "Team Leadership", "RCIC Certification"]
    },
    {
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Toronto, Canada",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive business growth through strategic partnerships and client acquisition in the Canadian market.",
      skills: ["Business Development", "Sales Strategy", "Client Relations", "Market Analysis"]
    },
    {
      title: "Case Processing Officer",
      department: "Operations",
      location: "Sydney, Australia",
      type: "Full-time",
      experience: "2+ years",
      description: "Process immigration applications with attention to detail and ensure compliance with regulations.",
      skills: ["Document Review", "Compliance", "Attention to Detail", "Time Management"]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop and execute digital marketing campaigns to enhance brand presence and lead generation.",
      skills: ["Digital Marketing", "SEO/SEM", "Social Media", "Analytics"]
    },
    {
      title: "Client Relations Coordinator",
      department: "Customer Service",
      location: "UK",
      type: "Full-time",
      experience: "1+ years",
      description: "Provide exceptional customer service and support to clients throughout their immigration journey.",
      skills: ["Customer Service", "Communication", "Problem Solving", "Multilingual"]
    },
    {
      title: "Immigration Paralegal",
      department: "Legal",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2+ years",
      description: "Assist lawyers and consultants with case preparation, documentation, and legal research.",
      skills: ["Legal Research", "Documentation", "Immigration Law", "Case Management"]
    }
  ];

  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do"
    },
    {
      title: "Integrity",
      description: "Honesty and transparency in all our professional relationships"
    },
    {
      title: "Innovation",
      description: "Continuously improving our services through technology and creativity"
    },
    {
      title: "Diversity",
      description: "Embracing different perspectives to strengthen our global team"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Senior Immigration Consultant",
      location: "Toronto Office",
      quote: "Working at Brexiton Travels  has been incredibly rewarding. The company truly invests in its employees' growth and provides opportunities to make a real difference in people's lives.",
      years: "3 years"
    },
    {
      name: "Ahmed Al-Rashid",
      position: "Business Development Manager",
      location: "Dubai Office",
      quote: "The multicultural environment and global exposure at Brexiton Travels  have accelerated my career growth beyond expectations. It's more than just a job - it's a mission.",
      years: "5 years"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Join Our Global Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your <span className="gradient-text">Career</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the leading immigration consultancy firm and help transform lives 
              while building an exceptional career in a dynamic, global environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Work at <span className="gradient-text">Brexiton Travels </span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Be part of a company that values growth, diversity, and making a positive impact on people's lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="luxury-card group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Current <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting career opportunities across our global offices
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold">{position.title}</h3>
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="secondary">{position.department}</Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {position.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-3">
                      <Button className="w-full">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                      <div className="text-xs text-muted-foreground text-center">
                        <Clock className="h-3 w-3 inline mr-1" />
                        Posted 2 days ago
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a perfect fit? We're always looking for exceptional talent.
            </p>
            <Button variant="outline">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform">
                    {value.title.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Team Says</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our employees about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-primary">{testimonial.position}</div>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.years}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process to help you join our team
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold mb-2">Apply Online</h3>
                <p className="text-muted-foreground text-sm">Submit your application through our career portal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold mb-2">Initial Review</h3>
                <p className="text-muted-foreground text-sm">Our HR team reviews your application and experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold mb-2">Interview Process</h3>
                <p className="text-muted-foreground text-sm">Multiple interview rounds with team members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold mb-2">Welcome Aboard</h3>
                <p className="text-muted-foreground text-sm">Comprehensive onboarding and integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join a team that's passionate about helping people achieve their dreams 
            while building your own successful career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Briefcase className="mr-2 h-5 w-5" />
              Browse All Positions
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;