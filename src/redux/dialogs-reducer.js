const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (subaru) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: subaru })

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;