import { TagEdgeDataType } from "@/components/tag/types";
import Tag from "./Tag";

interface TagListProps {
    tags: TagEdgeDataType[];
    removeTag: (tag: TagEdgeDataType) => void;
}

export default function TagList(props: TagListProps) {
    const { tags, removeTag } = props;
    return (
      <ul className="flex gap-3 flex-wrap">
          {tags.map(tag => <Tag removeTag={removeTag} key={Math.random()} tag={tag} />)}
      </ul>
    );
}
