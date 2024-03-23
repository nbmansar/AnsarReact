import React from 'react'

const DataSection = ({ isPage, dataMapping, responseContent }) => {
  const PageComponent = dataMapping[isPage];
  return (
    <div>
      {isPage && PageComponent && <PageComponent 
      response = {responseContent}
      />} 
    </div>
  );
};


export default DataSection