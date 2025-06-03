"use client";
import { motion } from "framer-motion";
import { playfair, lora } from "@/components/Introduction";

interface OverviewData {
  introduction: {
    title: string;
    description: string;
    values: Array<{
      title: string;
      description: string;
    }>;
    conclusion: string;
  };
  statistics: {
    total: number;
    categories: Array<{
      name: string;
      count: number;
    }>;
  };
  distribution: Array<{
    location: string;
    count: number;
  }>;
  generalInfo: string[];
}

interface SiteOverviewProps {
  overview: OverviewData;
  colorTheme: "amber" | "green";
}

export default function SiteOverview({ overview, colorTheme }: SiteOverviewProps) {
  const colors = {
    amber: {
      text: "text-amber-800",
      bg: "bg-amber-600",
      bullet: "text-amber-600",
      border: "border-amber-200",
      hover: "hover:bg-amber-50"
    },
    green: {
      text: "text-green-800",
      bg: "bg-green-600",
      bullet: "text-green-600",
      border: "border-green-200",
      hover: "hover:bg-green-50"
    }
  };

  const theme = colors[colorTheme];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-center`}>{overview.introduction.title}</h2>
          <p className={`${lora.className} text-lg mb-8 max-w-4xl mx-auto text-gray-700`}>
            {overview.introduction.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {overview.introduction.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-6 rounded-lg shadow-md border ${theme.border} ${theme.hover} transition-colors duration-300`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${theme.text}`}>{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <p className={`${lora.className} text-lg mb-16 max-w-4xl mx-auto text-gray-700 italic text-center`}>
            {overview.introduction.conclusion}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className={`${playfair.className} text-xl font-semibold mb-6 text-center`}>Phân Loại</h3>
              <div className="space-y-4">
                {overview.statistics.categories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{category.name}</span>
                    <div className="flex items-center">
                      <div className="w-64 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`${theme.bg} h-2.5 rounded-full`}
                          style={{ width: `${(category.count / overview.statistics.total) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`${theme.text} font-medium`}>{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className={`${playfair.className} text-xl font-semibold mb-6 text-center`}>Phân Bố Địa Lý</h3>
              <div className="space-y-4">
                {overview.distribution.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.location}</span>
                    <div className="flex items-center">
                      <div className="w-64 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`${theme.bg} h-2.5 rounded-full`}
                          style={{ width: `${(item.count / overview.statistics.total) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`${theme.text} font-medium`}>{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className={`${playfair.className} text-xl font-semibold mb-6 text-center`}>Thông Tin Chung</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {overview.generalInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className={`${theme.bullet} mr-2`}>•</span>
                  <span className="text-gray-700">{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
