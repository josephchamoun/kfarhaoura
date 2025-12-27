import { Mountain, Ruler, MapPin, TreeDeciduous } from "lucide-react";
import churchImage from "@/assets/church.jpg";

const stats = [
  {
    icon: Mountain,
    value: "١٧٠",
    label: "متر عن سطح البحر",
    englishLabel: "Meters Above Sea Level",
  },
  {
    icon: Ruler,
    value: "٢٥٩",
    label: "هكتار",
    englishLabel: "Total Area (Hectares)",
  },

  {
    icon: MapPin,
    value: "زغرتا",
    label: "قضاء",
    englishLabel: "Zgharta District",
  },
  {
    icon: TreeDeciduous,
    value: "شمال",
    label: "لبنان",
    englishLabel: "North Lebanon",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            نبذة عن القرية
          </h2>
          <p className="text-muted-foreground text-lg">About Kfarhaoura</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={churchImage}
                alt="كنيسة كفرحورا التاريخية"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>

          {/* Text Content */}
          <div className="rtl-container">
            <div className="arabic-text text-lg text-foreground/90 space-y-6">
              <p>
                كفرحورا قرية لبنانية عريقة تقع في قضاء زغرتا بمحافظة لبنان
                الشمالي. تتميز القرية بموقع ريفي جميل، وتجمع بين جمال الطبيعة
                وعراقة التاريخ.
              </p>

              <p>
                يمر بها نهر أبو علي (المعروف أيضاً باسم نهر Kadisha) الذي ينبع
                من أعلى قمة في لبنان؛ القرنة السوداء ويتجه نحو طرابلس، ويُعد من
                المكونات الطبيعية الهامة في المنطقة.
              </p>

              <p>
                تضم كفرحورا عدة كنائس تاريخية بارزة منها كنيسة مار سركيس وباخوس،
                وكنيسة مار إلياس، والكنيسة الرئيسية في البلدة: كنيسة سيدة
                الانتقال. كما توجد في محيطها عدّة مغارات وآثار تدلّ على حضور
                تاريخي طويل.
              </p>

              <p>
                تشتهر كفرحورا بأراضيها الزراعية الخصبة، وخاصة بساتين الزيتون
                وكروم العنب، إضافة إلى المناظر الطبيعية الخلابة التي تجذب الزوار
                من مختلف المناطق.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-soft card-hover border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-amiri text-3xl text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-amiri text-sm text-muted-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-accent font-medium">
                {stat.englishLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
