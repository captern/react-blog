// home
import glitch from '../images/home/glitch.png'
import mail from '../images/home/mail.png'
import smile from '../images/home/smile.png'
import sup from '../images/home/sup.png'
import readme from '../images/home/readme.png'
import msg from '../images/home/msg.png'
import setting from '../images/home/setting.png'

// work
import logo1 from '../images/work/logo1.png'
import logo2 from '../images/work/logo2.png'
import chick from '../images/work/chicken.png'
import moneky from '../images/work/moneky.png'
import game from '../images/work/game.png'
import jquo from '../images/work/jquo.png'
import pictring from '../images/work/pictring.png'
import vue from '../images/work/Vue.png'
import reacts from '../images/work/react.png'
import blog from '../images/work/blogs.png'

// about
import imail from '../images/about/mymail.png'
import igit from '../images/about/mygit.png'
import icode from '../images/about/mycode.png'
import iadd from '../images/about/myadd.png'
import icity from '../images/about/citybg.png'
import emjz from '../images/emoji/zzz.png'
import emjs from '../images/emoji/sad.png'
import emja from '../images/emoji/anger.png'
import emjd from '../images/emoji/dis.png'
import emjh from '../images/emoji/happy.png'
import icloud from '../images/about/aboutbg.png'
import myfont from '../images/about/myfont.png'

// 点赞gif动画
import g1 from '../images/gifs/g1.gif'
import g2 from '../images/gifs/g2.gif'
import g3 from '../images/gifs/g3.gif'
import g4 from '../images/gifs/g4.gif'
import g5 from '../images/gifs/g5.gif'
import g6 from '../images/gifs/g6.gif'
import g7 from '../images/gifs/g7.gif'
import g8 from '../images/gifs/g8.gif'
import g9 from '../images/gifs/g9.gif'
import g10 from '../images/gifs/g10.gif'
import g11 from '../images/gifs/g11.gif'
import g12 from '../images/gifs/g12.gif'
import g13 from '../images/gifs/g13.gif'
import g14 from '../images/gifs/g14.gif'
import g15 from '../images/gifs/g15.gif'
import g16 from '../images/gifs/g16.gif'
import g17 from '../images/gifs/g17.gif'
import g18 from '../images/gifs/g18.gif'

const parrotSrc =  [
      g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18
    ] 

const homeIcon = {
  sup,
  readme,
  msg,
  setting
}

const homeImg = { 
  glitch,
  mail,
  smile
}

const aboutImg = {
  imail,
  igit,
  icode,
  iadd,
  icity,
  emjz,
  emjs,
  emja,
  emjd,
  emjh,
  icloud,
  myfont
}

const workIcon = {
  logo1,
  logo2,
  chick,
  moneky,
  game,
  jquo,
  pictring,
  vue,
  reacts,
  blog
}

let parrotUrl = {}
parrotSrc.map((url)=>{
  [].push.call(parrotUrl,url)
})



export {homeIcon, homeImg, workIcon, parrotUrl, aboutImg}
