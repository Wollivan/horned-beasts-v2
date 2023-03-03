import HornedBeast from "./HornedBeast";

export default function Main({ data, handleModal, hornsFilter }) {
  return (
    <main>
      {data.map((beast) => {
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
