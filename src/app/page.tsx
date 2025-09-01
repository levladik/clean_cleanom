/**
 * Home Page
 *
 * The main landing page
 */

import Wrapper from './components/layout/Wrapper'

export default function Home() {
  return (
    <Wrapper className="flex justify-center">
      <div className="mockup-code w-90 mt-5">
        <div className="flex flex-col p-5 pt-0 text-2xl">
          <code>NextJS</code>
          <code>TS</code>
          <code>Tailwind</code>
          <code>DaisyUI</code>
        </div>
      </div>
    </Wrapper>
  )
}
