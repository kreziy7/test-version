export const initialFormState = {
    fields: {
      name: '',
      phone: '',
      event: '',
      date: '',
      note: '',
      service: '',
      consultation: '',
    },
    file: null,
    submitting: false,
    submitted: false,
    error: null,
  };
  
  export function formReducer(state, action) {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          fields: { ...state.fields, [action.field]: action.value },
        };
      case 'SET_FILE':
        return { ...state, file: action.file };
      case 'SUBMIT_START':
        return { ...state, submitting: true, error: null };
      case 'SUBMIT_SUCCESS':
        return {
          ...state,
          submitting: false,
          submitted: true,
          fields: initialFormState.fields,
          file: null,
        };
      case 'SUBMIT_ERROR':
        return { ...state, submitting: false, error: action.error };
      case 'RESET_FORM':
        return initialFormState;
      default:
        return state;
    }
  }