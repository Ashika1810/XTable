import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([ { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" }])

  const handleSortDate = ()=>{
    setTableData([...tableData].sort((a,b)=> {
      if(new Date(a.date)=== new Date(b.date)){
        return b.views-a.views;
      }
      return new Date(b.date)- new Date(a.date);
    }));
  }

  const handleSortViews = ()=>{
    setTableData([...tableData].sort((a,b)=>{
      if(a.views===b.views){
        return new Date(b.date)-new Date(a.date);
      }
      return b.views-a.views
    }))
  }


  return (
    <div className='container'>
      <h1>Date and Views Table</h1>
      <div className='buttons'>
        <button onClick={handleSortDate}>Sort by Date</button>
        <button onClick={handleSortViews}>Sort by Views</button>
        <table>
          <thead>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </thead>
          <tbody>
            {tableData.map((item)=>{
              return(
                <tr>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                  <td>{item.article}</td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
