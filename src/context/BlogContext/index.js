import React, { createContext, useState } from 'react'
import { blogData } from '../../helpers'

export const BlogContext = createContext()

export const BlogProvider = (props) => {
    const [blogs, setBlogs] = useState(blogData)

    return (
        <BlogContext.Provider value={[blogs, setBlogs]}>
            {props.children}
        </BlogContext.Provider>
    )
}


