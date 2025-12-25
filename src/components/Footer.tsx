export default function Footer() {
    return (
        <footer className="w-full flex flex-col lg:flex-row items-center justify-between fpx py-8 max-container gold-gradient text-primary text-xs md:text-base gap-3 overflow-hidden">
            <p className="text-xs md:text-base">The Purpose Project — An Initiative of Cojective</p>
            <nav>
                <ul className="flex items-center gap-2 md:gap-4">
                    <li><a href="">Contact</a></li>
                    <li>|</li>
                    <li><a href="">Terms And Condition</a></li>
                    <li>|</li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </nav>
        </footer>
    );
}
