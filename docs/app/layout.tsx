import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/app/source';

export const metadata = {
  title: {
    template: '%s | Retrace Docs',
    default: 'Retrace Docs',
  },
  description: 'Learn how to set up Retrace, import your data, and explore features.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            nav={{
              title: 'Retrace Docs',
              url: '/',
            }}
            links={[
              { text: 'Website', url: 'https://retrace.now' },
              { text: 'GitHub', url: 'https://github.com/aballiet/retrace', external: true },
            ]}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
