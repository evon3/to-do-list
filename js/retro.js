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
      // work += "<div id='no"+i+"'><span id='todo"+i+"'>"+todoList[i]+"</span>"
      //       + "<a id='del"+i+"' class='delete' onclick='retro.delete(this,todoList)'>del</a></div>";
      document.getElementById("list").innerHTML = work;
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
  }
}
