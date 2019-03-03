import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <div class="app-identity">
            <h1>Calendar Generator</h1>
          </div>
          <div class="app-inputs">
            <input
              type="date"
              name="start date"
              value="2019-01-01"
              id="start"
            />
            <input type="input" name="days" id="days" />
            <input type="button" value="Update" id="update" />
          </div>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th colspan="7">
                  <h2>March 2019</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default App;
