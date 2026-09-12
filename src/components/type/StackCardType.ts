export interface IDevStackType {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}
export const badgeColors: Record<string, string> = {
  javascript: "bg-yellow-50 text-yellow-600",
  typescript: "bg-blue-50 text-blue-600",
  react: "bg-cyan-50 text-cyan-700",
  vue: "bg-emerald-50 text-emerald-600",
  angular: "bg-red-50 text-red-600",
  nextjs: "bg-gray-100 text-gray-900",
  nodejs: "bg-green-50 text-green-600",
  express: "bg-gray-100 text-gray-700",
  mongodb: "bg-green-50 text-green-700",
  postgresql: "bg-blue-50 text-blue-700",
  mysql: "bg-orange-50 text-orange-600",
  redis: "bg-red-50 text-red-600",
  tailwindcss: "bg-cyan-50 text-cyan-600",
  git: "bg-orange-50 text-orange-600",
  github: "bg-gray-100 text-gray-900",
  docker: "bg-blue-50 text-blue-600",
  html: "bg-orange-50 text-orange-600",
  css: "bg-blue-50 text-blue-600",
  python: "bg-blue-50 text-blue-600",
};
