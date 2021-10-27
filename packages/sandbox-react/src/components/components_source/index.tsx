  import React from 'react';
import {antd as antdConfig} from '../custom_basic_components';

export default (props: {
  onDragStart: (info: {w: number, h: number}) => any
}) => {
  const {onDragStart} = props;

  const dragStartHandler = (e, component) => {
    e.dataTransfer.setData("data", JSON.stringify(component))
    // TODO: 给出组件运行时信息（占位大小）
    if (onDragStart) {
      onDragStart({w: 1, h: 1})
    }
  }

  return (
    <div>
        {
          antdConfig.map((component) => {
            return (
              <p
                key={component.name}
                draggable
                onDragStart={e => dragStartHandler(e, component)}
                data-set={component.config}
                style={{border: '1px solid red'}}
              >{component.alias}</p>
            )
          })
        }
    </div>
  )
}
