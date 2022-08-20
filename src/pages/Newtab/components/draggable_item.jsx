import React, { useState } from 'react';
import edit from '../../../assets/img/edit.svg';
import amazon from '../../../assets/img/amazon.png';
import Draggable from 'react-draggable';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
const ReactGridLayout = WidthProvider(RGL);
const DraggableItem = (props) => {
  var layout = [
    { i: 'searchBar', x: 4, y: 6, w: 5, h: 2, static: true },
    { i: 'b2', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b4', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b5', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b6', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b47', x: 0, y: 0, w: 1, h: 2 },
  ];
  for (let x = 0; x < 13; x++) {
    for (let y = 0; y < 1; y++) {
      // layout.push({ i: "a" + x + y, x: x, y: y * 2, w: 1, h: 2 })
    }
    layout.push({ i: 'astatic' + x, x: x, y: 8 * 2, w: 1, h: 2, static: true });
  }
  function buildLayout() {}
  console.log(window.innerHeight - 40);
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={13}
      rowHeight={(window.innerHeight - 40) / 16}
      isBounded={true}
      verticalCompact={false}
      preventCollision={true}
      isResizable={false}
      margin={[0, 0]}
    >
      {layout.map((e) => (
        <div key={e.i}>
          <div>
            <div className="drag_item handle rounded-md p-2  cursor-pointer flex justify-center items-center flex-col relative hover:bg-black hover:bg-opacity-40  duration-150">
              <div
                style={{ backgroundImage: 'url(' + edit + ')' }}
                onClick={() => {
                  props.openModal(true);
                }}
                className="edit_on_hover  w-[24px] bg-[length:14px_14px]  bg-center bg-no-repeat h-[24px] bg-black bg-opacity-40 rounded-full -top-3 -right-3 cursor-pointer delay-200 transition-all duration-150 flex opacity-0 pointer-events-none absolute justify-center items-center p-1 "
              ></div>
              <div
                className="rounded-full w-[64px] bg-cover bg-center bg-no-repeat h-[64px] "
                style={{ backgroundImage: 'url(' + amazon + ')' }}
              ></div>
              <div className="text-white text-sm">{props.title}</div>
            </div>
          </div>
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default DraggableItem;
