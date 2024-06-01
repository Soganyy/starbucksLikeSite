const CardItemDetailChildren = (datas) => {
  const data = datas.detail;
  const products = data.products;
  console.log(products[0]);
  return (
    <div>
      {data.name}
      <div className="row">
        {products.map((item) => {
          return (
            <div className="card m-4" style={{ maxWidth: "14%" }}>
              <img
                src={item.images[0].url}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardItemDetailChildren;
