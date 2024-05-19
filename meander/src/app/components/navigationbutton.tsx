import Link from 'next/link';

interface NavigationButtonProps {
    text: string;
    href: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, href }) => {
    return (
        <Link href={href}>
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center text-center">
                <span className="flex justify-center items-center">{text}</span>
            </p>
        </Link>
    );
};

export default NavigationButton;