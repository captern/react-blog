import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './components/globalcss/init.scss'
import App from './route/root';
import registerServiceWorker from './registerServiceWorker';
import * as imgUrls from './components/imgurls'
// M站快速点击
import FastClick from 'fastclick'

FastClick.attach(document.body);

// 预加载图片
let myloadingimgs = []
for(let i in imgUrls){
  myloadingimgs.push(imgUrls[i])
}
console.log(myloadingimgs)
// loading动画dom
var loadingDiv = document.getElementById('pageloading')
// 判断浏览器兼容前缀
var useTransform = (loadingDiv.style['msTransform'] && 'msTransform')
  || (loadingDiv.style['webkitTransform'] && 'webkitTransform')
  || (loadingDiv.style['MozTransform'] && 'MozTransform')
  || (loadingDiv.style['OTransform'] && 'OTransform')
  || 'transform';
var imgloadindex = 0        // 已经加载图片数量
var imgNum = 0              // 图片总数
myloadingimgs.map(urls => {
  for(let i in urls){
    imgNum ++
    let img = new Image()
    img.onload = () => {
      // 当图片加载成功时，计数加一
      imgloadindex++
      reactloading()
    }
    img.src = urls[i]
  }
})

function reactloading(){
  const styles = 'scaleX(' + (imgloadindex / (imgNum - 3)).toFixed(2) + ')';
  loadingDiv.style[useTransform] = styles;
  if(imgloadindex >= imgNum-1){
    ReactDOM.render(<App />, document.getElementById('root'));
    console.log('1212')
    loadingDiv = myloadingimgs = useTransform = imgloadindex = imgNum = null
  }

}
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
