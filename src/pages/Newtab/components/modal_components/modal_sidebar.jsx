import React from 'react';

const ModalSidebar = (props) => {
  return (
    <div className="modal_sidebar relative pt-5 w-[170px] flex flex-col flex-none border-[#313131] border-r">
      {props.items.map((item, i) => (
        <div
          onClick={() => {
            props.selectTab(i);
          }}
          key={i}
          active={i === props.selectedTab ? 'true' : ''}
          className={
            'pl-5 list_item relative py-[9px] mb-3 text-[13px] pr-3 cursor-pointer text-white'
          }
        >
          {item}
        </div>
      ))}
      {props.settings && (
        <a
          href=""
          className="cursor-pointer rounded-md flex items-center justify-center text-white rate-us absolute bottom-5 bg-yellow-500 h-[34px] w-[calc(100%-40px)] mx-5"
        >
          Rate Us
        </a>
      )}
    </div>
  );
};

export default ModalSidebar;