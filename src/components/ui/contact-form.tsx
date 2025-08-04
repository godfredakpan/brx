import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Our immigration experts will contact you within 24 hours.",
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <div className="luxury-card p-6 rounded-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 gradient-text">Get Connected with Immigration Expert</h3>
        <p className="text-muted-foreground">
          Fill out the form below and our experienced consultants will reach out to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              required
              className="bg-secondary border-border focus:border-primary"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-secondary border-border focus:border-primary"
              placeholder="+971 XX XXX XXXX"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-secondary border-border focus:border-primary"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            name="occupation"
            className="bg-secondary border-border focus:border-primary"
            placeholder="Your current occupation"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination of Preference</Label>
          <Select name="destination">
            <SelectTrigger className="bg-secondary border-border focus:border-primary">
              <SelectValue placeholder="Select your preferred destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            className="bg-secondary border-border focus:border-primary resize-none"
            placeholder="Tell us about your immigration goals and any specific questions you have..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Call Me
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;