const Pagination = ({ goodsPerPage, totalGoods, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className="page-item"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
