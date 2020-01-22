retro = {
  printDay : function(year,month,date){
    document.getElementById("year").innerHTML=year+"년";
    document.getElementById("month").innerHTML=month+"월 ";
    document.getElementById("date").innerHTML=date+"일";
  },
  showList : function(todoList) {
    var work = "";
    for(var i in todoList){
      work += "<div id='no"+i+"'><span id='todo"+i+"'>"+todoList[i]+"</span>"
            + "<img src='img/delete.png' id='del"+i+"' class='delete' onclick='retro.delete(this,todoList)'/></div>";
      document.getElementById("list").innerHTML = work;
    }
    var childs = document.getElementById('list').childNodes;
    console.log("childs count : "+ childs.length);
    if(childs.length > 0){
      childs.forEach(retro.toggleTodo);
    }
  },
  delete : function(item,list){
    var idx = item.id.substr(3);
    document.getElementById('no'+idx).remove();
    list.splice(list.indexOf(list[idx]),1);
    retro.showList(list);
  },
  addTodo : function(comp,list){
    if(comp.value.trim() != ''){
      list.push(comp.value);
      comp.value = '';
      retro.showList(list);
    }
  },
  toggleTodo : function(item){
    item.addEventListener('click',function(){
      this.classList.toggle('done');
    });
    // item.addEventListener('dblclick',function(){
    //   this.classList.toggle('done');
    // });
  }
}
//선택자 참고 !
//document.getElementById('id').childNodes
//parentNode
//document.querySelector('#id')
//document.querySelector('.class')
//document.querySelector('tag')
//document.getElementById('id')
//document.getElementsByClassName('class')
//document.getElementsByName('name')
//document.getElementsByTagName('tag')
//document.getElementsByTagNameNS('tag')//뭔지모름
