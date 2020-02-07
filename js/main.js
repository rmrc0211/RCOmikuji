(function() {
  let btn = document.getElementById('btn');
  let rci = document.getElementById('rci');
  let output = document.getElementById('output');

  btn.addEventListener('click', ()=> {
    result();
  });

  const result = () => {
    let index = Math.floor(Math.random() * 5);

    switch (index) {
      case 0:
        rci.innerHTML='<img src="img/1.jpg" class="img-fluid">';
        output.innerHTML = '<p>大吉です！<br/>最高の一年になるよ！<p>';
        break;
      case 1:
        rci.innerHTML='<img src="img/3.jpg" class="img-fluid">';
        output.innerHTML = '<p>吉です!<br/>きっと良い一年になるよ！</p>';
        break;
      case 2:
        rci.innerHTML='<img src="img/7.jpg" class="img-fluid">';
        output.innerHTML = '<p>小吉です!<br/>小さな幸せに感謝しよう！</p>';
        break;
      case 3:
        rci.innerHTML='<img src="img/6.jpg" class="img-fluid">';
        output.innerHTML = '<p>凶です!<br/>大丈夫！慎重にいこう！</p>';
        break;
      default:
        rci.innerHTML='<img src="img/5.jpg" class="img-fluid">';
        output.innerHTML = '<p>大凶です!<br/>信じる者は救われる！？</p>';
        break;
    }
  }
})();
