import Link from "next/link";
import DateFormatter from "@/components/DateFormatter";
import TagList from "@/components/TagList";
import { getAllQuestions } from "@/lib/markdown";

export default function Home() {
  const allQuestions = getAllQuestions();

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {allQuestions.map(({ id, date, title, tags }) => (
          <Link key={id} href={`/questions/${id}`}>
            <div className="block p-6 bg-white shadow rounded-lg hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h2>
              <div className="flex justify-between items-center">
                {date && <DateFormatter dateString={date} />}
                <TagList tags={tags} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 使用静态生成，这是必需的，因为我们使用静态数据
export const dynamic = "force-static";
