export default function ListSelector({ onChange }) {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <>
      <select onChange={handleChange} className='list-select-box'>
        <option value='0'>선택</option>
        <option value='1'>가격낮은순</option>
        <option value='2'>가격높은순</option>
        <option value='3'>abc순</option>
      </select>
      <style jsx>{`
        .list-select-box {
          text-align: center;
        }
      `}</style>
    </>
  );
}
