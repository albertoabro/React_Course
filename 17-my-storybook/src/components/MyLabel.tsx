
import '../styles/MyLabel.css';

interface Props {
    /**
     * Text to display
     */
    label:string;

    /**
     * Size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Display the label in all caps
     */
    allCaps?: boolean;

    /**
     * Color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary' | 'none';

    /**
     * Color of the font
     */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor
}: Props) => {
    return (
        <span 
            className={`${size} text-${color}`}
            
            style={ color === 'none' 
                        ? { color: fontColor } 
                        : undefined 
                  }
        >
            {
                (allCaps) ? label.toUpperCase() : label
            }
        </span>
    )
}
