export default function About({customSelectPage}) {
    return (
        <>
            <a href="/" onClick={(e) => customSelectPage(e, '/')}>Back</a>
            <h1>About us</h1>
            <p>Here we do stuff...</p>
        </>
    );
}