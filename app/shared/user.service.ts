import  {users} from './data';
import  {User} from './user';


export class UserService {
    users = users;

    getUsers() {
        return this.users;
    }

    addUser(user) {
        let newUser:User = new User(user.login, user.password, user.email,
            user.userName, user.birthday, user.phoneNumber);
        users.push(newUser);
        this.setActiveUser(newUser);
        alert("Вы зарегистрировались!");
    }

    setActiveUser(user: User) {
        localStorage.setItem('ActiveUser', JSON.stringify(user));
        alert("Look to Storage");
    }

    checkActiveUser() {
        return JSON.parse(localStorage.getItem('ActiveUser'));
    }

    checkIfUserExist(userModel) {
        let result;
        for (let i = 0; i < users.length; i++) {
            if (userModel.login == users[i].login && userModel.password == users[i].password) {
                result = {
                    userInfo: users[i],
                    userExist: true
                };
                break;
            } else {
                result = {userExist: false};
            }
        }
        return result;

    }

    clearStorage() {
        localStorage.setItem('ActiveUser', JSON.stringify({login: ""}));
    }
}