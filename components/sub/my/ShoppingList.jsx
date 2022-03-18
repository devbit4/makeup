export default function ShoppingList({ shoppingItems, dispatch }) {
  return (
    <>
      <div className='shopping-cart'>
        <h1 className='shopping-cart-title'>User shooping cart</h1>
        <table className='shopping-cart-table'>
          <thead>
            <tr>
              <th>id</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {shoppingItems.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({
                          type: 'plus',
                          payload: { id: item.id },
                        });
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch({
                          type: 'minus',
                          payload: { id: item.id },
                        });
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .shopping-cart-title {
          font: 400 18px/1 'roboto';
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border: 1px solid #333;
          border-collapse: collapse;
          text-align: center;
        }
        th,
        td {
          border: 1px solid #333;
          padding: 10px;
        }
        th {
          background-color: #ccc;
        }
        table button {
          padding: 5px;
          margin: 2px;
          cursor: pointer;
          font: 400 12px/1 'roboto';
        }
      `}</style>
    </>
  );
}
