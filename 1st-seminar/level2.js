const soptMem = {
  members: [
    {
      name: "고성용",
      age: "25",
      group: "OB",
      part: "Server",
    },
    {
      name: "조윤서",
      age: "23",
      group: "OB",
      part: "Server",
    },
    {
      name: "김은지",
      age: "24",
      group: "YB",
      part: "Server",
    },
    {
      name: "박현지",
      age: "23",
      group: "OB",
      part: "Server",
    },
  ],

  introduce: function () {
    this.members.forEach((mem) => {
      console.log(
        `${mem.name}는 ${mem.age}살이고 ${mem.part}파트이고 ${mem.group}입니다.`
      );
    });
  },
};

soptMem.introduce();
