import './index.less';
import { Responsive as ResponsiveGridLayout, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { nanoid } from 'nanoid'
import React from 'react';
import {Button, Checkbox} from 'antd';
import ComponentsSourcePanel from '../components/components_source';
import 'antd/dist/antd.css'
// import GridLayout from 'react-grid-layout';

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);


export default () => {
  // droppingItem
  const [droppingItem, setDroppingItem] = React.useState({w: 1, h: 1})

  const onDragStop = (e: Event) => {
    console.log(e, 'ee')
  }

  // layout
  const initLayout = {lg: [
    {i: '1', x: 0, y: 0, w: 1, h: 1, static: true},
    {i: '2', x: 1, y: 2, w: 1, h: 1},
    {i: '3', x: 0, y: 1, w: 1, h: 1},
    {i: '4', x: 0, y: 1, w: 1, h: 1},
    {i: '5', x: 4, y: 4, w: 1, h: 1},
    {i: 'kkk', x: 0, y: 5, w: 1, h: 1},
  ]};

  const [layout, setLayouts] = React.useState<any>(initLayout);

  const getRender = (layout: any) => {
    return layout.lg.map((l: any) => {
      return (
        <div key={l.i} className="grid">
          {React.createElement(Button, {}, 'aaaaaaaa')}
        </div>
      )
    })
  }

  // 组件列表
  const onDrop = (_, droppedInfo: any, e: any) => {
    // console.log(e.preventDefault(), 'ee')
    const {x, y, w, h} = droppedInfo
    setLayouts(
      (l) => (
        {
          lg: [...(l.lg), {i: `${l.lg.length}`, x, y, w, h}]
        }
      ))
  }

  const dragStartHandler = (info) => {
    setDroppingItem({...info, i: nanoid()})
  }

  return (
    <div style={{}} className="drawing-board-container" >
      {/* 源组件面板 */}
      <ComponentsSourcePanel onDragStart={dragStartHandler} />
      {/* 拖拽面板 */}
      <ReactGridLayout
        isDroppable
        preventCollision
        isBounded
        layouts={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        // resizeHandle=
        compactType="vertical"
        // cols={12}
        rowHeight={40}
        verticalCompact={false}
        // onDragStop={onDragStop}
        onDrop={onDrop}
        // onDropDragOver={(e) => {console.log(e, 'eeeee'); e.preventDefault()}}
        droppingItem={droppingItem}
        onLayoutChange={console.log}
        style={{border: `1px solid red`, display: 'flex', flex: 1, height: '100%'}}git 
      >
        {getRender(layout)}
      </ReactGridLayout>
      {/* 组件属性面板 */}
      <ComponentsSourcePanel onDragStart={dragStartHandler} />
    </div>
  );
}
