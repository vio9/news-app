import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

const data = ['ceci', 'cela'];

<Chart height={400} data={data} forceFit>
  <Axis name='month' />
  <Axis name='temperature' label={{ formatter: (val) => `${val}°C` }} />
  <Tooltip crosshairs={{ type: 'y' }} />
  <Geom type='line' position='month*temperature' size={2} color={'city'} />
  <Geom type='point' position='month*temperature' size={4} color={'city'} />
</Chart>;
