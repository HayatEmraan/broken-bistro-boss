const useSaveData = (name, email) => {
  fetch("http://localhost:3000/api/admin/users/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export default useSaveData;