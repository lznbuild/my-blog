## 操作符
from（）传入可迭代的内容 

switchMap 具有取消效果，在每次发出时，会取消前一个内部observable的订阅,然后订阅一个新的observable, 当有新的输入时便不再关心之前请求的相应结果。 