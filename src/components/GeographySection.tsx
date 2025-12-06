import landscapeImage from "@/assets/landscape-kfarhaoura.jpg";
import mountainsImage from "@/assets/mountains-view.jpg";

const geographyFacts = [
  {
    title: "الموقع",
    value: "شمال لبنان - قضاء زغرتا",
    english: "North Lebanon - Zgharta District",
  },
  {
    title: "الارتفاع",
    value: "١٧٠ متر عن سطح البحر",
    english: "170m above sea level",
  },
  {
    title: "المساحة",
    value: "٢٥٩ هكتار",
    english: "259 hectares",
  },
  {
    title: "المناخ",
    value: "معتدل متوسطي",
    english: "Mediterranean Climate",
  },
];

export function GeographySection() {
  return (
    <section id="geography" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            الجغرافيا والطبيعة
          </h2>
          <p className="text-muted-foreground text-lg">Geography & Nature</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={landscapeImage}
              alt="مناظر طبيعية من كفرحورا"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={mountainsImage}
              alt="جبال كفرحورا"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Geography Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="rtl-container bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <h3 className="font-amiri text-2xl text-foreground mb-6 text-right">
              الموقع الجغرافي
            </h3>
            <div className="arabic-text text-muted-foreground space-y-4">
              <p>
                تقع قرية كفرحورا في شمال لبنان ضمن قضاء زغرتا، في منطقة سهلية
                ذات طبيعة مفتوحة. يمر بالقرب منها نهر أبو علي (نهر قاديشا)، ما
                يضفي على موقعها أهمية طبيعية وزراعية.
              </p>

              <p>
                يتميز مناخ كفرحورا بمناخ متوسطي نموذجي، حيث يكون الصيف حاراً
                وجافاً بين شهري حزيران وأيلول، فيما يكون الشتاء معتدلاً إلى بارد
                مع هطول الأمطار بين كانون الأول وآذار، دون تساقط للثلوج.
              </p>

              <p>
                تشتهر القرية بأراضيها الزراعية الخصبة التي تنتشر فيها أشجار
                الزيتون بشكل أساسي، إضافة إلى بعض كروم العنب، والتي تشكل موردًا
                زراعيًا مهمًا لأهالي البلدة، دون وجود غابات حرجية واسعة.
              </p>
            </div>
          </div>

          {/* Facts Grid */}
          <div className="grid grid-cols-2 gap-4">
            {geographyFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 shadow-soft border border-border/50 card-hover"
              >
                <div className="font-amiri text-lg text-primary mb-2">
                  {fact.title}
                </div>
                <div className="font-amiri text-xl text-foreground mb-1">
                  {fact.value}
                </div>
                <div className="text-xs text-accent">{fact.english}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
