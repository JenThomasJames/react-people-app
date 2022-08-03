import { useState } from "react";
import styles from './NewUser.module.css';
const NewUser = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [work, setWork] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    }

    const workChangeHandler = (event) => {
        setWork(event.target.value);
    }

    const imageUrlChangeHandler = (event) => {
        setImageUrl(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        let user = {
            id: Math.floor(Math.random() * (1000 - 1) + 1),
            name: name,
            age: age,
            city: city,
            work: work,
            imageUrl: imageUrl
        };
        props.onNewUser(user);
    }

    return (
        <div className={styles.container}>
            <form>
                <div className={styles['form-control']}>
                    <input value={name} onChange={nameChangeHandler} type="text" placeholder="Name" />
                    <input value={age} onChange={ageChangeHandler} type="number" placeholder="Age" min="1" step="1" />
                </div>
                <div className={styles['form-control']}>
                    <input value={city} onChange={cityChangeHandler} type="text" placeholder="City" />
                    <input value={work} onChange={workChangeHandler} type="text" placeholder="Work" />
                </div>
                <div className={styles['form-control']}>
                    <input value={imageUrl} onChange={imageUrlChangeHandler} type="text" placeholder="Image URL" />
                </div>
                <input type="submit" value="Add" onClick={addUserHandler} />
            </form>
        </div>
    );
}
export default NewUser;