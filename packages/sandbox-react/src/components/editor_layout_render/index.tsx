import { Responsive as ResponsiveGridLayout, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import React from 'react';
import {Button, Checkbox} from 'antd';

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);


export default (props: {
  droppingItem: Record<string, number|string>,
  initLayout: Record<string, any>,
}) => {
  const {droppingItem, initLayout} = props;

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

  return (
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
      style={{border: `1px solid red`, display: 'flex', flex: 1, height: '100%'}}
    >
      {getRender(layout)}
    </ReactGridLayout>
  );
}
