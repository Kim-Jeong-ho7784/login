//최대 5번의 기회를 준다
for (var i = 0; i < 5; i ++){

  var id =window.prompt("아이디를 입력하세요");
  var password = window.prompt("비밀번호를 입력하세요.");

  if (id === 'Kim jeong ho' && password === '1234'){
    console.log('환영합니다.' + id + '님.');
    break;
  } else {
  console.log('아이디와 비밀번호가 일치하지 않습니다.');
  }
}
