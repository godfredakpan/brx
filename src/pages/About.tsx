import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Globe, 
  Award, 
  Target,
  CheckCircle,
  Building,
  Calendar,
  Trophy
} from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2010", event: "Founded in Dubai with a vision to excel in immigration services" },
    { year: "2015", event: "Expanded to 12 global offices across 3 continents" },
    { year: "2018", event: "Reached milestone of 10,000+ successful immigration cases" },
    { year: "2020", event: "Launched digital transformation initiatives during pandemic" },
    { year: "2022", event: "Opened 24+ offices worldwide with 500+ team members" },
    { year: "2024", event: "Achieved industry leadership with 323+ immigration consultants" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every case, ensuring the highest success rates in the industry."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your immigration dreams are our priority. We provide personalized solutions for every client."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Transparent processes, honest advice, and ethical practices form the foundation of our work."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With 24+ offices worldwide, we bring local expertise with global immigration knowledge."
    }
  ];

  const leadership = [
    {
      name: "Sarah Al-Mansouri",
      position: "Chief Executive Officer",
      experience: "15+ years in immigration law",
      description: "Leading Brexiton Travels  with strategic vision and commitment to excellence."
    },
    {
      name: "Michael Chen",
      position: "Director of Operations",
      experience: "12+ years in international business",
      description: "Overseeing global operations and ensuring seamless service delivery across all offices."
    },
    {
      name: "Priya Patel",
      position: "Head of Client Services",
      experience: "10+ years in client relations",
      description: "Ensuring exceptional client experience and maintaining our high satisfaction standards."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Leading Immigration Experts Since 2010
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Brexiton Travels </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are the most trusted immigration consultancy firm based in UK, 
              with a proven track record of helping thousands achieve their immigration dreams 
              across five continents.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="luxury-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide world-class immigration services that transform lives by connecting 
                  people with opportunities across the globe. We believe that everyone deserves 
                  the chance to build a better future, and we're here to make that journey as 
                  smooth and successful as possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Exceptional service delivery
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Transparent and ethical practices
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Personalized immigration solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="luxury-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To be the world's most trusted and successful immigration consultancy, 
                  recognized for our expertise, integrity, and commitment to helping individuals 
                  and families achieve their international mobility goals with confidence and ease.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Global leadership in immigration services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Innovative technology solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Continuous industry advancement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="luxury-card text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From a small Dubai-based firm to a global immigration leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform">
                      {milestone.year.slice(2)}
                    </div>
                  </div>
                  <Card className="luxury-card flex-1 group-hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="font-bold text-primary">{milestone.year}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the experienced professionals who guide Brexiton Travels 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="luxury-card text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-primary font-semibold mb-2">{leader.position}</p>
                    <Badge variant="secondary" className="mb-4">
                      {leader.experience}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="opacity-90">Successful Cases</div>
            </div>
            <div className="text-center">
              <Building className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-2">24+</div>
              <div className="opacity-90">Global Offices</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Team Members</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through your immigration journey 
            with the same dedication and expertise that has made us industry leaders.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg font-semibold">
            Start Your Journey Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;