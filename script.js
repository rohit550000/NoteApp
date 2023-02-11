
const add = document.querySelector(".addd");
add.addEventListener('click', () => {
  creat();
})

function creat() {
  const divv = document.createElement("div")
  divv.classList.add('notes');

  divv.innerHTML =
    `
    <div class="options">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
</div>

<div class="storeddata hidden">
    <div class="lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    <div class="data">h</div> 
</div>

<textarea>Start writing...</textarea>
  `

  const editbtn = divv.querySelector(".edit");
  const deleteBtn = divv.querySelector(".delete");
  const storedData = divv.querySelector(".storeddata")
  const textArea = divv.querySelector("textarea")
  const lockeddata = divv.querySelector(".data")

  editbtn.addEventListener('click', () => {
    storedData.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  })

  deleteBtn.addEventListener('click', () => {
    divv.remove();
  })

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    lockeddata.innerHTML = value;
  });

  document.body.appendChild(divv)
}



