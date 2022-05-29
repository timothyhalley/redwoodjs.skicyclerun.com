import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Obiwan Kanobi',
        body: 'Removing the straw that broke the camels back does not necessarily allow the camel to walk again.',
        createdAt: '2022-02-02T22:22:22Z',
      }}
    />
  )
}

export default { title: 'Components/Comment' }
