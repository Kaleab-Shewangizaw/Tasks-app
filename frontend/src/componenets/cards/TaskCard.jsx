import React from "react";
import {MdCreate, MdDelete, MdOutlinePushPin} from 'react-icons/md'

const TaskCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  OnPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-lg transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div className="">
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="tet-xs text-slate-500">{date}</span>
        </div>

        <MdOutlinePushPin className={`icon-btn ${isPinned?"text-primary": "text-slate-300"}`} onClick={OnPinNote} />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags}</div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
            />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
