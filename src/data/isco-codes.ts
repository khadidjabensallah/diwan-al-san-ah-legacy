export interface IscoCode {
    code: string;
    nameEn: string;
    nameFr: string;
    nameAr: string;
    description?: string;
    children?: IscoCode[];
}

export const ISCO_CODES: IscoCode[] = [
    {
        code: "7",
        nameEn: "Craft and related trades workers",
        nameFr: "Métiers qualifiés de l'industrie et de l'artisanat",
        nameAr: "الحرفيون والمهن المرتبطة بها",
        children: [
            {
                code: "73",
                nameEn: "Handicraft and printing workers",
                nameFr: "Métiers qualifiés de l'artisanat et de l'imprimerie",
                nameAr: "مهن الصناعة التقليدية والطباعة",
                children: [
                    {
                        code: "731",
                        nameEn: "Handicraft workers",
                        nameFr: "Métiers de l'artisanat",
                        nameAr: "الحرفيون",
                        children: [
                            {
                                code: "7311",
                                nameEn: "Precision-instrument makers and repairers",
                                nameFr: "Mécaniciens-réparateurs d'instruments de précision",
                                nameAr: "صانعو ومصلحو الأدوات الدقيقة",
                            },
                            {
                                code: "7312",
                                nameEn: "Musical instrument makers and tuners",
                                nameFr: "Facteurs et accordeurs d'instruments de musique",
                                nameAr: "صانعو وضباط الآلات الموسيقية",
                            },
                            {
                                code: "7313",
                                nameEn: "Jewellery and precious-metal workers",
                                nameFr: "Joailliers et orfèvres",
                                nameAr: "الحلي والمجوهرات",
                            },
                            {
                                code: "7314",
                                nameEn: "Potters and related workers",
                                nameFr: "Potiers et assimilés",
                                nameAr: "الفخار والخزف",
                            },
                            {
                                code: "7315",
                                nameEn: "Glass makers, cutters, grinders and finishers",
                                nameFr: "Souffleurs, mouleurs, tailleurs, meuleurs et polisseurs de verre",
                                nameAr: "صانعو الزجاج ونحاتوه ومجلوه",
                            },
                            {
                                code: "7316",
                                nameEn: "Sign writers, decorative painters, engravers and etchers",
                                nameFr: "Peintres d'enseignes, peintres-décorateurs et graveurs",
                                nameAr: "خطاطو اللوحات والرسامون الزخرفيون والنقاشون",
                            },
                            {
                                code: "7317",
                                nameEn: "Handicraft workers in wood, basketry and related materials",
                                nameFr: "Métiers de l'artisanat sur bois et sur des matériaux similaires",
                                nameAr: "الحرفيون في الخشب والقش والمواد المماثلة",
                            },
                            {
                                code: "7318",
                                nameEn: "Handicraft workers in textile, leather and related materials",
                                nameFr: "Métiers de l'artisanat sur textile, sur cuir et sur des matériaux similaires",
                                nameAr: "الحرفيون في النسيج والجلد والمواد المماثلة",
                            },
                            {
                                code: "7319",
                                nameEn: "Handicraft workers not elsewhere classified",
                                nameFr: "Métiers de l'artisanat non classés ailleurs",
                                nameAr: "حرفيون غير مصنفين في مكان آخر",
                            },
                        ],
                    },
                    {
                        code: "732",
                        nameEn: "Printing trades workers",
                        nameFr: "Métiers de l'imprimerie",
                        nameAr: "مهن الطباعة",
                    },
                ],
            },
            {
                code: "75",
                nameEn: "Food processing, wood working, garment and other craft and related trades workers",
                nameFr: "Métiers de l'alimentation, du travail sur bois, de l'habillement et autres métiers qualifiés de l'industrie et de l'artisanat",
                nameAr: "مهن معالجة الأغذية والعمل في الخشب والملابس والمهن الحرفية الأخرى",
                children: [
                    {
                        code: "751",
                        nameEn: "Food processing and related trades workers",
                        nameFr: "Métiers qualifiés de l'alimentation et assimilés",
                        nameAr: "مهن معالجة الأغذية والمهن المرتبطة بها",
                    },
                    {
                        code: "752",
                        nameEn: "Wood treaters, cabinet-makers and related trades workers",
                        nameFr: "Métiers qualifiés du traitement du bois, ébénistes et assimilés",
                        nameAr: "معالجو الخشب وصانعو الخزائن والمهن المرتبطة بها",
                        children: [
                            {
                                code: "7521",
                                nameEn: "Wood treaters",
                                nameFr: "Métiers qualifiés du traitement du bois",
                                nameAr: "معالجو الخشب",
                            },
                            {
                                code: "7522",
                                nameEn: "Cabinet-makers and related workers",
                                nameFr: "Ebénistes, menuisiers et assimilés",
                                nameAr: "صانعو الخزائن والمنجورات الخشبية",
                            },
                            {
                                code: "7523",
                                nameEn: "Woodworking-machine setters and setter-operators",
                                nameFr: "Régleurs et conducteurs de machines à bois",
                                nameAr: "مسوّو ومشغلو آلات النجارة",
                            },
                        ],
                    },
                    {
                        code: "753",
                        nameEn: "Garment and related trades workers",
                        nameFr: "Métiers qualifiés de l'habillement et assimilés",
                        nameAr: "مهن الملابس والمهن المرتبطة بها",
                        children: [
                            {
                                code: "7531",
                                nameEn: "Tailors, dressmakers, furriers and hatters",
                                nameFr: "Tailleurs, couturiers, fourreurs, modistes et chapeliers",
                                nameAr: "الخياطون وصانعو الفراء والقبعات",
                            },
                            {
                                code: "7532",
                                nameEn: "Garment and related pattern-makers and cutters",
                                nameFr: "Métiers qualifiés de la coupe de vêtements et assimilés",
                                nameAr: "صانعو القوالب وقاصو الملابس",
                            },
                            {
                                code: "7533",
                                nameEn: "Sewers, embroiderers and related workers",
                                nameFr: "Couseurs, brodeurs et assimilés",
                                nameAr: "الخياطون والمطرزون",
                            },
                            {
                                code: "7534",
                                nameEn: "Upholsterers and related workers",
                                nameFr: "Tapissiers et assimilés",
                                nameAr: "المنجدون",
                            },
                            {
                                code: "7535",
                                nameEn: "Pelt dressers, tanners and fellmongers",
                                nameFr: "Tanneurs, peaussiers et mégissiers",
                                nameAr: "مدبغو الجلود والفراء",
                            },
                            {
                                code: "7536",
                                nameEn: "Shoemakers and related workers",
                                nameFr: "Cordonniers et assimilés",
                                nameAr: "الإسكافيون وصانعو الأحذية",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
