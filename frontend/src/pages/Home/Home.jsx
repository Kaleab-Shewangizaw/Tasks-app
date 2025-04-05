import React from "react";
import Navbar from "../../componenets/Navbar";
import TaskCard from "../../componenets/cards/TaskCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
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
        <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary hover:bg-hover absolute right-10 bottom-10">
          <MdAdd className="text-[32px] text-white" />
        </button>
      </div>
    </>
  );
};

export default Home;
