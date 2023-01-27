function OchelariPersonalizatiComponent({ image, title, text }) {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <div className="w-full lg:w-64">
        <img className="w-full h-full" src={image} />
      </div>
      <h3 className="text-2xl lg:text-xl text-green-800 p-3 font-bold">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default OchelariPersonalizatiComponent;
