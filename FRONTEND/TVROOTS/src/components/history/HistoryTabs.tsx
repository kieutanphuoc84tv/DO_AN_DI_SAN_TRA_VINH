"use client";
import { useState } from "react";
import { playfair } from "@/components/Introduction";
import { FaCalendarAlt, FaLandmark, FaBook, FaMapMarkedAlt } from "react-icons/fa";

interface HistoryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function HistoryTabs({ activeTab, setActiveTab }: HistoryTabsProps) {
  const tabs = [
    {
      id: "ancient",
      label: "Thời kỳ cổ đại",
      icon: <FaCalendarAlt className="mr-2" />,
      description: "Từ thế kỷ I đến thế kỷ VII"
    },
    {
      id: "medieval",
      label: "Thời kỳ trung đại",
      icon: <FaLandmark className="mr-2" />,
      description: "Từ thế kỷ VII đến thế kỷ XVII"
    },
    {
      id: "modern",
      label: "Thời kỳ cận đại",
      icon: <FaBook className="mr-2" />,
      description: "Từ thế kỷ XVII đến đầu thế kỷ XX"
    },
    {
      id: "contemporary",
      label: "Thời kỳ hiện đại",
      icon: <FaMapMarkedAlt className="mr-2" />,
      description: "Từ năm 1954 đến nay"
    }
  ];

  return (
    <div className="bg-amber-50 rounded-xl p-6 shadow-md border border-amber-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-amber-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white text-amber-800 hover:bg-amber-100 border border-amber-200"
            }`}
          >
            <div className="flex items-center text-lg font-semibold mb-2">
              {tab.icon}
              {tab.label}
            </div>
            <p className={`text-sm ${activeTab === tab.id ? "text-amber-100" : "text-gray-600"}`}>
              {tab.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
