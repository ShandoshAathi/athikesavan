import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate sending
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", details: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Contact Me
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-2 space-y-6 fade-in-up">
            <div className="glass rounded-2xl p-8 space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's build something amazing together. Feel free to reach out!
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:shandosh6381aathi@gmail.com"
                    className="text-foreground hover:text-primary transition-colors text-sm"
                  >
                    shandosh6381aathi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+918883806053"
                    className="text-foreground hover:text-primary transition-colors text-sm"
                  >
                    +91 8883806053
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground text-sm">Coimbatore, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/ShandoshAathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors text-sm"
                  >
                    github.com/ShandoshAathi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 fade-in-up" style={{ transitionDelay: "0.15s" }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground block mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground block mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="details" className="text-sm text-muted-foreground block mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="glow-btn w-full py-3 rounded-xl text-base flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {sending ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
