export const getListContact = () => ({
    type: 'GET_CONTACT_REQUEST'
});

export const getDetailContact = (id) =>({
    type: 'GET_DETAIL_CONTACT_REQUEST',
    id
});

export const updateContact = (id,body) => ({
    type: 'UPDATE_CONTACT_REQUEST',
    body,
    id
})
export const deleteContact = (id) =>({
    type: 'DELETE_CONTACT_REQUEST',
    id
})
export const addContact = (body) => ({
    type: 'ADD_CONTACT_REQUEST',
    body
})
export const reset = () =>({
    type:'RESET'
})

export const resetMessage = () =>({
    type:'RESET_MESSAGE'
})