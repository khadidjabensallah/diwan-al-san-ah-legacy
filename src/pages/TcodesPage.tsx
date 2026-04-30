import { useState } from "react";
import { Search, ChevronRight, ChevronDown, Info, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { ISCO_CODES, IscoCode } from "@/data/isco-codes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const IscoCodeItem = ({ item, level = 0 }: { item: IscoCode; level?: number }) => {
    const [isOpen, setIsOpen] = useState(level < 2);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className={cn("border-l-2 border-primary/20", level > 0 && "ml-4 md:ml-8 mt-2")}>
            <div
                className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group",
                    hasChildren ? "cursor-pointer hover:bg-secondary/50" : "bg-background border border-border/50",
                    isOpen && hasChildren && "bg-secondary/30"
                )}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
                    {item.code}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-foreground truncate">{item.nameAr}</h3>
                        {hasChildren && (
                            isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                        <span className="italic">{item.nameFr}</span>
                        <span className="opacity-70">{item.nameEn}</span>
                    </div>
                </div>
            </div>

            {isOpen && hasChildren && (
                <div className="mt-1 animate-accordion-down">
                    {item.children?.map((child) => (
                        <IscoCodeItem key={child.code} item={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const TcodesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filterCodes = (codes: IscoCode[], query: string): IscoCode[] => {
        if (!query) return codes;

        return codes.reduce((acc: IscoCode[], item) => {
            const matches =
                item.code.includes(query) ||
                item.nameAr.toLowerCase().includes(query.toLowerCase()) ||
                item.nameFr.toLowerCase().includes(query.toLowerCase()) ||
                item.nameEn.toLowerCase().includes(query.toLowerCase());

            const filteredChildren = item.children ? filterCodes(item.children, query) : [];

            if (matches || filteredChildren.length > 0) {
                acc.push({
                    ...item,
                    children: filteredChildren.length > 0 ? filteredChildren : item.children
                });
            }
            return acc;
        }, []);
    };

    const filteredIscoCodes = filterCodes(ISCO_CODES, searchQuery);

    return (
        <Layout>
            <div className="section-pattern min-h-screen pb-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <div className="container mx-auto text-center px-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 animate-fade-in">
                            <Info className="w-3 h-3" />
                            المعايير الدولية للتصنيف
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                            نظام التكويد الدولي <span className="text-primary tracking-normal">CITP-08</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                            دمج التصنيف الدولي النمطي للمهن (ISCO-08) في منصة "ديوان الصنعة" لضمان معايير عالمية في أرشفة وتوصيف الحرف التقليدية الجزائرية.
                        </p>
                    </div>
                </section>

                {/* Search & Content */}
                <section className="container mx-auto px-4 -mt-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Search Bar */}
                        <div className="relative mb-12 glass shadow-xl rounded-2xl p-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
                            <div className="relative flex items-center">
                                <Search className="absolute right-4 w-5 h-5 text-muted-foreground" />
                                <Input
                                    placeholder="ابحث بالكود أو المسمى (عربي، فرنسي، إنجليزي)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="h-14 pr-12 rounded-xl text-lg border-none bg-transparent focus-visible:ring-0"
                                />
                                {searchQuery && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setSearchQuery("")}
                                        className="ml-2"
                                    >
                                        مسح
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Classification Tree */}
                        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <span className="w-2 h-8 bg-primary rounded-full" />
                                    شجرة التصنيفات
                                </h2>
                                <div className="text-sm text-muted-foreground">
                                    المجموعة الكبرى رقم 7: الحرفيون المهرة
                                </div>
                            </div>

                            <div className="space-y-4">
                                {filteredIscoCodes.length > 0 ? (
                                    filteredIscoCodes.map((code) => (
                                        <IscoCodeItem key={code.code} item={code} />
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                                        <p className="text-xl text-muted-foreground">لم يتم العثور على أي أكواد تطابق بحثك</p>
                                        <Button
                                            variant="link"
                                            onClick={() => setSearchQuery("")}
                                            className="mt-2 text-primary"
                                        >
                                            عرض كل التصنيفات
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Technical Document Reference */}
                        <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                                    <ExternalLink className="w-8 h-8" />
                                </div>
                                <div className="flex-1 text-center md:text-right">
                                    <h3 className="text-xl font-bold mb-2">المرجع التقني</h3>
                                    <p className="text-muted-foreground">
                                        تعتمد هذه الأكواد على وثيقة التصنيف الدولي النمطي للمهن المحدثة لسنة 2008 الصادرة عن منظمة العمل الدولية.
                                    </p>
                                </div>
                                <Button className="rounded-full px-8">
                                    تحميل الوثيقة الأصلية
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default TcodesPage;
