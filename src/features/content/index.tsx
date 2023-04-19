import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkGithub from "remark-github";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
import shouce from "../../markDown/shouce.js";

export default function Content() {
  return (
    <ReactMarkdown
      children={shouce}
      remarkPlugins={[
        [
          remarkGfm,
          remarkMdx,
          remarkFrontmatter,
          remarkDirective,
          remarkGithub,
          remarkBreaks,
        ],
      ]}
    />
  );
}
