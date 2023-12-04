document.addEventListener("DOMContentLoaded", async function () {
  let mainElem = document.querySelector("main");

  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=20"
    );
    let fetchedData = response.data;
    console.log(fetchedData);

    fetchedData.forEach((element) => {
      let card = `
        <div class="card bg-secondary text-light" style="width: 18rem">
          <img src="${element.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-text">${element.title}</h6>
						<div class="d-flex justify-content-between mt-5">
            <h4 class="card-text">💲${element.price}</h4>
            <h4 class="card-text">${element.rating.rate} / ${element.rating.count}</h4>
          </div>
          </div>
        </div>`;

      mainElem.innerHTML += card;
    });
  } catch (error) {
    console.error(error);
  }
});

// <div class="card bg-secondary text-light" style="width: 18rem">
//   <img
//     src=""
//     class="card-img-top"
//     alt="..."
//   />
//   <div class="card-body">
//     <p class="card-text">
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </p>
//   </div>
// </div>;
