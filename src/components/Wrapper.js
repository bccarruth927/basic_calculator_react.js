//Import CSS styling from Wrapper.module.css
import styles from './Wrapper.module.css';

//Main Wrapper Component
function Wrapper ({children}) {
    return (
        <div className={styles.wrapper}>{children}</div>
    );
};

export default Wrapper;