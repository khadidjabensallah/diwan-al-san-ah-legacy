import { useState, useMemo } from "react";
import { Search, Grid, List, MapPin, ChevronRight, ChevronDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import CraftCard from "@/components/CraftCard";
import { allCrafts } from "@/data/crafts";
import { ISCO_CODES, IscoCode } from "@/data/isco-codes";
import { cn } from "@/lib/utils";

const regions = ["الكل", "القبائل الكبرى", "غرداية", "قسنطينة", "تلمسان", "بني يني", "الجزائر العاصمة", "بسكرة", "تيزي وزو", "بجاية", "مسيلة", "المدية", "أدرار", "جيجل"];

const IscoFilterItem = ({
  item,
  selectedCode,
  onSelect,
  level = 0
}: {
  item: IscoCode;
  selectedCode: string;
  onSelect: (code: string) => void;
  level?: number
}) => {
  const [isOpen, setIsOpen] = useState(level < 1);
  const hasChildren = item.children && item.children.length > 0;
  const isSelected = selectedCode === item.code;

  return (
    <div className={cn("mt-1", level > 0 && "mr-4 border-r border-border/50")}>
      <div className="flex items-center gap-1 group">
        {hasChildren ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-muted rounded text-muted-foreground"
          >
            {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>
        ) : (
          <div className="w-5" />
        )}
        <Button
          variant={isSelected ? "default" : "ghost"}
          size="sm"
          onClick={() => onSelect(item.code)}
          className={cn(
            "h-8 justify-start text-xs font-medium px-2 flex-1 rounded-lg",
            isSelected ? "shadow-md" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="opacity-60 ml-2 font-mono">{item.code}</span>
          <span className="truncate">{item.nameAr}</span>
        </Button>
      </div>

      {isOpen && hasChildren && (
        <div className="mt-1">
          {item.children?.map((child) => (
            <IscoFilterItem
              key={child.code}
              item={child}
              selectedCode={selectedCode}
              onSelect={onSelect}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIscoCode, setSelectedIscoCode] = useState("الكل");
  const [selectedRegion, setSelectedRegion] = useState("الكل");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const filteredCrafts = useMemo(() => {
    return allCrafts.filter((craft) => {
      const matchesSearch = craft.title.includes(searchQuery) || craft.description.includes(searchQuery);

      const matchesIsco = selectedIscoCode === "الكل" || craft.iscoCode.startsWith(selectedIscoCode);

      const matchesRegion = selectedRegion === "الكل" || craft.region === selectedRegion;
      return matchesSearch && matchesIsco && matchesRegion;
    });
  }, [searchQuery, selectedIscoCode, selectedRegion]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-secondary/30 section-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            استكشف الحرف التقليدية
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تصفح الأرشيف الوطني المنظم وفق المعايير الدولية CITP-08 للتعرف على عراقة الصنعة الجزائرية.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={cn(
            "lg:w-80 space-y-8 h-fit lg:sticky lg:top-24 transition-all duration-300",
            !isFilterOpen && "lg:w-12 lg:opacity-50"
          )}>
            <div className="flex items-center justify-between mb-4">
              <h2 className={cn("font-bold text-lg flex items-center gap-2", !isFilterOpen && "hidden")}>
                <Filter className="w-5 h-5 text-primary" />
                تصفية النتائج
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="hidden lg:flex"
              >
                <ChevronRight className={cn("w-5 h-5 transition-transform", isFilterOpen && "rotate-180")} />
              </Button>
            </div>

            {isFilterOpen && (
              <div className="space-y-8 animate-fade-in">
                {/* Search */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground">بحث سريع</label>
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="اسم الحرفة، وصف..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-9 h-11 bg-background"
                    />
                  </div>
                </div>

                {/* ISCO Category Tree */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-foreground">تصنيف CITP-08</label>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => setSelectedIscoCode("الكل")}
                      className="h-auto p-0 text-[10px]"
                    >
                      إعادة تعيين
                    </Button>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-2 max-h-[400px] overflow-y-auto border border-border/50">
                    <Button
                      variant={selectedIscoCode === "الكل" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedIscoCode("الكل")}
                      className="w-full justify-start text-xs font-bold mb-2 h-9"
                    >
                      كل التصنيفات
                    </Button>
                    {ISCO_CODES.map((group) => (
                      <IscoFilterItem
                        key={group.code}
                        item={group}
                        selectedCode={selectedIscoCode}
                        onSelect={setSelectedIscoCode}
                      />
                    ))}
                  </div>
                </div>

                {/* Region Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground">المنطقة الجغرافية</label>
                  <div className="flex flex-wrap gap-1.5">
                    {regions.map((region) => (
                      <Button
                        key={region}
                        variant={selectedRegion === region ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setSelectedRegion(region)}
                        className="text-[10px] h-7 px-2.5 rounded-full"
                      >
                        {region}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </aside>

          {/* Results Area */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div className="text-sm text-muted-foreground">
                تم العثور على <span className="font-bold text-foreground">{filteredCrafts.length}</span> حرفة
                {selectedIscoCode !== "الكل" && (
                  <span className="mr-2 px-2 py-0.5 bg-primary/10 text-primary rounded-md text-[10px] font-bold">
                    CITP: {selectedIscoCode}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="w-9 h-9"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="w-9 h-9"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCrafts.map((craft) => (
                  <CraftCard key={craft.id} {...craft} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCrafts.map((craft) => (
                  <div key={craft.id} className="card-heritage flex flex-col md:flex-row gap-6 p-4">
                    <div className="w-full md:w-56 aspect-[4/3] relative overflow-hidden rounded-lg group">
                      <img
                        src={craft.image}
                        alt={craft.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-0.5 rounded bg-primary/90 text-primary-foreground text-[10px] font-mono font-bold">
                          {craft.iscoCode}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-bold">
                          {craft.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {craft.region}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">{craft.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{craft.description}</p>
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <a href={`/craft/${craft.id}`}>عرض التفاصيل الكاملة ←</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredCrafts.length === 0 && (
              <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border/50">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground opacity-50" />
                </div>
                <p className="text-xl text-muted-foreground">لم يتم العثور على أي حرفة تطابق بحثك</p>
                <p className="text-sm text-muted-foreground mt-2">حاول تغيير معايير التصفية أو إعادة تعيين البحث</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedIscoCode("الكل");
                    setSelectedRegion("الكل");
                  }}
                  className="mt-6"
                >
                  إعادة تعيين الكل
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;
