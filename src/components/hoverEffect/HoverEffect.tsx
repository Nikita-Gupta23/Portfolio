
import './HoverEffect.css';

type Props = {
    text: string;
};

const BouncyText = ({ text }: Props) => {
    return (
        <div>
            {text.split('').map((char, index) => (
                <span key={index} className="letter">
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};

export default BouncyText;
