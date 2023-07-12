import TiptapFontFamily from "@tiptap/extension-font-family";
import TiptapHeading from "@tiptap/extension-heading";
import TiptapLink from "@tiptap/extension-link";

export const Heading = TiptapHeading.configure({
  levels: [1, 2, 3, 4],
  HTMLAttributes: {
    class: "editor-heading",
  },
});

export const FontFamily = TiptapFontFamily.configure({
  types: ["textStyle"],
});

export const Link = TiptapLink.configure({
  protocols: ["mailto"],
  HTMLAttributes: {
    class: "editor-link"
  }
});
