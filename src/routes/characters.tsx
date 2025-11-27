import ViewCharacters from '@pages/view-characters';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/characters')({
  component: () => <ViewCharacters />,
});
