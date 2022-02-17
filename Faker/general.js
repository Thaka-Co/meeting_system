// Assets
import avatar1 from "../assets/img/avatars/avatar1.png";
import avatar2 from "../assets/img/avatars/avatar2.png";
import avatar3 from "../assets/img/avatars/avatar3.png";
import avatar4 from "../assets/img/avatars/avatar4.png";
import avatar5 from "../assets/img/avatars/avatar5.png";
import avatar7 from "../assets/img/avatars/avatar7.png";
import avatar8 from "../assets/img/avatars/avatar8.png";
import avatar9 from "../assets/img/avatars/avatar9.png";
import avatar10 from "../assets/img/avatars/avatar10.png";
// Custom icons
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
export const dashboardTableData = [
  {
    logo: "AdobexdLogo",
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "60 min",
    progression: "21 DEC 11:21 PM",
  },
  {
    logo: "AtlassianLogo",
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "120 min",
    progression: "21 DEC 11:21 PM",
  },
  {
    logo: "SlackLogo",
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: "21 DEC 11:21 PM",
  },
  {
    logo: "SpotifyLogo",
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "30 min",
    progression: "21 DEC 11:21 PM",
  },
  {
    logo: "JiraLogo",
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "50 min",
    progression: "21 DEC 11:21 PM",
  },
  {
    logo: "InvisionLogo",
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "60 min",
    progression: "21 DEC 11:21 PM",
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: "AdobexdLogo",
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: "AdobexdLogo",
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: "AtlassianLogo",
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: "SlackLogo",
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: "SpotifyLogo",
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: "JiraLogo",
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: "InvisionLogo",
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: "AdobexdLogo",
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: "AdobexdLogo",
    name: "Purity UI Version",
    budget: "60 min",
    status: "Working",
    progression: 60,
  },
  {
    logo: "AtlassianLogo",
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: "SlackLogo",
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: "SpotifyLogo",
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: "JiraLogo",
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "Add Progress Track",
    votes: [
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
         and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
    ],
    downArrow: VscTriangleDown,
    upArrow: VscTriangleUp,
    up: 10,
    down: 9,
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "Add the New Pricing Page",
    votes: [
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
         and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
    ],
    downArrow: VscTriangleDown,
    upArrow: VscTriangleUp,
    up: 10,
    down: 9,
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "Fix Platform Errors",
    votes: [
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
         and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
    ],
    downArrow: VscTriangleDown,
    upArrow: VscTriangleUp,
    up: 10,
    down: 9,
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "Add Progress Track",
    votes: [
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
         and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
    ],
    downArrow: VscTriangleDown,
    upArrow: VscTriangleUp,
    up: 10,
    down: 9,
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "Add the New Pricing Page",
    votes: [
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
         and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
      {
        title: "vote title",
        desc: ` Lorem ipsum is placeholder text commonly used in the graphic, print,
       and publishing industries for previewing layouts and visual mockups.`,
      },
    ],
    downArrow: VscTriangleDown,
    upArrow: VscTriangleUp,
    up: 10,
    down: 9,
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Board Meeting",
    company: "120 min",
    email: "1 PM",
    number: "AL- ZAKRI REAL ESTATE CO",
  },
  {
    name: "Board Meeting",
    company: "120 min",
    email: "1 PM",
    number: "AL- ZAKRI REAL ESTATE CO",
  },
  {
    name: "Board Meeting",
    company: "120 min",
    email: "1 PM",
    number: "AL- ZAKRI REAL ESTATE CO",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
export const roomsData = [
  { id: 1, location: "first floor", size: 6, tools: ["board", "screen"] },
  { id: 2, location: "second floor", size: 8, tools: ["board", "screen"] },
  { id: 3, location: "third floor", size: 10, tools: ["board", "screen"] },
];
export const usersData = [
  { id: 1, name: "Mareem", position: "IT manager", email: "m@m.com" },
  { id: 2, name: "Safiah", position: "IT manager", email: "s@s.com" },
  { id: 3, name: "Najla", position: "IT manager", email: "s@s.com" },
];
