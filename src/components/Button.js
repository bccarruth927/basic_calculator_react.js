//Import CSS styling from Button.module.css
import styles from './Button.module.css';

//getStyleName function declaration
const getStyleName = (btn) => {
    const className = {
        '=': styles.equals,
        'x': styles.operation,
        '-': styles.operation,
        '+': styles.operation,
        '/': styles.operation
    };

    return className[btn];
};

//Main Button Component
function Button({value}) {
    return (
        <button className={`${styles.button} ${getStyleName(value)}`}>{value}</button>
    );
};

export default Button;