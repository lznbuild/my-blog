### 防止xss攻击

编码
  <>    &lt;  &gt;

过滤
  移出用户上传的DOM属性，onerror
  移除用户上传的style,script，iframe过滤

校正
  比面截至对html entity接吗
  使用dom parse转换，校正不配对的dom标签

  