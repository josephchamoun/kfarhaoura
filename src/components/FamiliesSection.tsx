import { Users } from "lucide-react";

const families = [
  "حبيش",
  "شمعون",
  "الخوري",
  "الديك",
  "نعيم",
  "منصور",
  "وديع",
  "سلوم",
  "الظاهر",
  "القبّوط",
  "مارون",
  "أبي رعد",
  "أبي ياغي",
  "حبيتر",
  "مرقص",
  "الصيصي",
];

export function FamiliesSection() {
  return (
    <section id="families" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            العائلات الكفرحورية
          </h2>
          <p className="text-muted-foreground text-lg">Kfarhaoura Families</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
          <p className="arabic-text text-lg text-muted-foreground leading-relaxed">
            تتميز كفرحورا بعائلاتها العريقة التي تمتد جذورها في القرية لأجيال
            متعاقبة. تحافظ هذه العائلات على روابط قوية فيما بينها وتساهم في
            الحفاظ على التراث والهوية الثقافية للقرية.
          </p>
        </div>

        {/* Families Grid */}
        <div className="family-grid max-w-5xl mx-auto">
          {families.map((family, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-4 text-center shadow-soft border border-border/50 card-hover"
            >
              <span className="font-amiri text-xl text-foreground">
                {family}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-10 font-amiri">
          هذه قائمة بأبرز العائلات المعروفة في القرية
        </p>
      </div>
    </section>
  );
}
