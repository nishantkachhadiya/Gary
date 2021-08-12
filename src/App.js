
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/css/style.css';
import '../src/assets/css/new_style.css';
import '../src/assets/css/responsive.css';



//Main Directory Component
import Header from '../src/Component/Header'
import Siderbar from '../src/Component/Siderbar'
import Appcontent from '../src/Component/Appcontent'

//Batch1 Directory Component
import Home_batch_1 from './Component/batch-1/Homebatch1'
import Assessments from './Component/batch-1/Assessmentsbatch1'


import routes from './Routes';

function App(props) {
  return (
    <>
        <Header />
        <Siderbar />
        <Appcontent />
    </>
  );
}

export default App;
