export default function Form({handleInput, input, submit}){
    return(
        <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add title"
            aria-label="Full name"
            value={input.title}
            name="title"
            onChange={handleInput}
          />
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add body"
            aria-label="Full name"
            name="body"
            value={input.body}
            onChange={handleInput}
          />
          <button
            onClick={submit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
            onClick={submit}
          ></button>
        </div>
      </form>
    )
}