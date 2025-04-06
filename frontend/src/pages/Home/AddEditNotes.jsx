import React, { useState } from "react";
import TagInput from "../../componenets/input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onclose, type, taskData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const addNewTask = async () => {}

  const editTask = async () => {
    const {title, content, tags} = taskData
    setTitle(title)
    setContent(content)
    setTags(tags)

  }

  const handleAddNote = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      setError("Please add title and content please!")
      setTimeout(() => {
        setError(null);
      }, 3000);
      return
    }
    if (type === "edit"){
      editTask()
    }else{
      addNewTask()
    }
    
  } 

   

  return (
    <div className="relative">
      <button
        className="w-5 h-5 rounded-full flex items-center justify-center absolute -top-4 -right-4 hover:bg-slate-500"
        onClick={onclose}
      >
        <MdClose className="text-slate-950 text-2xl" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none bg-[#f8fafc] py-1 px-1 rounded"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 rounded py-1 px-1"
          placeholder="Enter content here"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}

      <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
