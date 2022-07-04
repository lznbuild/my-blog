### css module 复用样式
.container {color: red;}
.component: {composes: container;}

.component: {composes: container from './index.module.less'}

### 样式覆盖
.container {
  :global(.ant-button) {
    color: var(--main-color);
  }
}
配合css modules vscode plugin