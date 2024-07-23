import React from "react";

const WorkReportPage8 = ({ formState }) => {
  return (
    <div id="WorkReportPage8"style={{fontSize:"20px"}}>
      {/* Your table and other content */}
      <table className="page-table-container">
        <thead>
          <tr>
            <th className="app-main-heading-4 w-12 text-center">S.No</th>
            <th className="app-main-heading-4 column-4">
              Module Serial Numbers
            </th>
            <th className="app-main-heading-4 column-2">Capacity in(WP)</th>
          </tr>
        </thead>
        <tbody>
          {formState.serial_numbers?.map((el) => (
            <tr key={el.id}>
              <td className="app-main-heading-4 w-12 text-center">{el.id}</td>
              <td className="app-main-heading-4 column-4">
                {el.serial_number}
              </td>
              <td className="app-main-heading-4 column-2">{el.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="app-main-heading-4  text-xl">
          Signature of the Implementing Agency
        </h1>
        <h1 className="app-main-heading-4  text-xl ">
          Signature of beneficiary
        </h1>
      </div>
    </div>
  );
};

export default WorkReportPage8;
