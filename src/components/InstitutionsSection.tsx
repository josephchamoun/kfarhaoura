import {
  Church,
  School,
  Building2,
  HeartPulse,
  Store,
  Landmark,
  User,
} from "lucide-react";

const institutions = [
  {
    icon: Church,
    title: "الكنائس",
    englishTitle: "Churches",
    description:
      "تضم بلدة كفرحورا عدداً من الكنائس التاريخية التي تعكس عمقها الديني والتراثي.",
    items: ["كنيسة مار سركيس وباخوس", "كنيسة مار إلياس", "كنيسة سيدة الانتقال"],
  },

  {
    icon: User,
    title: "المختار",
    englishTitle: "Mukhtar",
    description:
      "المختار هو ممثل رسمي منتخب عن البلدة ويُعتبر حلقة الوصل الأساسية بين المواطنين والدولة.",
    items: [
      "المختارة: إيفا حبيش",
      "إدارة قيود الأحوال الشخصية (الولادات، الوفيات، الزواج، الإقامة)",
      "المساعدة في المعاملات الإدارية (الهويات، جوازات السفر، لوائح الشطب)",
      "التنسيق بين الأهالي والجهات الرسمية والأمنية",
      "المساهمة في الشؤون الصحية عبر التبليغ عن الحالات الصحية العامة",
    ],
  },

  {
    icon: Building2,
    title: "البلدية",
    englishTitle: "Municipality",
    description:
      "يرأس بلدية كفرحورا السيد سايد الصيصي، ويعاونه مجلس بلدي منتخب من عدة أعضاء لإدارة شؤون البلدة وتطويرها.",
    items: [
      "رئيس البلدية: سايد الصيصي",
      "سيدة شمعون",
      "فرانسوا الخوري",
      "جوزيف مارون",
      "جوزيف حبيش",
      "سمير الديك",
      "جيمي منصور",
      "نصري الظاهر",
      "شربل سلوم",
    ],
  },

  {
    icon: HeartPulse,
    title: "القاعة العامة",
    englishTitle: "Town Hall",
    description:
      "القاعة الرئيسية في بلدة كفرحورا، وتُعد المركز الأساسي للتجمعات الاجتماعية والرسمية.",
    items: [
      "تُقام فيها المناسبات الاجتماعية والوطنية",
      "تُستخدم لاجتماعات أهالي البلدة",
      "تُستقبل فيها التعازي وتجمعات العزاء عند الوفاة",
      "تمثل قلب الحياة الاجتماعية في البلدة",
    ],
  },

  {
    icon: Store,
    title: "النشاط الاقتصادي",
    englishTitle: "Economy",
    description: "الزراعة والتجارة تشكلان العمود الفقري لاقتصاد القرية",
    items: ["زراعة الزيتون", "كروم العنب", "المحلات التجارية"],
  },
  {
    icon: Landmark,
    title: "المعالم الثقافية",
    englishTitle: "Cultural Sites",
    description: "مواقع ذات قيمة تراثية وثقافية للقرية",
    items: [
      "ساحة القرية الرئيسية، قلب الحياة الاجتماعية ومكان تجمع الأهالي في المناسبات والاحتفالات",
      "ملعب البلدة، المكان الرئيسي لممارسة الكرة الطائرة ويستخدمه الأهالي أيضًا لمجموعة من الرياضات الأخرى مثل كرة السلة وكرة القدم",
      "نهر البلدة وجماله الطبيعي، الذي يضفي على القرية سحرًا خاصًا ويعتبر ملتقى للراحة والاستجمام",
      "المباني والكنائس القديمة، شاهدة على تاريخ القرية العريق وفن العمارة التقليدي",
    ],
  },
];

export function InstitutionsSection() {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            المؤسسات والخدمات
          </h2>
          <p className="text-muted-foreground text-lg">
            Institutions & Services
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Institutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 card-hover"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <inst.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-amiri text-xl text-foreground">
                    {inst.title}
                  </h3>
                  <span className="text-sm text-accent">
                    {inst.englishTitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="arabic-text text-muted-foreground text-sm mb-4">
                {inst.description}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {inst.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 rtl:flex-row-reverse"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-amiri text-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
