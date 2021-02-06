
var btn=document.getElementById('btn');

;
 btn.addEventListener('click',(e)=>{
     e.preventDefault()
     console.log('hello')
     makeGrid()
     
 })
function makeGrid() {
    var Height=document.getElementById('inputHeight').value;
var Width=document.getElementById('inputWidth').value;

var table=document.getElementById('pixelCanvas')
table.innerHTML=""
  var tableContent=''
  for(i=0;i<Height;i++){
    tableContent+='<tr>'
    for(j=0;j<Width;j++){
      tableContent+='<td></td>'
    }
    tableContent+='</tr>'
  }
  table.innerHTML+=tableContent
   var cels=document.getElementsByTagName('td')
   for(i=0;i<cels.length;i++){
       cels[i].addEventListener('click',(e)=>{
            
           var tdCurrent=e.target
           tdCurrent.style.backgroundColor= document.getElementById('colorPicker').value
       })
   }
}