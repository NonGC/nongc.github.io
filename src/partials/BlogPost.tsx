import type { ReactNode } from 'react';

import { PostContent } from '@/components/PostContent';
import { PostHeader } from '@/components/PostHeader';
import { Section } from '@/components/Section';
import { AppConfig } from '@/utils/AppConfig';

export interface IFrontmatter {
  author?: string;
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
}

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={props.frontmatter.author || AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
