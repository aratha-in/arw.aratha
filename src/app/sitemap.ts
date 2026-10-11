import { MetadataRoute } from 'next';
import { servicesData, articlesData } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aratharesearch.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/methodology',
    '/case-studies',
    '/insights',
    '/faq',
    '/proposal',
    '/consultation',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: '2026-10-11',
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/proposal') || route.startsWith('/services') ? 0.9 : 0.8,
  }));

  const serviceRoutes = servicesData.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: '2026-10-11',
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const articleRoutes = articlesData.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: '2026-10-11',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
