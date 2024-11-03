import {
  Users,
  LayoutGrid,
  LucideIcon,
  List,
  Layers3,
  UserCog,
  BookOpen,
  Headset,
  MessageCircleQuestion,
  MessagesSquare,
  PlusCircle,
  BookOpenCheck,
  FileText,
  Bell,
  ScanSearch,
  MessageCircleWarning,
  UserPen,
  Book,
  CalendarArrowUp,
  HandCoins,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getAdminMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname === "/dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Main",
      menus: [
        {
          href: "/dashboard/donations",
          label: "Donations",
          active: pathname.includes("/dashboard/donations"),
          icon: HandCoins,
          submenus: [],
        },
      ],
    },
    //   {
    //     groupLabel: "Support",
    //     menus: [
    //       {
    //         href: "/admin/chat",
    //         label: "Chat",
    //         active: pathname.includes("/admin/chat"),
    //         icon: MessagesSquare,
    //         submenus: [],
    //       },
    //     ],
    //   },
    //   {
    //     groupLabel: "Notice",
    //     menus: [
    //       {
    //         href: "/admin/notice",
    //         label: "Notice",
    //         active: pathname.includes("/admin/notice"),
    //         icon: Bell,
    //         submenus: [],
    //       },
    //     ],
    //   },
  ];
}
