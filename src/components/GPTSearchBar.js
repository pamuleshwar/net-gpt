import React, { useRef } from 'react'
import openai from '../utils/openAI';

const GPTSearchBar = () => {
    const searchText = useRef(null);

    const handleGPTSearchClick =async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + " . only give me names of 10 movies comma seperated like the example result given ahead. Example Result : Gadar, Sholey, Dhadkan, Golmal, Gadar, Koi Mil Gaya, Animal, KGF, Saaho, Pathaan";

        //Make an API call to GPT API and get movie Suggestions
        const gptSuggestions = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptSuggestions.choices) {
            //Write error page
        }

        // console.log(gptSuggestions.choices?.[0]?.message?.content);

        //convert the string result into array
        
        
    };

  return (
    <div className='mx-auto pt-[10%] w-1/2'>
        <form className='p-5 grid grid-cols-12 bg-black bg-opacity-70' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='col-span-9 m-3 px-4 py-3 rounded-lg outline-none' placeholder='What would you like to watch today?' />
            <button className='col-span-3 bg-red-500 m-3 px-4 py-3 text-white text-xl font-bold rounded-lg' onClick={handleGPTSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar