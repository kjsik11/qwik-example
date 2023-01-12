import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>404 Page</div>;
});

export const head: DocumentHead = {
  title: '404 | Not Found',
};
