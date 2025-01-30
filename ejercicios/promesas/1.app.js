function get80porciento() {
  if (Math.random() > 0.2) {
    return true;
  }
  return false;
}

for (let i = 0; i < 30; i++) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (get80porciento()) {
        resolve("La promesa se resolvió");
      }
      reject("La promesa se rechazó");
    }, 3000);
  });

  promesa
    .then((res) => {
      console.log(res);
    })
    .finally(() => {
      console.log(promesa);
    })
    .catch((err) => {
      console.error(err);
    });
}
