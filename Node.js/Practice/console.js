const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체 시간");
console.log("평범한 로그 입니다..");
console.log(string, number, boolean);
console.error("에러 메세지는 console.error에 담아주세요");

console.table([
  { name: "제로", birth: 1991 },
  { name: "히로", birth: 1989 },
]);

console.dir(obj, { color: false, depth: 2 });
console.dir(obj, { color: true, depth: 1 });

console.time("시간측정");
for (let i = 0; i < 1000; i++) {
  console.timeEnd("시간측장");
}

function b() {
  console.trace("에러 위치 추적");
}
function a() {
  b();
}
a();

console.timeEnd("전체 시간");
