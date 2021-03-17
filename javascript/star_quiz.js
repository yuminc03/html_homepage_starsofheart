var count = 0; error = 0;

function PolarStar(){
  name = prompt("우리나라에서 1년 내내 볼 수있는 이 별은 북두칠성과 " + 
  "카시오페이아자리를 찾는 데 중요한 역할을 합니다. 이 별은 무엇인가요?", "(흰트 : 3글자)")
  if(name == "북극성"){
    alert("정답을 맞추셨어요! ^^");
    count++; 
  }
  else{
    alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
  }
  error++;
}
function Pluto(){
    p = prompt("태양계의 해왕성 다음에 있는 이것은 행성이였지만 " +
    "행성 조건에서 탈락하여 왜소행성이 되었다. 이것은 무엇일까?", "(흰트 : 3글자)")
    if(p == "명왕성"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function BigBear(){
    star = prompt("이 별자리는 북두칠성이 숨어 있는 북쪽 하늘의 별자리이고 " + 
    "우리나라에서 1년 내내 볼 수 있습니다. 이 별자리는 무엇일까요?")
    if(star == "큰곰자리"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function Mars(){
    m = prompt("태양계를 기준으로 지구 다음으로 태양과 가까운 행성은 무엇일까요?")
    if(m == "화성"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function Small(){
    between = prompt("이것은 화성과 목성 궤도 사이에 있고, " + 
    "행성보다 작은, 태양 주위를 공전하는 천체이다. 이것은 무엇입니까?")
    if(between == "소행성"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function Summer(){
    threestar = prompt("이것은 여름철 북반구 밤하늘에서 쉽게 볼 수 있는 " + 
    "밝은 별 3개가 이루는 가상의 삼각형이다. " +  
    "거문고자리의 베가, 독수리자리의 알타이르, 백조자리의 데네브로 이뤄지는 삼각형 모양의 성군이다. 이것은?")
    if(threestar == "여름철 대삼각형"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function ShootingStar(){
    round = prompt("이것은 태양이나 큰 질량의 행성에 대하여 타원 또는 포물선 궤도를 "  +
    "가지고 도는 태양계 내에 속한 작은 천체를 의미한다. 이것은?")
    if(round == "혜성"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function SunMoon(){
    rings = prompt("러블리즈의 Destiny의 가사중, “빛의 반질 네게 주고 싶은데~” 라는 가사" +
    " 중 빛의 반지는 무엇을 의미하는가?")
    if(rings == "금환일식"){
      alert("정답을 맞추셨어요! ^^");
      count++; 
    }
    else{
      alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
    }
    error++;
}
function Satellite(){
  moon = prompt("행성을 중심으로 돌고 있는 천체를 부르는 말은?")
  if(moon == "위성"){
    alert("정답을 맞추셨어요! ^^");
    count++; 
  }
  else{
    alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
  }
  error++;
}
function Jupiter(){
  j = prompt("태양계 행성 중 가장 크고 표면에는 가로줄 무늬와 대기의 "+ "소용돌이인 대적반이 있는 행성의 이름은?")
  if(j == "목성"){
    alert("정답을 맞추셨어요! ^^");
    count++; 
  }
  else{
    alert("틀렸습니다...다음엔 꼭 맞추세요~!!");
  }
  error++;
}
function score(){
  if(count>=8){
    alert("맞은 개수 : " + count + "개 \n축하해요~^^ 우주와 별에 대해서 아주 잘알고 계시군요!");
  }
  else if (count < 8 && count >= 5){
    alert("맞은 개수 : " + count + "개\n 조금만 더 노력하시면 됩니다! 잘했어요~");
  }
  else if (count < 5 && count >= 3 ){
    alert("맞은 개수 : " + count + "개\n 우주와 별에 대해서 조금은 알고 계시군요~ ");
  }
  else if (count < 3 && count >= 0){
    alert("맞은 개수 : " + count + "개\n 별과 우주에 대해서 조금만 더 관심을 가지고 노력해주세요~")
  }
}