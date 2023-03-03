import HornedBeast from "./HornedBeast";

export default function Main({ data, handleModal, hornsFilter }) {
  // .filter is an array method that takes a function as its argument
  // the function looks for a conditional (in this case beast.horns === parseInt(hornsFilter))
  // when the condition matches it makes the array only items that match
  // we put:
  // !hornsFilter ||
  // in front of the condition so we ONLY look at that when hornsFilter isn't blank
  const filteredData = data.filter((beast) => !hornsFilter || beast.horns === parseInt(hornsFilter));

  return (
    <main>
      {filteredData.map((beast) => {
        return (
          <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
            handleModal={handleModal}
            beast={beast}
          />
        );
      })}
    </main>
  );
}
