const headText = ["Account /","My Account /","Product /","View Cart /","Checkout"];
const Head = () => {
  return (
    <nav className="text-sm mb-8">
      <ol className="flex flex-wrap items-center space-x-2 text-gray-500">
        {headText.map((text, i) =>
          i === 4 ? (<li key={i} className="text-gray-900 font-medium">{text}</li>) : (<li key={i}><a href="#" className="hover:text-gray-700">{text}</a></li>
          ))}
      </ol>
    </nav>
  );
};
export default Head;
