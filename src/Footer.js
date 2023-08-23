function Footer() {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center fixed inset-x-0 bottom-0">
            &copy; {new Date().getFullYear()} Chris Chan
        </footer>
    );
}

export default Footer;