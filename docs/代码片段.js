/**
 * @description 将 img 元素转换为 Base64编码字符串
 * @param image 目标值
 */
 export function img2Base64DataUrl(image: HTMLImageElement): string {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 255, 255, 0)';
  ctx.drawImage(image, 0, 0, image.width, image.height);
  const ext = getFileExtname(image.src).replace('.', '') || 'png';
  return canvas.toDataURL(`image/${ext}`);
}

function myFunction() {
    var str = "RUNOOB";
    var enc = window.btoa(str); // 创建base64编码字符
    var dec = window.atob(enc); // 解码

    var res = "编码字符串为: " + enc + "<br>" + "解码后字符串为: " + dec;
    document.getElementById("demo").innerHTML = res;
}


/**
 * @description 复制内容，相当于选中内容，右键复制
 * @param content 需要被复制的内容
 */
 export function copy2Clipboard(content: string): void {
  const text = document.createElement('textarea');
  document.body.appendChild(text);
  text.value = content;
  text.style.position = 'fixed';
  text.style.top = '0px';
  text.style.left = '0px';
  text.focus();
  text.select();
  document.execCommand('copy');
  document.body.removeChild(text);
}

export function downloadBlob(blob: Blob, name: string): void {
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  a.download = name;
  a.href = url;
  a.click();
  window.URL.revokeObjectURL(url);
}


/// 读 excel表格内容生成文件

const totalData = [head.join(',')].concat(
  data.rows.map((item) =>
    [item.episodeId, item.level, item.edition, item.weekNum, item.day, item.synopsis, item.suggest].join(','),
  ),
);
downloadBlob(
  // \ufeff 避免中文乱码
  new Blob(['\ufeff' + totalData.join('\n')], {
    type: 'text/csv,charset=UTF-8',
  }),
  data.tableName,
);


‘’.charCodeAt().   return unicode编码

String.formCharCode([num]). Return unicode编码字符