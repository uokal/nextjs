import React from 'react';
const stock = [
  {
    'updaterate': '0.5',
    'percentage': '10%',
    'bank': 'Nifty Bank',
    'class': 'red'
  },
  {
    'updaterate': '41.000',
    'percentage': '0.01%',
    'bank': 'Bajaj Finace',
    'class': 'green'
  },
  {
    'updaterate': '41.000',
    'percentage': '10%',
    'bank': 'Bharti',
    'class': 'red'
  },
  {
    'updaterate': '771',
    'percentage': '10%',
    'bank': 'HDFC Bank',
    'class': 'green'
  },
  {
    'updaterate': '800',
    'percentage': '10%',
    'bank': 'Hind',
    'class': 'green'
  },
  {
    'updaterate': '400',
    'percentage': '5%',
    'bank': 'Micro',
    'class': 'red'
  },
  {
    'updaterate': '500',
    'percentage': '15%',
    'bank': 'Wipro',
    'class': 'green'
  },
  {
    'updaterate': '700',
    'percentage': '15%',
    'bank': 'Wipro',
    'class': 'green'
  }
]
function NavLink() {
  return (
    <>
      <div className='flex w-full items-center gap-3 justify-between px-10 bg-black text-gray-200 overflow-x-auto overflex'>

        {/* Since p tag or compannies get reapeated so i store in a array of obj and simple did mapping */}
        {stock.map((company, index) => (
          <p
            key={index}
            style={{ whiteSpace: 'nowrap' }}
            className='stock-list'
          >
            <span>{company.updaterate}</span>
            <span className={company.class}>{company.percentage}</span>
            <span>{company.bank}</span>
          </p>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .flex > p {
            margin-right: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavLink;
