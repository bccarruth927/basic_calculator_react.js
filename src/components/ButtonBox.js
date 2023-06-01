//Import CSS styling from ButtonBox.module.css
import styles from './ButtonBox.module.css';

//Main ButtonBox Component
function ButtonBox({children}) {
    return (
        <div className={styles.buttonBox}>{children}</div>
    );
}

export default ButtonBox;