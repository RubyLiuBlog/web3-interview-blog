import { Metadata } from "next";
import Link from "next/link";
import DateFormatter from "@/components/DateFormatter";
import TagList from "@/components/TagList";
import { getAllQuestionIds, getQuestionData } from "@/lib/markdown";

// 静态路由生成
export async function generateStaticParams() {
  const questionIds = getAllQuestionIds();
  return questionIds.map(({ id }) => ({
    id,
  }));
}

// 动态元数据
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const question = await getQuestionData(id);

  return {
    title: question.title,
    description: `${question.title} - Web3 前端面试题库`,
  };
}

export default async function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const questionData = await getQuestionData(id);

  return (
    <article className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {questionData.title}
      </h1>

      <div className="flex justify-between items-center mb-6 pb-4 border-b">
        {questionData.date && <DateFormatter dateString={questionData.date} />}
        <TagList tags={questionData.tags} />
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: questionData.contentHtml }}
      />

      <div className="mt-8 pt-4 border-t">
        <Link
          href="/"
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          返回首页
        </Link>
      </div>
    </article>
  );
}

// 使用静态生成
export const dynamic = "force-static";
