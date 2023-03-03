import HornedBeast from "./HornedBeast";

export default function Main({ data, handleModal, hornsFilter }) {
  // if hornsFilter is "", then don't filter
  // if its a number, then only show the horned beasts that have that many horns
  // use the hornsFilter prop

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
