export function getRedirectPath({type, avatar}) {
  // 根据用户类型，判断用户跳转地址
  // user.type  /boss /genius
  // user.avator  /bossinfo /geniusinfo
  let url = (type === 'boss') ? '/boss' : '/genius'
  if(!avatar){
    url += 'info'
  }
  return url
}