import Article from './Article'

const ARTICLE = {
  id: 1,
  title:
    'What Is the Relationship Between Quantum Mechanics and Consciousness?',
  body: `The relationship between mind and matter is discussed in many different fields, including psychology, philosophy, behavioral sciences, cognitive sciences, classical physics and quantum physics. It is with this lattermost field that shows promise in addressing some of the mysteries of consciousness, because quantum mechanics deals with the small scale world and so should play some role.`,
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}

export default { title: 'Components/Article' }
