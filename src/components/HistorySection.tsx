import { BookOpen, Calendar, Landmark, Users } from "lucide-react";

const historyPoints = [
  {
    icon: BookOpen,
    title: "أصل التسمية",
    englishTitle: "Origin of the Name",
    description: "يُعتقد أن اسم كفرحورا يعود إلى الجذر السرياني القديم، حيث تعني \"كفر\" القرية أو المكان المأهول، بينما \"حورا\" قد تشير إلى البياض أو النقاء، في إشارة إلى طبيعة الأرض الجبلية.",
  },
  {
    icon: Calendar,
    title: "الحقبة التاريخية",
    englishTitle: "Historical Era",
    description: "تعود جذور القرية إلى العصور القديمة، وقد مرت بحقب تاريخية متعددة من الحكم الروماني إلى العثماني، مما أثرى تراثها الثقافي والمعماري بشكل ملحوظ.",
  },
  {
    icon: Landmark,
    title: "المعالم التاريخية",
    englishTitle: "Historical Landmarks",
    description: "تضم القرية عدة كنائس أثرية ومبانٍ تراثية يعود بعضها إلى القرون الوسطى، إضافة إلى مقابر قديمة وآثار تدل على الاستيطان البشري المبكر في المنطقة.",
  },
  {
    icon: Users,
    title: "الهجرة والانتشار",
    englishTitle: "Migration & Diaspora",
    description: "شهدت القرية موجات هجرة متعددة عبر التاريخ، خاصة في القرن العشرين، حيث انتشر أبناؤها في مختلف أنحاء العالم محافظين على روابطهم بأرض الآباء والأجداد.",
  },
];

export function HistorySection() {
  return (
    <section id="history" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            التاريخ والتراث
          </h2>
          <p className="text-muted-foreground text-lg">History & Heritage</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {historyPoints.map((point, index) => (
            <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index < historyPoints.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-background rounded-xl p-6 shadow-soft border border-border/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <h3 className="font-amiri text-2xl text-foreground">{point.title}</h3>
                  <span className="text-sm text-accent font-medium">{point.englishTitle}</span>
                </div>
                <p className="arabic-text text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
