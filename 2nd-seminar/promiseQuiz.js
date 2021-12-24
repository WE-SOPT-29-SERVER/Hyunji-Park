const members = require("./members");

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

/*
화살표 함수 안에 괄호 넣으면 [] 이렇게 빈 배열 나옴
const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => {o.location === "offline"});
      resolve(data);
    }, 500);
  });
};
*/

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "OB");
      resolve(data);
    }, 500);
  });
};

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);

// async & await version
const asyncFunc = async (members) => {
  const onlineMem = await getOnline(members);
  const onlineObMem = await getOB(onlineMem);
  console.log(onlineObMem);
};

asyncFunc(members);
