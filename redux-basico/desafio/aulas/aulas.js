
const COMPLETAR_AULA = 'ALUNO/COMPLETAR_AULA'
const COMPLETAR_CURSO = 'ALUNO/COMPLETAR_CURSO'
const RESETAR_CURSO = 'ALUNO/RESETAR_CURSO'

export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id })
export const completarCurso = () => ({ type: COMPLETAR_CURSO })
export const resetarCurso = () => ({ type: RESETAR_CURSO })

const initalState = [
    {
      id: 1,
      nome: 'Design',
      completa: true,
    },
    {
      id: 2,
      nome: 'HTML',
      completa: false,
    },
    {
      id: 3,
      nome: 'CSS',
      completa: false,
    },
    {
      id: 4,
      nome: 'JavaScript',
      completa: false,
    },
];

const reducerAulas = (state = initalState, action) => {
    console.log(action.payload)
    switch(action.type){
        case COMPLETAR_AULA:
            return state.map((item) => {
                if(item.id === action.payload) {
                    return { ...item, completa: true}
                }
                return {...item}
            })
        case COMPLETAR_CURSO:
            return state.map((item) => {
                return { ...item, completa: true}
            })
        case RESETAR_CURSO: 
            return state.map((item) => {
                return { ...item, completa: false}
            })
        default:
            return state;
    }
}

export default reducerAulas;