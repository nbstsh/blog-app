const Blog = require('./models/blog');

const data = [
    {
        title: 'sample 1',
        image: 'https://images.unsplash.com/photo-1544160047-525c287eec2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        body: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        title: 'sample 2',
        image: 'https://images.unsplash.com/photo-1544160047-525c287eec2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        body: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        title: 'sample 3',
        image: 'https://images.unsplash.com/photo-1544160047-525c287eec2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        body: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        title: 'sample 4',
        image: 'https://images.unsplash.com/photo-1544160047-525c287eec2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        body: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        title: 'sample 5',
        image: 'https://images.unsplash.com/photo-1544160047-525c287eec2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        body: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample '
    }
]
const seedDB = () => {
    
    Blog.deleteMany({}, (err) => {
        if (err) return console.log(err);

        console.log('>>>>>>>>DELETE EXISTING DATA>>>>>>>>>');
    
        data.forEach((newBlog) => {
            Blog.create(newBlog, (err, blog) => {
                if (err) return console.log(err);
                console.log('successfully created sample blog');
                console.log(blog);
            })
        })
    })

}


module.exports = seedDB;

