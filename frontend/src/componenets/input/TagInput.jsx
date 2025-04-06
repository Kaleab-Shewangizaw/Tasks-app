import React from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addNewTag = () => {
    if (inputValue.trim() === "") {
      setError("Tag cannot be empty");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    if (tags.length >= 5) {
      setError("You can only add up to 5 tags");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    if (tags.includes(inputValue.trim()) || tags.includes(inputValue.trim().split(" ").join("_"))) {
      setError("Tag already exists");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    setError(null);

    if (inputValue.trim() !== "") {
      let newTag = inputValue.trim();
      newTag = newTag.split(" ").join("_")
      setTags([...tags, newTag]);

      setInputValue("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };
  return (
    <div>
      {tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-slate-200 text-slate-800 px-2 py-1 rounded-full text-sm flex items-center gap-2"
            >
              <span>#{tag}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  setTags(tags.filter((t) => t !== tag));
                }}
              >
                <MdClose className="" />
              </button>
            </div>
          ))}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add Tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          value={inputValue}
        />
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-primary hover:bg-primary add-btn"
          onClick={addNewTag}
        >
          <MdAdd className="text-2xl text-primary add-icon" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
