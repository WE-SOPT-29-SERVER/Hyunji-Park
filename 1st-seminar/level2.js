const soptMem = {
  members: [
    {
      name: "고성용",
      age: "25",
      station: "불광",
      hobby: "축구하는 것",
    },
    {
      name: "조윤서",
      age: "23",
      station: "백석",
      hobby: "음악듣는 것",
    },
    {
      name: "김은지",
      age: "24",
      station: "마두",
      hobby: "카페가는 것",
    },
    {
      name: "박현지",
      age: "23",
      station: "이대",
      hobby: "드라마보는 것",
    },
  ],

  introduce: function () {
    this.members.forEach((mem) => {
      console.log(
        `${mem.name}는 나이는 ${mem.age}살이고 집 근처 역은 ${mem.station}역이고 취미는 ${mem.hobby}입니다.`
      );
    });
  },
};

soptMem.introduce();
