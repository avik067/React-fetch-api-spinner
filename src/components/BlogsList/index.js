import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

const blogsData = [
  {
    id: 1,
    title: 'Blog 1',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
  {
    id: 2,
    title: 'Blog 2',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
]

class BlogsList extends Component {
  constructor() {
    super()
    this.state = {blogData: []}
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()

      const updatedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }))
      this.setState({blogData: updatedData})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const {blogData} = this.state
    return (
      <div className="blog-list-container">
        {blogData.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default BlogsList
