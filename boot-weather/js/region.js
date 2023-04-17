//1. 전체 url 가져오기
const currentURL = location.href;
console.log(currentURL);

//2. 쿼리스트링 파라메터 가져오기
const urlObj = new URL(currentURL);

//파라메터에 대한 정보가 들어있다.
const params = urlObj.searchParams;

// 파라메터의 값을 구한다 params.get("변수명");
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

//3. ajax 이용해 전체 날씨 정보 얻어오기
function getCityWeather() {
  var temp = {};
  var openWeatherAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&lat=37.4495733&lon=126.7154219"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다
  urlAPI + "&q=" + city;

  $.ajax({
    type: "GET",
    url: openWeatherAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      //정상 응답시 처리 작업
      const celsius = data.main.temp; // 소수점 버림;
      const icon = data.weather[0].icon;

      temp.celsius = data.main.temp.toFixed(0); // 소수점 버림;
      temp.icon = data.weather[0].icon;
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  asdfasdf;

  return temp;
}

//4. 데이터 바인딩 작업
let temp = getCityWeather();
