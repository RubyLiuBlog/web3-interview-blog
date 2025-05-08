import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3 前端面试题库",
  description: "开源的 Web3 前端开发面试题集合，由社区共同维护",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow">
            <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Web3 前端面试题库
              </h1>
              <p className="mt-1 text-gray-600">
                开源的 Web3 前端开发面试题集合
              </p>
            </div>
          </header>
          <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Web3 前端面试题库 | 由社区共建</p>
              <p className="mt-2">
                <a
                  href="https://github.com/RubyLiuBlog/web3-interview-blog"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub 仓库
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
