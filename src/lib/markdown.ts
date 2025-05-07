import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import rehypeHighlight from "rehype-highlight";
import { QuestionMeta, QuestionData } from "../types";

const contentDirectory = path.join(process.cwd(), "content");

// 获取所有面试题的元数据
export function getAllQuestions(): QuestionMeta[] {
  const questionsDirectory = path.join(contentDirectory, "questions");
  const fileNames = fs.readdirSync(questionsDirectory);

  const allQuestionsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(questionsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as Omit<QuestionMeta, "id">),
    };
  });

  return allQuestionsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取所有问题的ID
export function getAllQuestionIds(): { id: string }[] {
  const questionsDirectory = path.join(contentDirectory, "questions");
  const fileNames = fs.readdirSync(questionsDirectory);

  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ""),
    };
  });
}

// 根据ID获取单个问题的内容
export async function getQuestionData(id: string): Promise<QuestionData> {
  const questionsDirectory = path.join(contentDirectory, "questions");
  const fullPath = path.join(questionsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(rehypeHighlight)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<QuestionMeta, "id">),
  };
}
