import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const { register, handleSubmit } = useForm();
    const newNavigate = useNavigate()
    let allUsers = [];
    const open = async () => {
        let usersUrl = await fetch("http://localhost:5000/users");
        let userUrl = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await usersUrl.json();
        allUsers = userData;
        console.log(allUsers);
    }
    const checkUser = async (data) => {
        let isRegistered = false;
        let currentUser = null;
        console.log(data);
        await open();
        allUsers.map((element, index) => {
            if (data.username === element.username && data.website === element.website) {
                console.log(data.username === element.username && data.website === element.website);
                isRegistered = true
                return isRegistered;
            }
            currentUser = element.id;
            console.log(element.username + "   " + element.website);

        })
        if (isRegistered) {
            newNavigate('/home');
        }
        else {
            alert("you are not register")
            newNavigate('/Register');
        }
    }
    return (
        <div>
               <form onSubmit={handleSubmit(checkUser)}>
            <label htmlFor="username"></label>
            <input type="text" name="username"
                {...register('username', { required: true })}
            />
            <label htmlFor="password"></label>
            <input type="text" name="password"
                {...register('password', { required: true })}
            />
            <button>Login</button>
        </form>     
        </div>
    )
}
