// components/CategoryDropdown.js
import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";
import { categories } from "../../constants/data";

const CategoryDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowSubcategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowSubcategories(true);
  };

  const handleBackClick = () => {
    setShowSubcategories(false);
    setActiveCategory(null);
  };

  const handleSubcategorySelect = (subCategory) => {
    setSelectedCategory(subCategory.name);
    setIsOpen(false);
    setShowSubcategories(false);
    setActiveCategory(null);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-left border border-black rounded-md hover:border-gray-300 flex items-center justify-between"
      >
        <span className="text-gray-700">
          {selectedCategory || "Choose category"}
        </span>
        <ChevronRight
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute z-50 w-64 mt-1 bg-white border rounded-md shadow-lg">
          {showSubcategories ? (
            <>
              {/* Back Button */}
              <button
                onClick={handleBackClick}
                className="w-full px-3 py-2 text-left border-b flex items-center gap-2 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{activeCategory.name}</span>
              </button>

              {/* Subcategories List */}
              <div className="max-h-64 overflow-y-auto">
                {activeCategory.subCategories.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSubcategorySelect(sub)}
                    className="w-full px-3 py-2 border-b text-left hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span
                      className={`w-8 h-8 flex items-center justify-center ${activeCategory.color}`}
                    >
                      {sub.icon}
                    </span>
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Search Box */}
              <div className="p-2 border-b">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-8 py-1.5 border rounded-md text-sm"
                  />
                  <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Main Categories List */}
              <div className="h-36 overflow-y-auto">
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="w-full px-3 py-2 border-b text-left hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span
                      className={`w-8 h-8 flex items-center justify-center ${category.color}`}
                    >
                      {category.icon}
                    </span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
