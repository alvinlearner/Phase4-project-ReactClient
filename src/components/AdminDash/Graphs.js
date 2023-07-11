import React, { useEffect, useState } from 'react';
import DashSideNav from './DashSideNav';
import 'charts.css';

export default function Graphs() {
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    fetch('/category_statistics')
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    // <div>
    //     <DashSideNav/>
    //     <h2>Category Statistics</h2>      
    //   <div className="chart-container">
    //     <ChartBar
    //       data={Object.values(categoryData)}
    //       labels={Object.keys(categoryData)}
    //       height={400}
    //     />
    //     </div>
    // </div>

    <div>
      <h2>Category Statistics</h2>
      <table className='charts-css bar show-primary-axis'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryData).map(([category, count]) => (
            <tr key={category}>
              <tr  style={{start: "0.2", size: "0.4"}}>{category}</tr>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}