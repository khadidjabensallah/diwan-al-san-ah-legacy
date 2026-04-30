import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logoImage from "@/assets/logo.png";

// Force overwrite Lovable's meta tags
document.title = "ديوان الصنعة | Diwan Al San'ah";
const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
if (link) {
    link.href = logoImage;
} else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = logoImage;
    document.head.appendChild(newLink);
}

createRoot(document.getElementById("root")!).render(<App />);
