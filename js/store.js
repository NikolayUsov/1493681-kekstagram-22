let storage = [];

const saveData = (data) => {
  storage = data;
}

const getData = () => storage;

export {saveData, getData};
