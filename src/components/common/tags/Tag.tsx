"use client";

interface TagProps {
    tag: string;
    removeTag: (tag: string) => void;
}

export default function Tag(props: TagProps) {
    const { tag, removeTag } = props;

    const handleRemoveTag = () => removeTag(tag)
    return (
        <li className="bg-black/80 p-1 px-3 flex items-center gap-4 rounded w-fit whitespace-nowrap text-white">
            {tag}
            <button onClick={handleRemoveTag} type="button">x</button>
        </li>
    )
}
