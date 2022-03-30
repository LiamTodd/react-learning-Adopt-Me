// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

// Same thing below:
// const Pet = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   );
// };

// Using destructuring
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"; // return this if no pictures exist
  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}-${breed}-${animal}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
