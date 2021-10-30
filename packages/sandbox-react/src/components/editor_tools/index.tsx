import React from 'react';
import ComponentsSourcePanel from '../components_source';
import styles from './editor_tools.less'


export default (props: {
  children: React.ReactNode,
  dragStartHandler: (info: Record<string, string>) => void
}) => {
  const {children, dragStartHandler} = props;
  const topLeftMenus = [
    {name: '预览', icon: ''},
    {name: '下载', icon: ''},
  ]

  const topRightMenus = [
    {name: '撤销', icon: ''},
    {name: '取消撤销', icon: ''},
    {name: '组件设置', icon: ''},
    {name: '全局设置', icon: ''},
  ]

  return (
    <div className={styles['editor-container']}>
      {/* 顶部栏 */}
      <div className={styles['top-container']}>
        {
          topLeftMenus.map((i) => {
            return (
              <div className={styles.menu}>{i.name}</div>
            )
          })
        }
        {
          topRightMenus.map((i) => {
            return (
              <div className={styles.menu}>{i.name}</div>
            )
          })
        }
      </div>
      <div className={styles['left-container']}>
        {/* 左侧栏 */}
        <div>
          {
            topLeftMenus.map((i) => {
              return (
                <div>{i.name}</div>
              )
            })
          }
          <ComponentsSourcePanel onDragStart={dragStartHandler} />
        </div>
        {/* 内容区 */}
        <div className={styles['content-container']}>
          {children}
        </div>
        {/* 右侧面板 */}
        <div>
          {/* 组件属性面板 */}
          <ComponentsSourcePanel onDragStart={dragStartHandler} />
        </div>
      </div>
    </div>
  );
}
