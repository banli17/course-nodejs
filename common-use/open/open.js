const ChromeLauncher = require("chrome-launcher");

// ChromeLauncher.launch({
//   startingUrl: 'https://baidu.com'
// }).then(chrome => {
//   console.log(`Chrome debugging port running on ${chrome.port}`);
//   setTimeout(()=>{
//     chrome.kill()
//   }, 2000)
// });

const open = require("open");
const {exec} = require('child_process')
const e = open("http://localhost:8705/sso-login", {
  app: {
    name: open.apps.chrome,
  },
});
// console.log(e);
e.then(res=>{
  console.log(e)
  setTimeout(()=>{
    exec(`kill ${e.pid}`)
  },1000)
})
