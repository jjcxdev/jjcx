import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.jjcx.dev';

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/articles/binary-passfail-scoring`,
      lastModified: new Date('2026-04-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/articles/instruction-debt`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/work/building-the-plane-while-flying-it`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/work/the-productivity-problem-that-wasnt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/work/when-the-feedback-loop-is-missing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
