let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "It's my first post", likesCount: 10 },
                { id: 2, message: "Мушу написати щось важливе", likesCount: 12 },
                { id: 3, message: "Жартую. Не мушу", likesCount: 25 },
                { id: 4, message: "Bla bla bla", likesCount: 4 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                { id: 1, message: 'Привіт народ!' },
                { id: 2, message: 'Як життя?' },
                { id: 3, message: '...' },
                { id: 4, message: 'Походу я говорю сам з собою...' },
                { id: 5, message: 'Люблю поговорити з розумними людьми :)' }
            ],
            dialogsData: [
                { id: 1, name: 'Сергій' },
                { id: 2, name: 'Василь' },
                { id: 3, name: 'Макс' },
                { id: 4, name: 'Якийсь чел' },
                { id: 5, name: 'Саньок' }
            ]
        },
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this.state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
}

export default store;
window.store = store;