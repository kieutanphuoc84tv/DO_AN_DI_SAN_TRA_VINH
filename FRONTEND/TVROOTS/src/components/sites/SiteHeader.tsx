"use client";
import { motion } from "framer-motion";
import { playfair } from "@/components/Introduction";

interface SiteHeaderProps {
  title: string;
  description: string;
  colorTheme: "amber" | "green";
}

export default function SiteHeader({ title, description, colorTheme }: SiteHeaderProps) {
  const bgColor = colorTheme === "amber" ? "bg-amber-700" : "bg-green-700";
  
  return (
    <div className={`${bgColor} text-white py-16`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4`}>{title}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
