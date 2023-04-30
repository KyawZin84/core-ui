import TestCodeComponent from "./TestCodeComponent";
import TestCodeCom2 from "./TestCodeCom2";
import React, { useState } from 'react';
import { CCard, CCardBody } from '@coreui/react';
import Chart from 'react-apexcharts';

const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['N1','N2','N3','N4','N5'],
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Japanese Skill',
      data: [20, 30, 35, 40, 50],
    },
  ]);

  return (
    <CCard>
      <CCardBody>
      <TestCodeCom2 name="Mg Mg" age="12" address="Yangon"/>
            <TestCodeComponent name="Sara"/>
            <TestCodeComponent name="Nice"/>
            <TestCodeCom2 name="Ma Ma" age="13" address="Singapore"/>    
        <Chart options={options} series={series} type="bar" height={350}/>
      </CCardBody>
    </CCard>
  );
};

export default ApexChart;
