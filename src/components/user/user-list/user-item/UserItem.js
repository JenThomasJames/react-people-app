import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles['card-header']}>
                    <img src={props.user.imageUrl} />
                </div>
                <div className={styles['card-body']}>
                    <h1>{props.user.name}</h1>
                    <h4>{props.user.work}</h4>
                </div>
                <div className={styles['card-footer']}>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    );
}
export default UserItem;