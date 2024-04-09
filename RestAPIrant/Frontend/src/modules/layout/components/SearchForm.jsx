import { useState } from "react";
import { LiaUtensilSpoonSolid } from "react-icons/lia";

export const SearchForm = ({placeholder, size='1rem', onSearch}) => {

  const [keyword, setKeyword] = useState('');

  const searchByKeyword = () => {
    onSearch(keyword)
  }

  const onChangeKeyword = ({target: {value}}) => setKeyword(value)
 
  const onEnterPress = ({key}) => {
    if(key == 'Enter') searchByKeyword()
  }

  return (
    <div className="flex rounded-xl bg-[#F1C7EA] bg-opacity-50  w-full max-h-14">
      <button onClick={searchByKeyword} className="bg-[#E8B3FF] hover:bg-[#E19DFF] bg-opacity-75 rounded-xl grid place-items-center w-14">
        <LiaUtensilSpoonSolid className="text-white opacity-45 text-3xl font-black"></LiaUtensilSpoonSolid>
      </button>
      <input style={{fontSize:size}} onChange={onChangeKeyword} onKeyDown={onEnterPress} placeholder={placeholder} type="text" className="bg-transparent px-4 py-2 outline-none w-full text-black text-opacity-40 placeholder-black placeholder-opacity-25" />
    </div>
  )
}
