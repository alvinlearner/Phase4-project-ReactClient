import React, { useEffect, useState } from 'react';
import DashSideNav from './DashSideNav';


export default function Graphs() {
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    fetch('https://events-app-api-mu7z.onrender.com/category_statistics')
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
      <DashSideNav/>
      <h2>Category Statistics</h2>
      <table >
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryData).map(([category, count]) => (
            <tr key={category}>
              <tr >{category}</tr>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}