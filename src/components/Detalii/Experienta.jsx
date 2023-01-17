import ExperientaProgress from "./ExperientaProgress";
import RenderIfVisible from "react-render-if-visible";

function Experienta() {
  return (
    <div
      className="mt-8 mb-8 h-screen w-screen bg-green-800 flex flex-col justify-around text-white
    lg:flex-row lg:h-96 lg:items-center
    "
    >
      <div className="h-1/5 flex flex-col items-center justify-evenly lg:w-1/4 lg:h-2/4 lg:justify-between">
        <h3 className="text-2xl font-bold lg:text-3xl">Experiență</h3>
        <h2 className="text-4xl font-bold lg:text-6xl">
          <RenderIfVisible defaultHeight={100} visibleOffset={0}>
            <ExperientaProgress completed={8} time={190} random={0.1} />
          </RenderIfVisible>
        </h2>
        <p className="lg:text-lg">ani</p>
      </div>
      <div className="h-1/5 flex flex-col items-center justify-evenly lg:w-1/4 lg:h-2/4 lg:justify-between">
        <h3 className="text-2xl font-bold lg:text-3xl">
          Echipa de specialiști
        </h3>
        <h2 className="text-4xl font-bold lg:text-6xl">
          <RenderIfVisible defaultHeight={100} visibleOffset={0}>
            <ExperientaProgress completed={6} time={210} random={0.1} />
          </RenderIfVisible>
        </h2>
        <p className="lg:text-lg">Dedicați și pasionați</p>
      </div>
      <div className="h-1/5 flex flex-col items-center justify-evenly lg:w-1/4 lg:h-2/4 lg:justify-between">
        <h3 className="text-2xl font-bold lg:text-3xl">Clienți mulțumiți</h3>
        <h2 className="text-4xl font-bold lg:text-6xl">
          <RenderIfVisible defaultHeight={100} visibleOffset={0}>
            <ExperientaProgress completed={1200} time={7} plus={true} />
          </RenderIfVisible>
        </h2>
        <p className="lg:text-lg">Avem grijă de ochii lor</p>
      </div>
      <div className="h-1/5 flex flex-col items-center justify-evenly lg:w-1/4 lg:h-2/4 lg:justify-between">
        <h3 className="text-2xl font-bold lg:text-3xl">Branduri</h3>
        <h2 className="text-4xl font-bold lg:text-6xl">
          <RenderIfVisible defaultHeight={100} visibleOffset={0}>
            <ExperientaProgress
              completed={40}
              time={40}
              random={0.1}
              plus={true}
            />
          </RenderIfVisible>
        </h2>
        <p className="lg:text-lg">Gamă variată de produse</p>
      </div>
    </div>
  );
}

export default Experienta;
