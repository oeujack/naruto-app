import { Layout } from '@components/layout';
import PageNotFound from '@components/not-found';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => <Layout />,
  notFoundComponent: () => <PageNotFound />,
  errorComponent: () => <PageNotFound />,
});
