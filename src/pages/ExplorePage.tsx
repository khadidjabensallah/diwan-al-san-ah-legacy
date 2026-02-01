import { useState } from "react";
import { Search, Filter, Grid, List, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import CraftCard from "@/components/CraftCard";
import craftPottery from "@/assets/craft-pottery.jpg";
import craftWeaving from "@/assets/craft-weaving.jpg";
import craftCopper from "@/assets/craft-copper.jpg";
import craftLeather from "@/assets/craft-leather.jpg";

const allCrafts = [
  {
    id: "pottery",
    title: "الفخار والخزف",
    description: "فن صناعة الفخار التقليدي الذي يعود لآلاف السنين، يتميز بزخارفه الهندسية والنباتية المستوحاة من التراث الأمازيغي.",
    image: craftPottery,
    region: "القبائل الكبرى",
    category: "حرفة يدوية",
  },
  {
    id: "weaving",
    title: "النسيج والزرابي",
    description: "فن النسيج التقليدي الجزائري الذي ينتج أجمل السجاد والزرابي بألوان وأنماط فريدة تحكي قصص القبائل.",
    image: craftWeaving,
    region: "غرداية",
    category: "نسيج",
  },
  {
    id: "copper",
    title: "النحاسيات",
    description: "حرفة صناعة الأواني والتحف النحاسية المزخرفة بنقوش إسلامية وأمازيغية دقيقة تعكس براعة الحرفيين.",
    image: craftCopper,
    region: "قسنطينة",
    category: "معادن",
  },
  {
    id: "leather",
    title: "صناعة الجلود",
    description: "فن دباغة الجلود وتحويلها إلى منتجات فاخرة كالحقائب والأحذية والوسائد المزخرفة بطرق تقليدية.",
    image: craftLeather,
    region: "تلمسان",
    category: "جلود",
  },
  {
    id: "jewelry",
    title: "صناعة الحلي الفضية",
    description: "فن صياغة المجوهرات الفضية التقليدية بأشكال أمازيغية مميزة كالفيبولا والخلاخيل والأساور.",
    image: craftCopper,
    region: "بني يني",
    category: "مجوهرات",
  },
  {
    id: "woodwork",
    title: "النجارة الفنية",
    description: "حرفة صناعة الأثاث والتحف الخشبية المزخرفة بنقوش هندسية إسلامية تعكس جمال العمارة التقليدية.",
    image: craftLeather,
    region: "الجزائر العاصمة",
    category: "خشب",
  },
  {
    id: "embroidery",
    title: "التطريز التقليدي",
    description: "فن التطريز اليدوي على الأقمشة بخيوط ذهبية وفضية لصناعة الملابس التقليدية كالكاراكو والقفطان.",
    image: craftWeaving,
    region: "تلمسان",
    category: "نسيج",
  },
  {
    id: "basketry",
    title: "صناعة السلال",
    description: "حرفة نسج السلال والحصائر من سعف النخيل والحلفاء، تستخدم في الحياة اليومية وكتحف زخرفية.",
    image: craftPottery,
    region: "بسكرة",
    category: "حرفة يدوية",
  },
];

const categories = ["الكل", "حرفة يدوية", "نسيج", "معادن", "جلود", "مجوهرات", "خشب"];
const regions = ["الكل", "القبائل الكبرى", "غرداية", "قسنطينة", "تلمسان", "بني يني", "الجزائر العاصمة", "بسكرة"];

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedRegion, setSelectedRegion] = useState("الكل");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCrafts = allCrafts.filter((craft) => {
    const matchesSearch = craft.title.includes(searchQuery) || craft.description.includes(searchQuery);
    const matchesCategory = selectedCategory === "الكل" || craft.category === selectedCategory;
    const matchesRegion = selectedRegion === "الكل" || craft.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-secondary/50 section-pattern">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            استكشف الحرف التقليدية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            رحلة في عالم الصناعات التقليدية الجزائرية عبر صور وقصص وتوثيق للحرف المتوارثة عبر الأجيال
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="ابحث عن حرفة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground ml-2">المنطقة:</span>
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className="text-xs"
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto">
          <p className="text-muted-foreground mb-8">
            تم العثور على <span className="font-bold text-foreground">{filteredCrafts.length}</span> حرفة
          </p>

          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCrafts.map((craft) => (
                <CraftCard key={craft.id} {...craft} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCrafts.map((craft) => (
                <div key={craft.id} className="card-heritage flex gap-6 p-4">
                  <img
                    src={craft.image}
                    alt={craft.title}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {craft.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {craft.region}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{craft.title}</h3>
                    <p className="text-muted-foreground">{craft.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredCrafts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">لم يتم العثور على نتائج</p>
              <p className="text-muted-foreground mt-2">جرب تغيير معايير البحث</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ExplorePage;
