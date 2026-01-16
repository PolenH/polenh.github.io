import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState, useRef } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const statusDiv = document.getElementById('contact-status');
    const button = form.querySelector('button[type="submit"]');

    if (statusDiv) {
      statusDiv.innerHTML = '';
    }

    // Show loading state
    setIsSubmitting(true);
    if (button) {
      button.textContent = 'Sending...';
    }

    // Show success message
    setSubmitStatus('success');
    if (statusDiv) {
      statusDiv.textContent = 'Message sent! I\'ll get back to you soon.';
    }

    // Reset form after a short delay
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        if (statusDiv) {
          statusDiv.textContent = '';
        }
      }, 3000);
    }, 500);
  };

  return (
    <section className="py-20 px-4 bg-secondary/30" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Me</h3>
              <p className="text-sm text-muted-foreground">Let's connect and discuss opportunities</p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/hughapalin@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-input border-border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-input border-border"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                className="bg-input border-border min-h-[150px] resize-none"
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                <div id="contact-status">Message sent! I'll get back to you soon.</div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                Failed to send message. Please try again.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
