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

export const defaultView = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: 'moderator',
  })

  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
