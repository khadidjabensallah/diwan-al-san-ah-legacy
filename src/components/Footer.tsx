import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-heritage-brown text-heritage-cream section-pattern">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                د
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">ديوان الصنعة</h3>
                <p className="text-xs opacity-70">حفظ التراث الجزائري</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              منصة رقمية جزائرية مخصصة لحفظ الحرف التقليدية وتوثيقها ونقلها للأجيال القادمة بطريقة عصرية ومبتكرة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/explore" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  استكشف الحرف
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  سوق الحرفيين
                </Link>
              </li>
              <li>
                <Link to="/researchers" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ركن الباحثين
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="w-4 h-4" />
                <span>contact@diwanalsanaa.dz</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+213 21 XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4" />
                <span>الجزائر العاصمة، الجزائر</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">تابعنا</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-60 mt-6">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-heritage-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © {currentYear} ديوان الصنعة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
