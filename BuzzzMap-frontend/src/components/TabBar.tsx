import React from "react";
import { MapPin, TrendingUp, User } from "lucide-react";

interface TabBarProps {
    activeTab: "explore" | "trending" | "user";
    onTabChange: (tab: "explore" | "trending" | "user") => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="bg-white border-t border-gray-200 flex justify-around py-2 shadow-md">
            <button
                className={`flex flex-col items-center justify-center w-1/3 py-1 ${
                    activeTab === "explore" ? "text-blue-600" : "text-gray-500"
                }`}
                onClick={() => onTabChange("explore")}
            >
                <MapPin
                    className={`h-5 w-5 ${
                        activeTab === "explore"
                            ? "text-blue-600"
                            : "text-gray-500"
                    }`}
                />
                <span className="text-xs mt-1">探索</span>
            </button>

            <button
                className={`flex flex-col items-center justify-center w-1/3 py-1 ${
                    activeTab === "trending" ? "text-blue-600" : "text-gray-500"
                }`}
                onClick={() => onTabChange("trending")}
            >
                <TrendingUp
                    className={`h-5 w-5 ${
                        activeTab === "trending"
                            ? "text-blue-600"
                            : "text-gray-500"
                    }`}
                />
                <span className="text-xs mt-1">トレンド</span>
            </button>

            <button
                className={`flex flex-col items-center justify-center w-1/3 py-1 ${
                    activeTab === "user" ? "text-blue-600" : "text-gray-500"
                }`}
                onClick={() => onTabChange("user")}
            >
                <User
                    className={`h-5 w-5 ${
                        activeTab === "user" ? "text-blue-600" : "text-gray-500"
                    }`}
                />
                <span className="text-xs mt-1">マイページ</span>
            </button>
        </div>
    );
};

export default TabBar;
