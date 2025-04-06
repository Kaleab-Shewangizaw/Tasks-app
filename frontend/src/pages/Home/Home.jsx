import React, { useState } from "react";
import Navbar from "../../componenets/Navbar";
import TaskCard from "../../componenets/cards/TaskCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const onClose = () => {
    setAddEditModal({ isShown: false, type: "add", data: null });
  }
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <TaskCard
            title="Title goes here"
            date="05-04-1025"
            content="some content here"
            tags="#tags"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            OnPinNote={() => {}}
          />
        </div>
      </div>
      <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary hover:bg-hover absolute right-10 bottom-10">
        <MdAdd className="text-[32px] text-white"  onClick={()=>{setAddEditModal({isShown: true, data: null, type:"add"})}}/>
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
        
        contentLabel=""
        className="w-[40%] max-h-[75%] bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes type={openAddEditModal.type} taskData={openAddEditModal.data} onclose={onClose}/>
      </Modal>
    </>
  );
};

export default Home;
