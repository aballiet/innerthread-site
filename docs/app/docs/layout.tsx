import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'Retrace Docs',
        url: '/docs',
      }}
      links={[
        { text: 'Website', url: 'https://retrace.now' },
        { text: 'GitHub', url: 'https://github.com/aballiet/retrace', external: true },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
