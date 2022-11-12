import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

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
