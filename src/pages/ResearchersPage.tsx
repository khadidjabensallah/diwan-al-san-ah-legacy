import { BookOpen, Download, FileText, Search, Users, GraduationCap, Library, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import craftPottery from "@/assets/craft-pottery.jpg";
import craftWeaving from "@/assets/craft-weaving.jpg";
import craftCopper from "@/assets/craft-copper.jpg";
import craftLeather from "@/assets/craft-leather.jpg";

const resources = [
  {
    id: "1",
    title: "الفخار الجزائري: دراسة أنثروبولوجية",
    author: "د. أحمد بن علي",
    type: "بحث أكاديمي",
    pages: 45,
    downloads: 234,
    image: craftPottery,
  },
  {
    id: "2",
    title: "النسيج التقليدي في منطقة القبائل",
    author: "أ. فاطمة بوعزة",
    type: "مقال علمي",
    pages: 22,
    downloads: 189,
    image: craftWeaving,
  },
  {
    id: "3",
    title: "تاريخ صناعة النحاس في قسنطينة",
    author: "د. محمد العربي",
    type: "كتاب رقمي",
    pages: 156,
    downloads: 412,
    image: craftCopper,
  },
  {
    id: "4",
    title: "فن الجلود في تلمسان: تقنيات وأساليب",
    author: "أ.د. سعيد بن يوسف",
    type: "رسالة دكتوراه",
    pages: 280,
    downloads: 156,
    image: craftLeather,
  },
];

const categories = [
  { name: "الفخار والخزف", count: 23 },
  { name: "النسيج والزرابي", count: 31 },
  { name: "النحاسيات", count: 18 },
  { name: "صناعة الجلود", count: 15 },
  { name: "الحلي الفضية", count: 12 },
  { name: "النجارة الفنية", count: 9 },
];

const interviews = [
  {
    name: "الحاج محمد بن أحمد",
    craft: "صناعة الفخار",
    experience: "50 سنة",
    image: craftPottery,
  },
  {
    name: "فاطمة بنت علي",
    craft: "نسج الزرابي",
    experience: "35 سنة",
    image: craftWeaving,
  },
  {
    name: "عمر بن يوسف",
    craft: "النقش على النحاس",
    experience: "40 سنة",
    image: craftCopper,
  },
];

const ResearchersPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-heritage-brown text-heritage-cream section-pattern">
        <div className="container mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ركن الباحثين والطلبة
          </h1>
          <p className="text-xl text-heritage-cream/80 max-w-2xl mx-auto mb-8">
            مكتبة رقمية شاملة تضم مصادر أكاديمية موثقة ومقابلات حصرية مع الحرفيين لدعم البحث العلمي حول التراث الجزائري
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="ابحث في المكتبة الرقمية..."
              className="pr-12 py-6 text-lg bg-background text-foreground"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Library className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
              <p className="font-display text-3xl font-bold text-primary-foreground">150+</p>
              <p className="text-primary-foreground/80">مصدر أكاديمي</p>
            </div>
            <div className="text-center">
              <FileText className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
              <p className="font-display text-3xl font-bold text-primary-foreground">45</p>
              <p className="text-primary-foreground/80">بحث علمي</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
              <p className="font-display text-3xl font-bold text-primary-foreground">80+</p>
              <p className="text-primary-foreground/80">مقابلة موثقة</p>
            </div>
            <div className="text-center">
              <Download className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
              <p className="font-display text-3xl font-bold text-primary-foreground">5000+</p>
              <p className="text-primary-foreground/80">تحميل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:col-span-1">
              <div className="card-heritage p-6 sticky top-28">
                <h3 className="font-display text-xl font-bold mb-6">التصنيفات</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-muted transition-colors text-right"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Featured Resources */}
              <div>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <span className="text-primary font-medium mb-2 block">المكتبة الرقمية</span>
                    <h2 className="font-display text-3xl font-bold">مصادر أكاديمية مميزة</h2>
                  </div>
                  <Button variant="outline">عرض الكل</Button>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {resources.map((resource) => (
                    <div key={resource.id} className="card-heritage flex gap-4 p-4 group">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-24 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1 flex flex-col">
                        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-2">
                          {resource.type}
                        </span>
                        <h3 className="font-display font-bold group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{resource.author}</p>
                        <div className="flex items-center gap-4 mt-auto text-xs text-muted-foreground">
                          <span>{resource.pages} صفحة</span>
                          <span>{resource.downloads} تحميل</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artisan Interviews */}
              <div>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <span className="text-primary font-medium mb-2 block">أصوات التراث</span>
                    <h2 className="font-display text-3xl font-bold">مقابلات مع الحرفيين</h2>
                  </div>
                  <Button variant="outline">عرض الكل</Button>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {interviews.map((interview, index) => (
                    <div key={index} className="card-heritage overflow-hidden group cursor-pointer">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={interview.image}
                          alt={interview.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/90 to-transparent" />
                        <div className="absolute bottom-4 right-4 left-4">
                          <h3 className="font-display text-lg font-bold text-heritage-cream">
                            {interview.name}
                          </h3>
                          <p className="text-heritage-cream/80 text-sm">{interview.craft}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            خبرة {interview.experience}
                          </span>
                          <Button size="sm" variant="ghost" className="text-primary">
                            <ExternalLink className="w-4 h-4 ml-1" />
                            استمع
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="card-heritage p-8 bg-muted/50 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-display text-2xl font-bold mb-2">
                  هل لديك بحث للمشاركة؟
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  نرحب بمساهمات الباحثين والأكاديميين لإثراء المكتبة الرقمية بمصادر جديدة حول التراث الجزائري
                </p>
                <Button>
                  أرسل بحثك
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchersPage;
