import { type ComponentPropsWithoutRef } from 'react';
import './styles.css';

export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className='heading' {...props} />;
}

export function Subheading(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className='subheading' {...props} />;
}

export function Code(props: ComponentPropsWithoutRef<'code'>) {
  return <code className='code' {...props} />;
}

export function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return <pre className='pre' {...props} />;
}

export function Strong(props: ComponentPropsWithoutRef<'strong'>) {
  return <strong className='strong' {...props} />;
}

export function P(props: ComponentPropsWithoutRef<'p'>) {
  return <p className='p' {...props} />;
}

export function Sectionheading(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className='sectionheading' {...props} />;
}
