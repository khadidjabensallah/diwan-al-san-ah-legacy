import { Link } from "react-router-dom";
import { ArrowLeft, Play, BookOpen, ShoppingBag, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CraftCard from "@/components/CraftCard";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-crafts.jpg";
import craftPottery from "@/assets/craft-pottery.jpg";
import craftWeaving from "@/assets/craft-weaving.jpg";
import craftCopper from "@/assets/craft-copper.jpg";
import craftLeather from "@/assets/craft-leather.jpg";
import { allCrafts } from "@/data/crafts";

const featuredProducts = [
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
    title: "زربية تقليدية أمازيغية",
    price: 35000,
    image: craftWeaving,
    artisan: "فاطمة بنت علي",
    region: "غرداية",
  },
  {
    id: "3",
    title: "إبريق نحاسي منقوش",
    price: 8500,
    image: craftCopper,
    artisan: "عمر بن يوسف",
    region: "قسنطينة",
  },
  {
    id: "4",
    title: "حقيبة جلدية يدوية",
    price: 12000,
    image: craftLeather,
    artisan: "أحمد بوزيد",
    region: "تلمسان",
  },
];

const stats = [
  { number: "50+", label: "حرفة موثقة" },
  { number: "200+", label: "حرفي مسجل" },
  { number: "48", label: "ولاية مغطاة" },
  { number: "1000+", label: "منتج متاح" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="حرفي جزائري يعمل على نول تقليدي"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-heritage-brown/95 via-heritage-brown/70 to-heritage-brown/40" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-heritage-cream text-sm mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              اكتشف التراث الجزائري الأصيل
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              ديوان الصنعة
            </h1>
            <p className="text-xl text-heritage-cream/90 leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              فضاء رقمي يحفظ ذاكرة الحرف الجزائرية التقليدية ويعيد تقديمها للأجيال الجديدة بطريقة عصرية، ليبقى التراث حياً في زمن التحول الرقمي.
            </p>
            <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/explore">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  استكشف الحرف
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-heritage-cream/30 text-heritage-cream hover:bg-heritage-cream/10 text-lg px-8">
                <Play className="w-5 h-5 ml-2" />
                شاهد القصة
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-heritage-cream/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-heritage-cream/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 section-pattern">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-4 block">من نحن</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                نحفظ الماضي لنبني المستقبل
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ديوان الصنعة هو مشروع رقمي طموح يهدف إلى توثيق الحرف التقليدية الجزائرية المهددة بالاندثار. نسعى لإنشاء أرشيف حي يربط بين الحرفيين والباحثين والمهتمين بالتراث.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                نؤمن بأن التراث الحرفي هو جزء أساسي من هويتنا الثقافية، ومسؤوليتنا جميعاً الحفاظ عليه ونقله للأجيال القادمة.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">توثيق</h4>
                    <p className="text-sm text-muted-foreground">حفظ الذاكرة الحرفية</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">تواصل</h4>
                    <p className="text-sm text-muted-foreground">ربط الحرفيين بالعالم</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">دعم</h4>
                    <p className="text-sm text-muted-foreground">تسويق المنتجات التقليدية</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={craftPottery}
                  alt="الفخار التقليدي"
                  className="rounded-2xl w-full aspect-[3/4] object-cover"
                />
                <img
                  src={craftCopper}
                  alt="النحاسيات"
                  className="rounded-2xl w-full aspect-[3/4] object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Crafts Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-medium mb-4 block">استكشف</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                الحرف التقليدية
              </h2>
            </div>
            <Link to="/explore">
              <Button variant="outline" className="group">
                عرض جميع الحرف
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCrafts.slice(0, 4).map((craft, index) => (
              <CraftCard
                key={craft.id}
                {...craft}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-medium mb-4 block">سوق الحرفيين</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                منتجات أصيلة من الحرفيين
              </h2>
            </div>
            <Link to="/marketplace">
              <Button variant="outline" className="group">
                تصفح المتجر
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section className="py-24 bg-heritage-brown text-heritage-cream section-pattern">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-heritage-gold font-medium mb-4 block">للباحثين والطلبة</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              مصادر أكاديمية موثقة
            </h2>
            <p className="text-xl text-heritage-cream/80 leading-relaxed mb-8">
              نوفر للباحثين والطلبة مكتبة رقمية شاملة تضم معلومات موثقة ومصادر أكاديمية حول الحرف التقليدية الجزائرية لدعم البحث العلمي.
            </p>
            <Link to="/researchers">
              <Button size="lg" className="bg-heritage-gold text-heritage-brown hover:bg-heritage-gold/90">
                <BookOpen className="w-5 h-5 ml-2" />
                استكشف المكتبة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="bg-gradient-to-l from-primary to-heritage-copper rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              هل أنت حرفي؟
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              انضم إلى منصتنا واعرض منتجاتك لآلاف الزوار المهتمين بالتراث الجزائري الأصيل
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              سجل كحرفي
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
