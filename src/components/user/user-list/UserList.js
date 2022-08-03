import UserItem from './user-item/UserItem';
import styles from './UserList.module.css';

const UserList = (props) => {
    return (
        <div className={styles.container}>
            {props.users.map(user => (<UserItem user = {user}></UserItem>))}
        </div>
    );
}
export default UserList;