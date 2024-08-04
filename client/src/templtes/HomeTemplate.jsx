// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import DefaultLayout from '../components/DefaultLayout';
import Template1 from './Template1';
import Template2 from './Template2';
import {  useParams } from 'react-router-dom';
import Template3 from './Template3';

function HomeTemplate() {
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  
  const params = useParams();

  const getTemplate = () => {
    switch (params.id) {
      case '1':
        return <Template1 />;
      case '2':
        return <Template2 />;
        case '3':
          return <Template3 />;
      default:
        
        return null;
    }
  };

  return (
    <DefaultLayout handlePrint={handlePrint}>
      <div ref={componentRef}>
        {getTemplate()}
      </div>
    </DefaultLayout>
  );
}

export default HomeTemplate;
