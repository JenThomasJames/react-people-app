import NewUser from './new-user/NewUser';
import UserList from './user-list/UserList';
import styles from './User.module.css';
const User = (props) => {

    const onNewUser = (user) => {
        props.addNewUser(user);
    }

    return(
        <div className={styles.container}>
            <NewUser onNewUser={onNewUser}></NewUser>
            <UserList users={props.users}></UserList>
        </div>
    );
}
export default User;