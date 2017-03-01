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

    setActiveUser(user) {
        localStorage.setItem('ActiveUser', JSON.stringify(user));
    }

    checkActiveUser() {
        return JSON.parse(localStorage.getItem('ActiveUser'));
    }

    clearStorage() {
        localStorage.setItem('ActiveUser', JSON.stringify({login: ""}));
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


    
    displayEditButtons(currentArticle){
        if(this.checkActiveUser().login==""){
            return false;
        } else if(this.checkActiveUser().login==currentArticle.authorLogin){
            return true;
        } else return false;
    }
}