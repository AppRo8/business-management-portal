export interface ChildItem {
  id?: number | string;
  name: string;
  icon?: LucideIcon;
  items?: ChildItem[];
  item?: unknown;
  url?: string;
  color?: string;
  disabled?: boolean;
  subtitle?: string;
  badge?: boolean;
  badgeType?: string;
  badgeContent?: string;
  isActive?: boolean;
  external?: boolean;
  isPro?: boolean
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: LucideIcon;
  id?: number;
  to?: string;
  item?: MenuItem[];
  items?: ChildItem[];
  url?: string;
  disabled?: boolean;
  subtitle?: string;
  badgeType?: string;
  badge?: boolean;
  badgeContent?: string;
  isActive?: boolean;
  isPro?: boolean
}

import { uniqueId } from "lodash";

import {
  BarChart3,
  Banknote,
  BookOpen,
  CreditCard,
  FileText,
  Files,
  HelpCircle,
  Key,
  Lock,
  LogIn,
  LucideIcon,
  PieChart,
  Plug,
  Settings,
  ShieldCheck,
  Table,
  Tag,
  Ticket,
  Unlink,
  UserPlus, Smile, House, NotebookText, Component,
  Table2,
  Form,
  CircleUserRound,
  Sparkles,
  Calendar,
  MessageCircle,
  Mail,
  Contact,
  Receipt,
  UserCircle,
  ShoppingBag,
  List,
  Users,
  Package,
  ChartBar,
  ShoppingCart,
  GraduationCap,
  HeartPulse
} from "lucide-react"

const SidebarContent: MenuItem[] = [
  {
    heading: "Dashboard",
    items: [
      {
        id: uniqueId(),
        name: "Modern",
        icon: House,
        url: "/",
      }
    ],
  },
  {
    heading: "Pages",
    items: [
      {
        id: uniqueId(),
        name: "Table",
        icon: Table2,
        url: "/pages/tables",
      },
      {
        id: uniqueId(),
        name: "Form",
        icon: Form,
        url: "/pages/form",
      },
      {
        id: uniqueId(),
        name: "User Profile",
        icon: CircleUserRound,
        url: "/pages/user-profile",
      },
    ],
  },
  {
    heading: "Apps",
    items: [
      {
        id: uniqueId(),
        name: "Notes",
        icon: NotebookText,
        url: "/apps/notes",
      },
      {
        name: "Blogs",
        id: uniqueId(),
        icon: BookOpen,
        items: [
          {
            id: uniqueId(),
            name: "Blog Listing",
            url: "/apps/blog/post",
          },
          {
            id: uniqueId(),
            name: "Blog Detail",
            url: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
          {
            id: uniqueId(),
            name: "Blog Edit",
            url: "/apps/blog/edit",
          },
          {
            id: uniqueId(),
            name: "Blog Create",
            url: "/apps/blog/create",
          },
          {
            id: uniqueId(),
            name: "Manage Blog",
            url: "/apps/blog/manage-blog",
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Tickets",
        icon: Ticket,
        url: "/apps/tickets",
      },
    ],
  },
  {
    heading: "UI ELEMENTS",
    items: [
      {
        name: "AppRo8",
        id: uniqueId(),
        icon: Component,
        items: [

          {
            id: uniqueId(),
            name: "Button",
            url: "https://www.appro8.com/components/button",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Avatar",
            url: "https://www.appro8.com/components/avatar",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Badge",
            url: "https://www.appro8.com/components/badge",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Tooltip",
            url: "https://www.appro8.com/components/tooltip",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Input",
            url: "https://www.appro8.com/components/input",
            external: true,
          },

          {
            id: uniqueId(),
            name: "Textarea",
            url: "https://www.appro8.com/components/textarea",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Switch",
            url: "https://www.appro8.com/components/switch",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Tab",
            url: "https://www.appro8.com/components/tab",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "https://www.appro8.com/components/select",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "https://www.appro8.com/components/checkbox",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Accordion",
            url: "https://www.appro8.com/components/accordion",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Card",
            url: "https://www.appro8.com/components/card",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            url: "https://www.appro8.com/components/radio-group",
            external: true,
          },

          {
            id: uniqueId(),
            name: "Datepicker",
            url: "https://www.appro8.com/components/calendar",
            external: true,
          },
        ],
      },


    ],
  },
  {
    heading: "FORM ELEMENTS",
    items: [
      {
        name: "AppRo8 Forms",
        id: uniqueId(),
        icon: Banknote,
        items: [

          {
            id: uniqueId(),
            name: "Input",
            url: "https://www.appro8.com/components/input",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "https://www.appro8.com/components/select",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "https://www.appro8.com/components/checkbox",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Radio",
            url: "https://www.appro8.com/components/radio-group",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            url: "https://www.appro8.com/components/calendar",
            external: true,
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "https://www.appro8.com/components/select",
            external: true,
          },
        ],
      },
     {
        name: "Form layouts",
        id: uniqueId(),
        icon: Files,
        items: [
          {
            id: uniqueId(),
            name: "Forms Layouts",
            url: "https://www.appro8.com/ui-blocks/forms#forms-04",
            external: true,
            isPro: true
          },
        
         
          {
            id: uniqueId(),
            name: "Form Validation",
            url: "https://www.appro8.com/ui-blocks/forms#forms-07",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Form Examples",
            url: "https://www.appro8.com/ui-blocks/forms",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Repeater Forms",
            url: "https://www.appro8.com/ui-blocks/forms#forms-08",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Form Wizard",
            url: "https://www.appro8.com/ui-blocks/forms#forms-09",
            external: true,
            isPro: true
          },
        ],
      },
      
    ],
  },
  {
    heading: "Widgets",
    items: [
      {
        name: "Cards",
        id: uniqueId(),
        icon: CreditCard,
        url: "https://www.appro8.com/ui-blocks/card",
        external: true

      },
      
      {
        name: "Charts",
        id: uniqueId(),
        icon: PieChart,
        url: 'https://www.appro8.com/ui-blocks/chart',
        external: true

      },
    ],
  },
  {
    heading: "Icons",
    items: [
      {
        id: uniqueId(),
        name: "Iconify Icons",
        icon: Smile,
        url: "/icons/iconify",
      },
    ],
  },
  {
    heading: "Auth",
    items: [
      {
        id: uniqueId(),
        name: "Error",
        icon: Unlink,
        url: "/auth/error",
      },
      {
        name: "Login",
        id: uniqueId(),
        icon: LogIn,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Login",
            url: "/auth/auth2/login",
          },
        ],
      },
      {
        name: "Register",
        id: uniqueId(),
        icon: UserPlus,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Register",
            url: "/auth/auth2/register",
          },
        ],
      },
      {
        name: "Forgot Password",
        id: uniqueId(),
        icon: Lock,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Forgot Pwd",
            url: "/auth/auth2/forgot-password",
          },
        ],
      },
      {
        name: "Two Steps",
        id: uniqueId(),
        icon: ShieldCheck,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Two Steps",
            url: "/auth/auth2/two-steps",
          },
        ],
      }
    ],
  },

  {
    heading: "Home",
    items: [
      {
        id: uniqueId(),
        name: "Analytics",
        icon: ChartBar,
        url: "https://www.appro8.com/",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        name: "eCommerce",
        icon: ShoppingCart,
        url: "https://www.appro8.com/dashboards/ecommerce",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        name: "SaaS + AI Dashboard",
        icon: Sparkles,
        url: "https://www.appro8.com/dashboards/saas-ai",
        external: true,
        isPro: true
      },
{
        id: uniqueId(),
        name: "School",
        icon:  GraduationCap,
        url: "https://www.appro8.com/dashboards/school",
        external: true,
        isPro: true
      }, {
        id: uniqueId(),
        name: "Health ",
        icon: HeartPulse,
        url: "https://www.appro8.com/dashboards/health",
        external: true,
        isPro: true
      },
    
    ],
  },

  {
    heading: "Apps",
    items: [
      {
        name: "AI",
        icon: Sparkles,
        id: uniqueId(),
        items: [
          {
            id: uniqueId(),
            name: "Chat",
            url: "https://www.appro8.com/apps/chat-ai",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Image ",
            url: "https://www.appro8.com/apps/image-ai",
            external: true,
            isPro: true
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Calendar",
        icon: Calendar,
        url: "https://www.appro8.com/apps/calendar",
        external: true,
        isPro: true
      },

      {
        id: uniqueId(),
        name: "Chats",
        icon: MessageCircle,
        url: "https://www.appro8.com/apps/chats",
        external: true,
        isPro: true
      },

      {
        id: uniqueId(),
        name: "Email",
        icon: Mail,
        url: "https://www.appro8.com/apps/email",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Contacts",
        icon: Contact,
        url: "https://www.appro8.com/apps/contacts",
        external: true,
        isPro: true
      },
      {
        name: "Invoice",
        id: uniqueId(),
        icon: Receipt,
        items: [
          {
            id: uniqueId(),
            name: "List",
            url: "https://www.appro8.com/apps/invoice/list",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "https://www.appro8.com/apps/invoice/detail/PineappleInc",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Create",
            url: "https://www.appro8.com/apps/invoice/create",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Edit",
            url: "https://www.appro8.com/apps/invoice/edit/PineappleInc",
            external: true,
            isPro: true
          },
        ],
      },
      {
        name: "User Profile",
        id: uniqueId(),
        icon: UserCircle,
        items: [
          {
            id: uniqueId(),
            name: "Profile",
            url: "https://www.appro8.com/apps/user-profile/profile",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Followers",
            url: "https://www.appro8.com/apps/user-profile/followers",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Friends",
            url: "https://www.appro8.com/apps/user-profile/friends",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Gallery",
            url: "https://www.appro8.com/apps/user-profile/gallery",
            external: true,
            isPro: true
          },
        ],
      },
      {
        name: "Ecommerce",
        id: uniqueId(),
        icon: ShoppingBag,
        items: [
          {
            id: uniqueId(),
            name: "Shop",
            url: "https://www.appro8.com/apps/ecommerce/shop",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "https://www.appro8.com/apps/ecommerce/detail/3",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "List",
            url: "https://www.appro8.com/apps/ecommerce/list",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Checkout",
            url: "https://www.appro8.com/apps/ecommerce/checkout",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Add Product",
            url: "https://www.appro8.com/apps/ecommerce/addproduct",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Edit Product",
            url: "https://www.appro8.com/apps/ecommerce/editproduct",
            external: true,
            isPro: true
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Kanban",
        icon: List,
        url: "https://www.appro8.com/apps/kanban",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        icon: Users,
        name: "Customers",
        url: "https://www.appro8.com/react-tables/user-datatable",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        icon: Package,
        name: "Orders",
        url: "https://www.appro8.com/react-tables/order-datatable",
        external: true,
        isPro: true
      },
    ],
  },
  {
    heading: "TABLES",
    items: [
      {
        name: "AppRo8 Tables",
        id: uniqueId(),
        icon: Table,
        items: [
          {
            name: "Basic Table",
            id: uniqueId(),
            url: "https://www.appro8.com/appro8-tables/basic",
            external: true,
            isPro: true
          },
          {
            name: "Striped Row Table",
            id: uniqueId(),
            url: "https://www.appro8.com/appro8-tables/striped-row",
            external: true,
            isPro: true
          },
          {
            name: "Hover Table",
            id: uniqueId(),
            url: "https://www.appro8.com/appro8-tables/hover-table",
            external: true,
            isPro: true
          },
          {
            name: "Checkbox Table",
            id: uniqueId(),
            url: "https://www.appro8.com/appro8-tables/checkbox-table",
            external: true,
            isPro: true
          },
        ],
      },
      {
        name: "Tanstack / React Table",
        id: uniqueId(),
        icon: Table2,
        items: [
          {
            id: uniqueId(),
            name: "Basic",
            url: "https://www.appro8.com/react-tables/basic",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Dense",
            url: "https://www.appro8.com/react-tables/dense",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Sorting",
            url: "https://www.appro8.com/react-tables/sorting",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Filtering",
            url: "https://www.appro8.com/react-tables/filtering",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Pagination",
            url: "https://www.appro8.com/react-tables/pagination",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Row Selection",
            url: "https://www.appro8.com/react-tables/row-selection",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Column Visibility",
            url: "https://www.appro8.com/react-tables/columnvisibility",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Editable",
            url: "https://www.appro8.com/react-tables/editable",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Sticky",
            url: "https://www.appro8.com/react-tables/sticky",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Drag & Drop",
            url: "https://www.appro8.com/react-tables/drag-drop",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Empty",
            url: "https://www.appro8.com/react-tables/empty",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Expanding",
            url: "https://www.appro8.com/react-tables/expanding",
            external: true,
            isPro: true
          },
        ],
      },
    ],
  },
  {
    heading: "Charts",
    items: [
      // {
      //   name: "ApexCharts",
      //   id: uniqueId(),
      //   icon: PieChart,
      //   items: [
      //     {
      //       id: uniqueId(),
      //       name: "Line Chart",
      //       url: "https://www.appro8.com/charts/apex-charts/line",
      //       external: true,
      //       isPro: true
      //     },
      //     {
      //       id: uniqueId(),
      //       name: "Area Chart",
      //       url: "https://www.appro8.com/charts/apex-charts/area",
      //       external: true,
      //       isPro: true
      //     },
      //     {
      //       id: uniqueId(),
      //       name: "Gradient Chart",
      //       url: "https://www.appro8.com/charts/apex-charts/gradient",
      //       external: true,
      //       isPro: true
      //     },
      //     {
      //       id: uniqueId(),
      //       name: "Candlestick",
      //       url: "https://www.appro8.com/charts/apex-charts/candlestick",
      //       external: true,
      //       isPro: true
      //     },
      //     {
      //       id: uniqueId(),
      //       name: "Column",
      //       url: "https://www.appro8.com/charts/apex-charts/column",
      //       external: true,
      //       isPro: true
      //     },
      //     {
      //       id: uniqueId(),
      //       name: "Doughnut & Pie",
      //       url: "https://www.appro8.com/charts/apex-charts/doughnut",
      //       external: true,
      //       isPro: true
      //     },
      //     {
      //       id: uniqueId(),
      //       name: "Radialbar & Radar",
      //       url: "https://www.appro8.com/charts/apex-charts/radialbar",
      //       external: true,
      //       isPro: true
      //     },
      //   ],
      // },
       {
        name: "AppRo8 Charts",
        id: uniqueId(),
        icon: BarChart3,
        items: [
          {
            id: uniqueId(),
            name: "Line Chart",
            url: "https://www.appro8.com/components/line-chart",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Area Chart",
            url: "https://www.appro8.com/components/area-chart",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Radar",
            url: "https://www.appro8.com/components/radar-chart",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Bar",
            url: "https://www.appro8.com/components/bar-chart",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Doughnut & Pie",
            url: "https://www.appro8.com/components/pie-chart",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Radialbar",
            url: "https://www.appro8.com/components/radial-chart",
            external: true,
            isPro: true
          },
        ],
      },
    ],
  },
  {
    heading: "PRO Pages",
    items: [
      {
        name: "Account Setting",
        icon: Settings,
        id: uniqueId(),
        url: "https://www.appro8.com/theme-pages/account-settings",
        isPro: true,
        external: true,
      },
      {
        name: "FAQ",
        icon: HelpCircle,
        id: uniqueId(),
        url: "https://www.appro8.com/theme-pages/faq",
        external: true,
        isPro: true
      },
      {
        name: "Pricing",
        icon: Tag,
        id: uniqueId(),
        url: "https://www.appro8.com/theme-pages/pricing",
        external: true,
        isPro: true
      },

      {
        name: "Roll Base Access",
        icon: ShieldCheck,
        id: uniqueId(),
        url: "https://www.appro8.com/theme-pages/casl",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Integrations",
        icon: Plug,
        url: "https://www.appro8.com/theme-pages/inetegration",
        external: true,
        isPro: true

      },
      {
        id: uniqueId(),
        name: "API Keys",
        icon: Key,
        url: "https://www.appro8.com/theme-pages/apikey",
        external: true,
        isPro: true
      },

      {
        id: uniqueId(),
        name: "Empty Pages",
        icon: FileText,
        items: [
          {
            id: uniqueId(),
            name: "Empty Page 1",
            url: "https://www.appro8.com/theme-pages/empty-page/empty-1",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Empty Page 2",
            url: "https://www.appro8.com/theme-pages/empty-page/empty-2",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Empty Page 3",
            url: "https://www.appro8.com/theme-pages/empty-page/empty-3",
            external: true,
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Empty Page 4",
            url: "https://www.appro8.com/theme-pages/empty-page/empty-4",
            external: true,
            isPro: true
          },
        ],
      }


    ],

  },
  {
    heading: "Auth",
    items: [
      {
        name: "Login",
        id: uniqueId(),
        icon: LogIn,
        items: [
          {
            id: uniqueId(),
            name: "Side Login",
            url: "https://www.appro8.com/auth/auth1/login",
            external: true,
            isPro: true
          },
        ],
      },
      {
        name: "Register",
        id: uniqueId(),
        icon: UserPlus,
        items: [
          {
            id: uniqueId(),
            name: "Side Register",
            url: "https://www.appro8.com/auth/auth1/register",
            external: true,
            isPro: true
          }
        ],
      },
      {
        name: "Forgot Password",
        id: uniqueId(),
        icon: Lock,
        items: [
          {
            id: uniqueId(),
            name: "Side Forgot Pwd",
            url: "https://www.appro8.com/auth/auth1/forgot-password",
            external: true,
            isPro: true
          }
        ],
      },
      {
        name: "Two Steps",
        id: uniqueId(),
        icon: ShieldCheck,
        items: [
          {
            id: uniqueId(),
            name: "Side Two Steps",
            url: "https://www.appro8.com/auth/auth1/two-steps",
            external: true,
            isPro: true
          }
        ],
      },
      {
        id: uniqueId(),
        name: "Maintenance",
        icon: Settings,
        url: "https://www.appro8.com/auth/maintenance",
        external: true,
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Menu Level",
        icon: BarChart3,
        items: [
          {
            id: uniqueId(),
            name: "Level 1",

            items: [
              {
                id: uniqueId(),
                name: "Level 1.1",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default SidebarContent;
