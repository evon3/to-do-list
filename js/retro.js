retro = {
  printDay : function(year,month,date){
    document.getElementById("year").innerHTML=year+"년";
    document.getElementById("month").innerHTML=month+"월 ";
    document.getElementById("date").innerHTML=date+"일";
  },
  showList : function(todoList) {
    var work = "";
    for(var i in todoList){
      work += "<li>"+todoList[i]+"</li>";
      document.getElementById("list").innerHTML = work;
    }
  }
}
