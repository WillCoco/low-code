import {withProps} from '../../utils';
import {Button} from 'antd';

const styledButton = withProps(Button, {
  value: '按钮'
})

const antd = [
  {
    name: 'Button',
    alias: '按钮',
    config: {
      value: '按钮'
    }
  }, {
    name: 'Avatar',
    alias: '按钮',
    config: {
      value: '头像'
    }
  }, {
    name: 'Input',
    alias: '输入框',
    config: {
      placeholder: '请输入'
    }
  }
]

export {
  antd
};
