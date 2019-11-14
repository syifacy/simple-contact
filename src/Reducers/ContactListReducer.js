const INITIAL_STATE = {
    isLoading: false,
    listContact: [],
    errorMsg: '',
    dataDetail: {},
    updateSuccess: undefined,
    updateFail: undefined,
    deleteSuccess: undefined,
    createSuccess: undefined
}

const dataReducer = (currentState = INITIAL_STATE, action) =>{
    const {payload} = action;

    switch (action.type){
        case 'GET_CONTACT_REQUEST':
            return{
            ...currentState,
            isLoading: true,
            }
        case 'GET_CONTACT_SUCCESS':
            return{
                ...currentState,
                isLoading: false,
                listContact: payload.data
            }
        case 'GET_CONTACT_FAILURE':
            return{
                ...currentState,
                isLoading: false,
                errorMsg: payload.message
            }
        case 'GET_DETAIL_CONTACT_REQUEST':
            return{
                ...currentState,
                isLoading:true,
            }
        case 'GET_DETAIL_CONTACT_SUCCESS':
            return{
                ...currentState,
                isLoading: false,
                dataDetail: payload.data
            }
        case 'GET_DETAIL_CONTACT_FAILURE':
            return{
                ...currentState,
                isLoading: false,
                errorMsg: payload.message
            }
        case 'UPDATE_CONTACT_REQUEST':
            return{
                ...currentState,
                isLoading: true
            }
        case 'UPDATE_CONTACT_SUCCESS':
            return{
                ...currentState,
                isLoading: false,
                updateSuccess: true,
            }
        case 'UPDATE_CONTACT_FAILURE':
            return{
                ...currentState,
                isLoading: false,
                updateSuccess: false,
                updateFail: true,
            }
        case 'RESET':
            return{
                ...currentState,
                updateSuccess: undefined,
                updateFail: undefined,
                deleteSuccess: undefined,
                createSuccess: undefined,
            }
        case 'DELETE_CONTACT_REQUEST':
            return{
                ...currentState,
                isLoading: true
            }
        case 'DELETE_CONTACT_SUCCESS':
            return{
                ...currentState,
                isLoading: false,
                deleteSuccess: true
            }
        case 'DELETE_CONTACT_FAILURE':
            return{
                ...currentState,
                isLoading:false,
                deleteSuccess: false,
            }
        case 'ADD_CONTACT_REQUEST':
            return{
                ...currentState,
                isLoading: true,
            }
        case 'ADD_CONTACT_SUCCESS':
            return{
                ...currentState,
                isLoading: false,
                createSuccess: true,
            }
        case 'ADD_CONTACT_FAILURE':
            return{
                ...currentState,
                isLoading: false,
                createSuccess: false,
            }
        default:
        return currentState;
    }
  }
  
  export default dataReducer;
  