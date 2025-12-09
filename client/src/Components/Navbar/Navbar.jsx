

import { useState } from "react";
import { FiUser, FiHeart, FiSearch, FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logoBg.png";

import { divisions, locations, statuses, types } from "./filterData";

import projects from "../HeroSlider/royalProjects";


export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAboutSubmenu, setOpenAboutSubmenu] = useState(false);
  const [openProjectsSubmenu, setOpenProjectsSubmenu] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const navIcons = [
    { icon: <FiUser />, label: "Login", to: "/login", showOnMobile: true },
    { icon: <FiHeart />, label: "Favourites", to: "/favourites", showOnMobile: false },
    {
      icon: <FiSearch />,
      label: "Search",
      showOnMobile: false,
      action: () => {
        setOpenMenu(false);
        setOpenSearch(true);
      },
    },
  ];

  const aboutSubmenus = [
    { label: "Corporate Info", to: "/about/corporate-info" },
    { label: "Our Leaders", to: "/about/our-leaders" },
    { label: "Award & Accolades", to: "/about/awards" },
  ];

  const projectsSubmenus = [
    { label: "Residential", to: "/projects/residential" },
    { label: "Commercial", to: "/projects/commercial" },
    { label: "Sapphire Series", to: "/projects/sapphire-series" },
    { label: "Land", to: "/projects/land" },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "upcoming":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const panelAnimation = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.38, ease: "easeInOut" },
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center bg-black/40 border-b border-white">
        {/* Logo */}
        <div className="w-[140px] md:w-[200px]">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-16 w-full object-cover" alt="Logo" />
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center text-xl text-gray-300">
          {navIcons.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={item.action}
              className={`relative md:p-[25px] md:px-6 p-6 cursor-pointer overflow-hidden md:text-xl text-sm border-l flex justify-center 
                         before:absolute before:left-[-100%] before:top-0 
                         before:h-full before:w-full before:bg-gray-50 
                         before:transition-all before:duration-500 hover:before:left-0
                         hover:text-gray-500 transition-all
                         ${item.showOnMobile ? 'block' : 'hidden md:flex'}`}
              title={item.label}>
              <span className="relative z-10">{item.icon}</span>
            </Link>
          ))}

          {/* Menu Button */}
          <div
            onClick={() => {
              setOpenSearch(false);
              setOpenMenu(true);
            }}
            className="relative w-full md:p-[25px] p-6 cursor-pointer overflow-hidden md:text-xl text-sm border-l
                      before:absolute before:left-[-100%] before:top-0 
                      before:h-full before:w-full before:bg-gray-50
                      before:transition-all before:duration-500 hover:before:left-0
                      transition-all hover:text-gray-500">
            <span className="relative z-10">
              <FiMenu />
            </span>
          </div>
        </div>
      </nav>

      {/* SEARCH PANEL */}
      <AnimatePresence>
        {openSearch && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenSearch(false)}
              className="fixed inset-0 bg-black/50 z-[55]"/>

            {/* Panel */}
            <motion.div
              {...panelAnimation}
              className="fixed top-0 right-0 h-screen w-full md:w-[90vw] lg:w-[80vw] bg-white shadow-xl z-[60] overflow-y-auto">
              <button
                onClick={() => setOpenSearch(false)}
                className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-black">
                <FiX />
              </button>

              <div className="h-full flex flex-col md:flex-row">
                {/* FILTERS */}
                <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 p-6 md:p-8 border-b md:border-b-0 md:border-r overflow-y-auto">
                  <h2 className="text-2xl font-semibold mb-6 md:mb-8">Search Projects</h2>

                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 md:mb-6"/>

                  {/* Filters */}
                  {[
                    { label: "Division", state: selectedDivision, set: setSelectedDivision, items: divisions },
                    { label: "Type", state: selectedType, set: setSelectedType, items: types },
                    { label: "Status", state: selectedStatus, set: setSelectedStatus, items: statuses },
                    { label: "Location", state: selectedLocation, set: setSelectedLocation, items: locations },
                  ].map((f, i) => (
                    <div className="mb-4 md:mb-6" key={i}>
                      <label className="block text-sm font-medium mb-1 md:mb-2">{f.label}</label>
                      <select
                        value={f.state}
                        onChange={(e) => f.set(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      >
                        <option value="">All {f.label}s</option>
                        {f.items.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedDivision("");
                      setSelectedType("");
                      setSelectedStatus("");
                      setSelectedLocation("");
                    }}
                    className="w-full bg-gray-800 text-white py-3 rounded-lg mt-2 md:mt-4">
                    Clear Filters
                  </button>
                </div>

                {/* PROJECTS */}
                <div className="flex-1 p-6 md:p-8 overflow-y-hidden">
                  <h2 className="text-2xl font-semibold mb-4">
                    ({projects.length}) Projects found
                  </h2>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        onClick={() => setOpenSearch(false)}
                        className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition">
                          <div className="h-48 overflow-hidden relative">
                            <img
                              src={project.image}
                              className="w-full h-full object-cover group-hover:scale-110 transition"
                              alt={project.name}
                            />
                            <span
                              className={`${getStatusColor(project.status)} absolute top-3 right-3 px-3 py-1 rounded-full text-xs`}>
                              {project.status}
                            </span>
                          </div>

                          <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                              {project.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-600 gap-2">
                              <span>{project.location}</span>
                              <span>•</span>
                              <span>{project.type}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MENU PANEL */}
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMenu(false)}
              className="fixed inset-0 bg-black/50 z-[55]"
            />

            <motion.div
              {...panelAnimation}
              className="fixed top-0 right-0 h-screen w-[300px] bg-blue-900/90 shadow-xl z-[60] p-8 overflow-y-auto">
              <button
                onClick={() => setOpenMenu(false)}
                className="absolute top-6 right-6 text-3xl text-white hover:scale-105 cursor-pointer">
                <FiX />
              </button>

              <ul className="flex flex-col gap-4 text-gray-300 mt-16 text-lg md:text-xl">
                <Link 
                  to="/" 
                  onClick={() => setOpenMenu(false)} 
                  className="hover:text-white transition duration-200 uppercase">
                  Home
                </Link>

                {/* About Us with Submenu */}
                <div>
                  <div
                    onClick={() => setOpenAboutSubmenu(!openAboutSubmenu)}
                    className="hover:text-white transition duration-200 uppercase cursor-pointer flex items-center justify-between">
                    <span>About us</span>
                    {openAboutSubmenu ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                  
                  <AnimatePresence>
                    {openAboutSubmenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <ul className="flex flex-col gap-2 mt-2 ml-4 text-[14px] uppercase">
                          {aboutSubmenus.map((submenu, index) => (
                            <Link
                              key={index}
                              to={submenu.to}
                              onClick={() => setOpenMenu(false)}
                              className="hover:text-white transition duration-200 py-1">
                              {submenu.label}
                            </Link>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Projects with Submenu */}
                <div>
                  <div
                    onClick={() => setOpenProjectsSubmenu(!openProjectsSubmenu)}
                    className="hover:text-white transition duration-200 uppercase cursor-pointer flex items-center justify-between">
                    <span>Projects</span>
                    {openProjectsSubmenu ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                  
                  <AnimatePresence>
                    {openProjectsSubmenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <ul className="flex flex-col gap-2 mt-2 ml-4 text-[14px] uppercase">
                          {projectsSubmenus.map((submenu, index) => (
                            <Link
                              key={index}
                              to={submenu.to}
                              onClick={() => setOpenMenu(false)}
                              className="hover:text-white transition duration-200 py-1">
                              {submenu.label}
                            </Link>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/land-owner" 
                  onClick={() => setOpenMenu(false)} 
                  className="hover:text-white transition duration-200 uppercase">
                  Land owner
                </Link>
                <Link 
                  to="/media" 
                  onClick={() => setOpenMenu(false)} 
                  className="hover:text-white transition duration-200 uppercase">
                  Media Center
                </Link>
                <Link 
                  to="/career" 
                  onClick={() => setOpenMenu(false)} 
                  className="hover:text-white transition duration-200 uppercase">
                  Career
                </Link>
                <Link 
                  to="/enquiry" 
                  onClick={() => setOpenMenu(false)} 
                  className="hover:text-white transition duration-200 uppercase">
                  Customer Enquiry
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setOpenMenu(false)} 
                  className="hover:text-white transition duration-200 uppercase">
                  Contact
                </Link>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}