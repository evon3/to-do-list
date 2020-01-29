window.onload = function(){

    /* var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    }) */
}
var message = {
  js : "지코바!"
};
/*
아톰 단축키
alt
ctrl 누른상태에서 마우스 클릭하거나 더블클릭하면 한꺼번에 여러군데 고칠수 있음 --> esc로 초기화 ㅋㅋ
ctrl + shift + D : 현재 row 복사
ctrl + shift + K : 현재 row 삭제
*/
/*이벤트 주는방법
  선택자로 특정 Element(요소)를 선택하고 addEventListener로 이벤트 주면됨.
  getElement[s] 방법 : id, class, tag, name 선택가능 ..-> s붙이면 배열로 요소(component)들이 넘어옴
  querySelector[All] 방법 : id, class, tag 선택가능
*/
/*
//1. class로 선택하기
document.getElementsByClassName('btn_add')[0].addEventListener('click',function(){//추천★
  alert('클래스 선택자 1 .. 배열로 넘어옴');
});
document.querySelectorAll('.btn_add')[0].addEventListener('click',function(){
  alert('클래스 선택자 2 .. 배열로 넘어옴');
});
document.querySelector('.btn_add').addEventListener('click',function(){
  alert('클래스 선택자 3 .. All을 안붙이면 한개만 넘어와서 클래스선택자에는 부적합');
});
//2.id로 선택하기
document.getElementById('btn_add').addEventListener('click',function(){//추천★
  alert('id 선택자 1 ..');
});
document.querySelector('#btn_add').addEventListener('click',function(){
  alert('id 선택자 2 ..');
});
//3.tag로 선택하기
document.querySelector('a').addEventListener('click',function(){
  alert(`tag 선택자 1 .. 얘도 All 안붙이면 첫번째꺼 한개밖에 못받아옴..
        btn_check가 맨앞이라 check한테 먹음ㅋㅋ 추가눌러도 alert안뜸`);
});
document.querySelector('a[class=btn_add]').addEventListener('click',function(){
  alert('tag 선택자 2 .. 이렇게 하면 클래스 조건도 추가됨');
});
document.querySelectorAll('a')[3].addEventListener('click',function(){
  alert('tag 선택자 3 .. 배열로 넘어옴...');
});
document.getElementsByTagName('a')[3].addEventListener('click',function(){//추천★
  alert('tag 선택자 4 .. 배열로 넘어옴...');
});
//4.name으로 선택하기
document.getElementsByName('btn_add')[0].addEventListener('click',function(){//추천★
  alert('name 선택자 1 .. 배열로 넘어옴...');
});
*/
