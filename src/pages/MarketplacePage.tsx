import { useState } from "react";
import { Search, Filter, Grid, SlidersHorizontal, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import craftPottery from "@/assets/craft-pottery.jpg";
import craftWeaving from "@/assets/craft-weaving.jpg";
import craftCopper from "@/assets/craft-copper.jpg";
import craftLeather from "@/assets/craft-leather.jpg";

const allProducts = [
  {
    id: "1",
    title: "طاجين فخاري مزخرف",
    price: 4500,
    image: craftPottery,
    artisan: "الحاج محمد",
    region: "تيزي وزو",
    category: "فخار",
    rating: 4.8,
  },
  {
    id: "2",
    title: "زربية تقليدية أمازيغية",
    price: 35000,
    image: craftWeaving,
    artisan: "فاطمة بنت علي",
    region: "غرداية",
    category: "نسيج",
    rating: 5.0,
  },
  {
    id: "3",
    title: "إبريق نحاسي منقوش",
    price: 8500,
    image: craftCopper,
    artisan: "عمر بن يوسف",
    region: "قسنطينة",
    category: "نحاسيات",
    rating: 4.9,
  },
  {
    id: "4",
    title: "حقيبة جلدية يدوية",
    price: 12000,
    image: craftLeather,
    artisan: "أحمد بوزيد",
    region: "تلمسان",
    category: "جلود",
    rating: 4.7,
  },
  {
    id: "5",
    title: "صينية نحاسية كبيرة",
    price: 15000,
    image: craftCopper,
    artisan: "محمود القسنطيني",
    region: "قسنطينة",
    category: "نحاسيات",
    rating: 4.6,
  },
  {
    id: "6",
    title: "سجادة صوف تقليدية",
    price: 28000,
    image: craftWeaving,
    artisan: "عائشة بوعلام",
    region: "الجلفة",
    category: "نسيج",
    rating: 4.9,
  },
  {
    id: "7",
    title: "مزهرية فخارية منقوشة",
    price: 2800,
    image: craftPottery,
    artisan: "حنان بوعلام",
    region: "تيزي وزو",
    category: "فخار",
    rating: 4.5,
  },
  {
    id: "8",
    title: "حزام جلدي مطرز",
    price: 5500,
    image: craftLeather,
    artisan: "خالد بن عمر",
    region: "تلمسان",
    category: "جلود",
    rating: 4.8,
  },
];

const categories = ["الكل", "فخار", "نسيج", "نحاسيات", "جلود", "مجوهرات"];

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title.includes(searchQuery) || product.artisan.includes(searchQuery);
    const matchesCategory = selectedCategory === "الكل" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-l from-primary to-heritage-copper text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            سوق الحرفيين
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            منتجات أصيلة مصنوعة يدوياً من حرفيين جزائريين موهوبين، ادعم التراث واقتني قطعة فريدة
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-72 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="card-heritage p-6 sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold">تصفية النتائج</h3>
                  <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">الفئة</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-right px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">نطاق السعر</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
                    step={1000}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString('ar-DZ')} د.ج</span>
                    <span>{priceRange[1].toLocaleString('ar-DZ')} د.ج</span>
                  </div>
                </div>

                {/* Reset */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("الكل");
                    setPriceRange([0, 50000]);
                  }}
                >
                  إعادة تعيين
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Search & Sort Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="ابحث عن منتج أو حرفي..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="ترتيب حسب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">الأحدث</SelectItem>
                    <SelectItem value="price-low">السعر: من الأقل</SelectItem>
                    <SelectItem value="price-high">السعر: من الأعلى</SelectItem>
                    <SelectItem value="rating">التقييم</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 ml-2" />
                  الفلاتر
                </Button>
              </div>

              {/* Results Count */}
              <p className="text-muted-foreground mb-6">
                تم العثور على <span className="font-bold text-foreground">{sortedProducts.length}</span> منتج
              </p>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">لم يتم العثور على منتجات</p>
                  <p className="text-muted-foreground mt-2">جرب تغيير معايير البحث</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Join as Artisan CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto">
          <div className="card-heritage p-8 md:p-12 bg-heritage-brown text-heritage-cream text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              هل أنت حرفي؟
            </h2>
            <p className="text-lg text-heritage-cream/80 mb-6 max-w-2xl mx-auto">
              انضم إلى منصتنا واعرض منتجاتك لآلاف الزوار المهتمين بالتراث الجزائري
            </p>
            <Button size="lg" variant="secondary">
              سجل كحرفي الآن
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketplacePage;
