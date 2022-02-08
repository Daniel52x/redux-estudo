const INCREMENTAR_TEMPO = 'ALUNO/INCREMENTAR_TEMPO'
const REDUZIR_TEMPO = 'ALUNO/REDUZIR_TEMPO'
const MODIFICAR_EMAIL = 'ALUNO/MODIFICAR_EMAIL'

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO })
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO })
export const modificarEmail = (email) => ({ type: MODIFICAR_EMAIL, payload: email })

const initialState = {
    nome: 'André Rafael',
    email: 'andre@origamid.com',
    diasRestantes: 120,
};

const reducerAluno = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENTAR_TEMPO:
            return { ...state, diasRestantes: state.diasRestantes + 1 }
        case REDUZIR_TEMPO:
            return { ...state, diasRestantes: state.diasRestantes - 1 }
        case MODIFICAR_EMAIL:
            return { ...state, email: action.payload }
        default:
            return state;
    }
}

export default reducerAluno