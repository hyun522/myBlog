document.querySelector('body').style.backgroundColor = 'orange';

$(function () {
  //제이쿼리 시작구문 $(document).ready(function(){})
  $('.menu li').on('click', function () {
    $(this).css({ 'background-color': 'red' });
    alert('li태그 메뉴를 클릭하셨습니다.');
  });
});
