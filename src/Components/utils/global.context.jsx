import { createContext, useContext, useEffect, useReducer} from "react";
const GlobalContext = createContext()

const favorites = localStorage.getItem('favorites')
const thema = localStorage.getItem('thema')

const initialState = {
  data: [],
  favorites: JSON.parse(favorites) || [],
  thema: thema || "light"
}

const reducer = (state, action) => {
  switch (action.type){
      case 'data':
        return  {...state, data: action.payload}
      case 'addFavs':
        return {...state, favorites: [...state.favorites, action.payload]}
      case 'deteleFavs':
        return {...state, favorites: [...state.favorites.filter((favorite) => favorite !== action.payload),]}
      case 'light':
        return {...state, thema: action.payload}
      case 'dark':
        return  {...state, thema: action.payload}
      default:
          throw new Error('Unrecognized action.')
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'

  const getDentists = async() =>{
    try {
      let res = await fetch(url)
      if(res.ok){
        let data = await res.json()
        dispatch({type: 'data', payload: data})
      }else{
        console.log(res);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
      getDentists()
  },[])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  useEffect(() => {
    localStorage.setItem('thema', state.thema);
  }, [state.thema]);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider

export const useGlobalContext = () => useContext(GlobalContext)
