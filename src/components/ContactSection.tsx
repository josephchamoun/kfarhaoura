import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    value: "Kfarhaoura, Zgharta District",
    subtitle: "North Lebanon",
  },

  {
    icon: Mail,
    title: "Email",
    value: "kfarhaoura@gmail.com",
    subtitle: "General Inquiries",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            تواصل معنا
          </h2>
          <p className="text-muted-foreground text-lg">Contact Information</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 text-center shadow-soft border border-border/50 card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{info.title}</h3>
              <p className="text-foreground font-medium mb-1">{info.value}</p>
              <p className="text-sm text-muted-foreground">{info.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
