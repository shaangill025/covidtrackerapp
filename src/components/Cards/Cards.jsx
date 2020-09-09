import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const CardInfo = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="COVID-19 Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Active Cases#"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="COVID-19 Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Recovered Cases#"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="COVID-19 Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Deaths#"
        />
      </Grid>
    </div>
  );
};
export default CardInfo;
