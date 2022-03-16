export default function TabContent({ tab, description }) {
  if (tab === '0')
    return (
      <>
        <div className='tab-content1'>
          <p>{description}</p>
          <style jsx>{`
            .tab-content1 {
              background-color: #efefef;
              min-height: 200px;
              margin-bottom: 20px;
              padding: 30px;
            }
            .tab-content1 p {
              font: 400 14px/1.4 'roboto';
            }
          `}</style>
        </div>
      </>
    );
  else if (tab === '1')
    return (
      <>
        <div className='tab-content2'>
          <p>주문 및 배송 안내입니다.</p>
          <style jsx>{`
            .tab-content2 {
              background-color: #efefef;
              min-height: 200px;
              margin-bottom: 20px;
              padding: 30px;
            }
            .tab-content2 p {
              font: 400 14px/1.4 'roboto';
            }
          `}</style>
        </div>
      </>
    );
}
