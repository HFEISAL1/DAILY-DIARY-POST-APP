import { Link } from 'react-router-dom';
// imported link
const Missing = () => {

    return (
        <main className='Missing'>
            <h2>Page Not Found</h2>
            <p>Well, that's disappointing.</p>
            {/*navigate paragraph to visit our home page once the user login to the website*/}
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default Missing