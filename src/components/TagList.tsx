interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
