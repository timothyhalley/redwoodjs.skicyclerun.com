import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <main>
        <p>
          Astrophysicists modeled the solar system’s behavior in two ways.
          First, they used decades of NASA data to train a neural network. They
          then used a symbolic regression algorithm to further distill that
          model into an equation. In these videos — which show true positions as
          solid objects, and model predictions as wire mesh outlines — the
          neural network (left) does far worse than the symbolic regression
          algorithm (right).
          <video
            src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/05/solar_system_gnets.mp4"
            autoPlay="autoplay"
            muted="true"
            loop="true"
            playsinline="true"
            width="100%"
          ></video>
          REF:
          https://www.quantamagazine.org/machine-scientists-distill-the-laws-of-physics-from-raw-data-20220510/
        </p>
      </main>
    </>
  )
}

export default AboutPage
