const fs = require('fs');

function getemotion(){
var student = JSON.parse(fs.readFileSync('C:/Users/Anandakumar VK/Downloads/em/src/emotion.json'));
console.log(student);
document.write(student);
emotionwait(); 
}
async function emotionwait() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return getemotion();
}        