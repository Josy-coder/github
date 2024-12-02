import { HiHome, HiUsers, HiCog, HiDatabase } from "react-icons/hi";

type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  subItems?: SidebarItem[];
};

const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: <HiHome />,
  },
  {
    label: "Users",
    icon: <HiUsers />,
    subItems: [
      { label: "Active Users", icon: <HiUsers /> },
      { label: "Inactive Users", icon: <HiUsers /> },
    ],
  },
  {
    label: "Settings",
    icon: <HiCog />,
    subItems: [
      { label: "General", icon: <HiCog /> },
      { label: "Appearance", icon: <HiCog /> },
    ],
  },
  {
    label: "Backup",
    icon: <HiDatabase />,
    subItems: [
      { label: "Create Backup", icon: <HiDatabase /> },
      { label: "Restore Backup", icon: <HiDatabase /> },
    ],
  },
];

export