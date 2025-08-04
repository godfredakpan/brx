import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Globe,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const offices = [
    {
      city: "Kent (Head Office)",
      country: "United Kingdom",
      address: "44 Strand Street, Sandwich",
      phone: "+44 7587 559462",
      email: "uk@brexitontravels.com"
    },
    // {
    //   city: "Toronto",
    //   country: "Canada",
    //   address: "Downtown Toronto, ON, Canada",
    //   phone: "+1 416 123 4567",
    //   email: "toronto@brexitontravels.com"
    // },
    // {
    //   city: "Sydney",
    //   country: "Australia",
    //   address: "CBD Sydney, NSW, Australia",
    //   phone: "+61 2 1234 5678",
    //   email: "sydney@brexitontravels.com"
    // },
    // {
    //   city: "London",
    //   country: "United Kingdom",
    //   address: "Central London, UK",
    //   phone: "+44 20 1234 5678",
    //   email: "london@brexitontravels.com"
    // }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak directly with our immigration experts",
      action: "Call Now: +44 7587 559462",
      available: "24/7 Support Available"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries and get detailed responses",
      action: "info@brexitontravels.com",
      available: "Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support through our live chat system",
      action: "Start Live Chat",
      available: "Available during business hours"
    },
    {
      icon: MapPin,
      title: "Office Visit",
      description: "Visit our offices for in-person consultation",
      action: "Book Appointment",
      available: "24+ Offices Worldwide"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Get In Touch With Our Experts
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to start your immigration journey? Our experienced consultants 
              are here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Multiple Ways to <span className="gradient-text">Reach Us</span>
            </h2>
            <p className="text-muted-foreground">
              Choose the most convenient way to connect with our immigration experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="luxury-card text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-primary font-semibold text-sm mb-2">
                    {method.action}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {method.available}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Business Hours */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Business Hours & Quick Info */}
            <div className="space-y-6">
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{schedule.day}</span>
                        <span className="font-medium text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Emergency consultations available 24/7 by appointment
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold">Quick Info</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Head Office</div>
                        <div className="text-muted-foreground">UK</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Direct Line</div>
                        <div className="text-muted-foreground">+44 7587 559462</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">info@brexitontravels.com</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Global Office</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              With offices across five continents, we're always close to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-lg">{office.city}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{office.country}</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1">Address</div>
                      <div className="text-muted-foreground">{office.address}</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <div className="text-primary">{office.phone}</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-primary">{office.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your city? We have 20+ more offices worldwide.
            </p>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              View All Locations
            </Badge>
          </div> */}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Urgent Immigration Assistance?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our emergency consultation service is available 24/7 for urgent immigration matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <Phone className="h-5 w-5" />
              <span>Emergency Line: +44 7587559462</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <MessageCircle className="h-5 w-5" />
              <span>24/7 Live Chat Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;