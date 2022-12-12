import Item from './item';

const Products = () => {
  return (
    <div className="flex items-center m-auto max-w-7xl w-full bg-black/30 my-20 flex-wrap">
      <div className="flex-auto w-full md:w-6/12 flex flex-wrap p-3">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="flex-auto w-6/12">hey</div>
    </div>
  );
};

export default Products;
