import { render, screen } from '@redwoodjs/testing'

import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'Obiwan Kanobi',
      body: 'Removing the straw that broke the camels back does not necessarily allow the camel to walk again.',
      createdAt: '2022-02-02T22:22:22Z',
    }
    render(<Comment comment={comment} />)

    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('2 January 2020')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', comment.createdAt)
  })
})
