export function productCard(listing) {
  const { description, id, title, media } = listing;
  const productImage = media.length === 0 ? "/placeholder.jpg" : media[0];
  return `
   <div class="col" id=${id}>
   <div class="card gradient height">
     <img src="${productImage}" class="card-img" alt="${title}" />
     <div class="card-body">
       <h5 class="card-title">${title}</h5>
       <p class="card-text">${description}</p>
     </div>
   </div>
 </div>
 `;
}
