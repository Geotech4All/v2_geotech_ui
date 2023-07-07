import styles from "./tiptapStyles.module.scss";

interface TiptapPostArticleProps {
  html: string;
  className?: string;
}

export default function HTMLRederrer(props: TiptapPostArticleProps) {
  const { html, className } = props;
  return (
    <section
      className={`${styles.tiptap} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
