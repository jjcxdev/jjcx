import type { MDXComponents } from 'mdx/types';
import {
  Heading,
  Subheading,
  Code,
  Strong,
  Pre,
  P,
  Sectionheading,
} from '@/components/heading';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    h2: Subheading,
    code: Code,
    pre: Pre,
    strong: Strong,
    p: P,
    h3: Sectionheading,
    ...components,
  };
}
