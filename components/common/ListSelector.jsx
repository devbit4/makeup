export default function ListSelector({ onChange, options }) {
  const handleChange = (e) => {
    onChange && onChange(e);
  };

  return (
    <>
      <select onChange={handleChange} className='list-select-box'>
        {options.map((option, index) => {
          return (
            <option value={index} key={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
      <style jsx>{`
        .list-select-box {
          text-align: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
