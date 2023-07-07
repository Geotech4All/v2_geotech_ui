import type { TagNodeDataType } from "./types";

interface TagsListProps {
  tags: TagNodeDataType[];
  handleRemove: (tag: TagNodeDataType) => void;
}

export default function TagList(props: TagsListProps) {
  const { tags, handleRemove } = props;
  return (
    <div className="flex flex-col gap-1">
      <ul className="p-2 flex gap-2 rounded-md">
        {tags.length > 0 ? (
          tags.map((tag) => <TagButton handleRemove={handleRemove} key={tag?.tagId} tag={tag} />)
        ) : (
          <span className="text-black/30 cursor-default text-sm italic">No tags</span>
        )}
      </ul>
    </div>
  );
}

interface TagButtonProps {
  tag: TagNodeDataType;
  handleRemove: (tag: TagNodeDataType) => void;
}

function TagButton(props: TagButtonProps) {
  const { tag, handleRemove } = props;

  const handleRemoveTag = () => {
    handleRemove(tag);
  };

  return (
    <div className="p-1 flex items-center w-fit gap-3 pl-2 rounded bg-black text-white font-nunito font-medium">
      <span className="">
        {tag?.title}
      </span>
      <button
        onClick={handleRemoveTag}
        className="bg-white/20 rounded aspect-square w-6 hover:bg-white/60 transition"
        type="button"
      >
        x
      </button>
    </div>
  );
}
