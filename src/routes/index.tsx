import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <main>
      <h1>Qwik Snippets</h1>
      <p>
        Check out the <code>snippets.json</code>of this repo or access{' '}
        <a target="_blank" href="https://pastebin.com/r2pX5GCF">
          this link
        </a>{' '}
        and start using Qwik faster than ever before! You just have to add them
        to your VSCode User Snippets (either in global file or in{' '}
        <code>typescriptreact.json</code>).
      </p>
      <p>
        Then you can just write <code>qwik</code> to access all the snippets, or{' '}
        <code>signal</code>, <code>store</code>, <code>visible</code> or{' '}
        <code>task</code> for more accurate results.
      </p>
      <p>
        Do not forget to use <code>Tab</code> to move through the variables that
        need to be set!
      </p>

      <video
        loop
        style={{ border: '2px solid white', opacity: 0.75 }}
        autoPlay
        muted
        playsInline
        height="300"
        src="./video.mov"
      ></video>

      <p>
        Done with 💛 by{' '}
        <a target="_blank" href="https://www.manuelsanchezweb.com">
          manuelsanchezweb
        </a>
      </p>
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Qwik Snippets',
  meta: [
    {
      name: 'description',
      content: 'Qwik Snippets',
    },
  ],
}
