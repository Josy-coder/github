import React, { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiHome, HiUsers, HiCog, HiDatabase } from 'react-icons/hi';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  subItems?: SidebarItem[];
};

const sidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: <HiHome />,
  },
  {
    label: 'Users',
    icon: <HiUsers />,
    subItems: [
      { label: 'Active Users', icon: <HiUsers /> },
      { label: 'Inactive Users', icon: <HiUsers /> },
    ],
  },
  {
    label: 'Settings',
    icon: <HiCog />,
    subItems: [
      { label: 'General', icon: <HiCog /> },
      { label: 'Appearance', icon: <HiCog /> },
    ],
  },
  {
    label: 'Backup',
    icon: <HiDatabase />,
    subItems: [
      { label: 'Create Backup', icon: <HiDatabase /> },
      { label: 'Restore Backup', icon: <HiDatabase /> },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
    setExpandedItems([]); // Collapse all sub-items when sidebar is collapsed
  };

  const handleSubItemToggle = (index: number) => {
    if (isCollapsed) {
      return; // Disable sub-item expansion when sidebar is collapsed
    }

    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <TooltipProvider>
      <div
        className={`fixed left-0 top-0 h-screen bg-gray-800 p-4 transition-all duration-300 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <nav>
            <ul>
              {sidebarItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <Popover>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <PopoverTrigger asChild>
                          <div
                            className={`flex items-center px-2 py-1 rounded-md hover:bg-gray-700 cursor-pointer ${
                              isCollapsed ? 'justify-center' : ''
                            }`}
                            onClick={() => handleSubItemToggle(index)}
                          >
                            <span className="text-gray-400 mr-2">{item.icon}</span>
                            {!isCollapsed && <span className="text-gray-300">{item.label}</span>}
                            {item.subItems && !isCollapsed && (
                              <span className="ml-auto text-gray-400">
                                {expandedItems.includes(index) ? (
                                  <HiChevronDoubleLeft />
                                ) : (
                                  <HiChevronDoubleRight />
                                )}
                              </span>
                            )}
                          </div>
                        </PopoverTrigger>
                      </TooltipTrigger>
                      {isCollapsed && (
                        <TooltipContent side="right" align="start">
                          <p>{item.label}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                    {item.subItems && isCollapsed && (
                      <PopoverContent side="right" align="start" className="p-4 bg-gray-700 text-gray-300 rounded-md shadow-lg">
                        <ul>
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="mb-2">
                              <div className="flex items-center">
                                <span className="text-gray-400 mr-2">{subItem.icon}</span>
                                <span>{subItem.label}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </PopoverContent>
                    )}
                  </Popover>
                  {item.subItems && !isCollapsed && expandedItems.includes(index) && (
                    <ul className="ml-6">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-1">
                          <div className="flex items-center px-2 py-1 rounded-md hover:bg-gray-700">
                            <span className="text-gray-400 mr-2">{subItem.icon}</span>
                            <span className="text-gray-300">{subItem.label}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-end">
            <button
              className="p-2 rounded-full hover:bg-gray-700"
              onClick={handleCollapseToggle}
            >
              {isCollapsed ? (
                <HiChevronDoubleRight className="text-gray-400" />
              ) : (
                <HiChevronDoubleLeft className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Sidebar;