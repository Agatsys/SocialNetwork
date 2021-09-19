import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"


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
                { id: 5, message: ':)' }
            ],
            dialogsData: [
                { id: 1, name: 'Сергій' },
                { id: 2, name: 'Василь' },
                { id: 3, name: 'Макс' },
                { id: 4, name: 'Якийсь чел' },
                { id: 5, name: 'Саньок' }
            ],
            newMessageBody: ''
        },
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('State changed');
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this.rerenderEntireTree(this._state);
    }
}


export default store;
//window.store = store;