import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>Build COVID tracker app</h1>
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
