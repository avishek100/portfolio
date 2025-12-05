import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's create something great.
          </p>
          
          <a 
            href="mailto:hello@johndoe.com" 
            className="inline-flex items-center gap-2 text-foreground hover:underline mb-10"
          >
            <Mail className="w-4 h-4" />
            hello@johndoe.com
          </a>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
