// 面试题元数据类型
export interface QuestionMeta {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

// 包含内容的面试题完整类型
export interface QuestionData extends QuestionMeta {
  contentHtml: string;
}
