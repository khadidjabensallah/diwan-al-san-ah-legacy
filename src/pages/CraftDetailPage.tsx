import { useParams } from "react-router-dom";
import { MapPin, Calendar, Users, Play, ArrowLeft, Share2, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import craftPottery from "@/assets/craft-pottery.jpg";
import craftWeaving from "@/assets/craft-weaving.jpg";
import craftCopper from "@/assets/craft-copper.jpg";
import craftLeather from "@/assets/craft-leather.jpg";

// Mock data for demonstration
const craftDetails = {
  pottery: {
    title: "الفخار والخزف",
    description: "فن صناعة الفخار التقليدي الذي يعود لآلاف السنين، يتميز بزخارفه الهندسية والنباتية المستوحاة من التراث الأمازيغي. تعتبر هذه الحرفة من أقدم الصناعات التقليدية في الجزائر.",
    image: craftPottery,
    region: "القبائل الكبرى",
    category: "حرفة يدوية",
    history: `تعود صناعة الفخار في الجزائر إلى آلاف السنين، حيث عُثر على قطع فخارية يعود تاريخها إلى العصر الحجري الحديث. تطورت هذه الحرفة عبر العصور لتصبح جزءاً أساسياً من الثقافة الجزائرية.

في منطقة القبائل الكبرى، اشتهرت النساء بإنتاج أواني فخارية مميزة تحمل زخارف هندسية ورموز أمازيغية تقليدية. كل رمز يحمل معنى خاصاً ويروي قصة من قصص الأجداد.

تتميز الأواني الفخارية الجزائرية بألوانها الترابية الطبيعية وزخارفها الفريدة التي تجمع بين الجمال والوظيفية.`,
    tools: [
      "الطين الطبيعي من المنطقة",
      "أدوات التشكيل الخشبية والمعدنية",
      "الفرن التقليدي (الكوشة)",
      "الأصباغ الطبيعية للتزيين",
      "أدوات النقش والحفر",
    ],
    regions: [
      { name: "تيزي وزو", specialty: "الفخار المنزلي" },
      { name: "بجاية", specialty: "الأواني الزخرفية" },
      { name: "مسيلة", specialty: "الفخار الريفي" },
    ],
    artisans: 45,
    products: 120,
  },
};

const relatedProducts = [
  {
    id: "1",
    title: "طاجين فخاري مزخرف",
    price: 4500,
    image: craftPottery,
    artisan: "الحاج محمد",
    region: "تيزي وزو",
  },
  {
    id: "2",
    title: "إناء فخاري تقليدي",
    price: 3200,
    image: craftPottery,
    artisan: "فاطمة بنت أحمد",
    region: "بجاية",
  },
  {
    id: "3",
    title: "قدر فخاري كبير",
    price: 5800,
    image: craftPottery,
    artisan: "يوسف المعلم",
    region: "مسيلة",
  },
  {
    id: "4",
    title: "مزهرية فخارية منقوشة",
    price: 2800,
    image: craftPottery,
    artisan: "حنان بوعلام",
    region: "تيزي وزو",
  },
];

const CraftDetailPage = () => {
  const { id } = useParams();
  const craft = craftDetails.pottery; // Using mock data

  const galleryImages = [craftPottery, craftWeaving, craftCopper, craftLeather];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={craft.image}
          alt={craft.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown via-heritage-brown/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto pb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm mb-4">
                {craft.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-4">
                {craft.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-heritage-cream/80">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {craft.region}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {craft.artisans} حرفي
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  تراث عريق
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="absolute top-24 left-4 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Heart className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start bg-muted/50 p-1 rounded-xl mb-8">
                  <TabsTrigger value="overview" className="rounded-lg">نظرة عامة</TabsTrigger>
                  <TabsTrigger value="history" className="rounded-lg">التاريخ</TabsTrigger>
                  <TabsTrigger value="tools" className="rounded-lg">الأدوات</TabsTrigger>
                  <TabsTrigger value="regions" className="rounded-lg">المناطق</TabsTrigger>
                  <TabsTrigger value="gallery" className="rounded-lg">المعرض</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {craft.description}
                  </p>
                  <div className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img
                      src={craft.image}
                      alt={craft.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-heritage-brown/40 flex items-center justify-center group-hover:bg-heritage-brown/60 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground mr-[-4px]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    شاهد فيديو توثيقي عن صناعة الفخار التقليدية
                  </p>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                  <h3 className="font-display text-2xl font-bold">تاريخ الحرفة</h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    {craft.history.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="leading-relaxed mb-4">{paragraph}</p>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="space-y-6">
                  <h3 className="font-display text-2xl font-bold">الأدوات والمواد</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {craft.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="regions" className="space-y-6">
                  <h3 className="font-display text-2xl font-bold">مناطق الانتشار</h3>
                  <div className="space-y-4">
                    {craft.regions.map((region, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-muted/50 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <MapPin className="w-6 h-6 text-primary" />
                          <div>
                            <h4 className="font-bold text-lg">{region.name}</h4>
                            <p className="text-sm text-muted-foreground">{region.specialty}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          عرض الحرفيين
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="space-y-6">
                  <h3 className="font-display text-2xl font-bold">معرض الصور</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {galleryImages.map((img, index) => (
                      <div
                        key={index}
                        className={`rounded-xl overflow-hidden ${
                          index === 0 ? "col-span-2 aspect-video" : "aspect-square"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`صورة ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="card-heritage p-6">
                <h3 className="font-display text-xl font-bold mb-6">إحصائيات</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">عدد الحرفيين</span>
                    <span className="font-bold text-lg">{craft.artisans}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">منتجات متاحة</span>
                    <span className="font-bold text-lg">{craft.products}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">المناطق</span>
                    <span className="font-bold text-lg">{craft.regions.length}</span>
                  </div>
                </div>
              </div>

              {/* Research Card */}
              <div className="card-heritage p-6 bg-heritage-brown text-heritage-cream">
                <BookOpen className="w-10 h-10 mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">للباحثين</h3>
                <p className="text-heritage-cream/80 text-sm mb-4">
                  تحميل ملف PDF يحتوي على معلومات موثقة ومصادر أكاديمية
                </p>
                <Button variant="secondary" className="w-full">
                  تحميل الملف
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-primary font-medium mb-2 block">من السوق</span>
              <h2 className="font-display text-3xl font-bold">منتجات من هذه الحرفة</h2>
            </div>
            <Button variant="outline" className="group">
              عرض الكل
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CraftDetailPage;
