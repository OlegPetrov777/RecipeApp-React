import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:8090/api',
})

export const usersAPI = {
    // Page Users
    getUsers() {
        return instance.get('/users')
            .then(response => {
                return response.data;
            })
    },

    getUserById(userId) {
        return instance.get(`/users/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    // Register
    setUser(nickname, email, password) {
        return instance.post('/users', {
            nickname: nickname,
            email: email,
            password: password
        })
    },

    getUserByNickname(nickname) {
        return instance.get(`/users/userName-${nickname}`)
            .then(response => {
                return response.data;
            })
    }
}

export const recipesAPI = {
    getRecipes() {
        return instance.get('/recipes')
            .then(response => {
                return response.data;
            })
    },

    getRecipeById(recipeId) {
        return instance.get(`/recipes/${recipeId}`)
            .then(response => {
                return response.data;
            })
    },

    getRecipesByUserId(userId) {
        return instance.get(`/recipes/userId-${userId}`)
            .then(response => {
                return response.data;
            })
    },

    setRecipe(name, url, description, manual, uid) {
        return instance.post('/recipes', {
            name: name,
            url: url,
            description: description,
            manual: manual,
            uid: uid
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

