import Post from './Post';
// adding map method
const Feed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed