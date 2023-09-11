export default function Contact({ customSelectPage }) {
    return (
        <>
            <a href="/" onClick={(e) => customSelectPage(e, '/')}>Back</a>
            <h1>You can contact us...</h1>
            <p>awesome@mail.com</p>
        </>
    );
}