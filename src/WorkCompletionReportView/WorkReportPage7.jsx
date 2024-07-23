/* eslint-disable react/prop-types */
const WorkReportPage7 = ({ formState, handleChange, handleSubmit }) => {
  return (
    <div className="py-5 px-10 "  style={{fontSize:"20px"}}>
      <h1 className="app-main-heading-4 font-bold underline text-center">
        PART B
      </h1>
      <h1 className="app-main-heading-4 font-bold underline text-center">
        (Project Completion Report for Grid-Connected Rooftop)
      </h1>
      <h1 className="app-main-heading-4 font-bold mb-3">
        Installation Details
      </h1>
      <table className="page-table-container">
        <tbody className="w-full">
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Category of the customer:
            </td>
            <td className="app-main-heading-4 w-1/4">{formState?.category}</td>
            <td className="app-main-heading-4 w-1/4">
              Sub Category of the Customer:
            </td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.sub_category}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Name of the plant owner:
            </td>
            <td className="app-main-heading-4 w-3/4" colSpan={3}>
              {formState?.name_of_applicant}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">Mobile:</td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.customer_mobile}
            </td>
            <td className="app-main-heading-4 w-1/4">Email:</td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.customer_email}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Address of Installation:
            </td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.customer_address}
            </td>
            <td className="app-main-heading-4 w-1/4">
              PIN Code of Installation Address:
            </td>
            <td className="app-main-heading-4 w-1/4">{formState?.pincode}</td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              State of Installation Address:
            </td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.customer_state}
            </td>
            <td className="app-main-heading-4 w-1/4">
              District of Installation Address:
            </td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.customer_district}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Project Model (CAPEX/RESCO):
            </td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.pcr_project_model}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Date of Commissioning of the plant:
            </td>
            <td className="app-main-heading-4 w-1/4">
              <input
                type="text"
                value={formState?.doc_of_plant}
                onChange={handleChange}
                name="doc_of_plant"
                className="information"
              />
            </td>
            <td className="app-main-heading-4 w-1/4">
              Total Cost of Installation (Rs.):
            </td>
            <td className="app-main-heading-4 w-1/4">
              {formState?.total_cost_of_installation}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Whether installation is (Rooftop only/ Rooftop plus ground)
            </td>
            <td className="app-main-heading-4 w-3/4" colSpan={3}>
              {formState?.installation_type}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Plant Capacity (kWp) (Rooftop only)
            </td>
            <td className="app-main-heading-4 w-1/4">
              <input
                type="text"
                value={formState?.plant_capacity_r}
                onChange={handleChange}
                name="plant_capacity_r"
                className="information"
              />
            </td>
            <td className="app-main-heading-4 w-1/4">
              Plant Capacity (kWp) (Ground only)
            </td>
            <td className="app-main-heading-4 w-1/4">
              <input
                type="text"
                value={formState?.plant_capacity_g}
                onChange={handleChange}
                name="plant_capacity_g"
                className="information"
              />
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">
              Total plant capacity (kWp)
            </td>
            <td className="app-main-heading-4 w-3/4" colSpan={3}>
              <input
                type="text"
                value={formState?.total_plant_capacity}
                onChange={handleChange}
                name="total_plant_capacity"
                className="information"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="app-main-heading-4 font-bold mt-4 mb-3">
        Installed Project Latitude –Longitude Info
      </h1>
      <table className="page-table-container">
        <tbody>
          <tr>
            <td className="app-main-heading-4 w-1/2">Latitude:</td>
            <td className="app-main-heading-4 w-3/4">{formState?.latitude}</td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/4">Longitude:</td>
            <td className="app-main-heading-4 w-3/4">{formState?.langitude}</td>
          </tr>
        </tbody>
      </table>
      <h1 className="app-main-heading-4 font-bold mt-4 underline mb-3">
        Upload Documents
      </h1>
      <table className="page-table-container">
        <tbody>
          <tr>
            <td>1)</td>
            <td>
              <p className="app-main-heading-4">Photo of Installed plant</p>
              <p className="app-main-heading-4 !text-red-600 ">
                (File Format accepts only: JPG, JPEG, PNG and Maximum Size: 2Mb)
              </p>
            </td>
          </tr>
          <tr>
            <td>2)</td>
            <td>
              <p className="app-main-heading-4">Electricity DisCom Bill</p>
              <p className="app-main-heading-4 !text-red-600 ">
                (File Format accepts only: Pdf and Maximum Size: 1Mb)
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="app-main-heading-4 font-bold mt-4 text-center tracking-widest underline">
        CERTIFICATE
      </h1>
      <p className="app-main-heading-4">
        It is certified that there is no return voltage from the inverter to the
        meter when incoming gridsupply is switched off.
      </p>
      <p className="app-main-heading-4">
        It is further certified that the protective equipment is installed and
        functioning as prescribed.
      </p>
      <p className="app-main-heading-4">
        The above Solar Rooftop PV system was synchronized as per DISCOM
        guidelines and the performance of the above plant is satisfactory. The
        date of synchronization of the plant is{" "}
        <input
          className="first-image-input-field"
          name="date_of_synchronization"
          type="text"
          value={formState?.date_of_synchronization}
          onChange={handleChange}
          size="5"
        />{" "}
      </p>
      <div className="flex justify-between mt-8">
        <h1 className="app-main-heading-4 font-bold">Vendor Signature</h1>
        <h1 className="app-main-heading-4 font-bold">Eligible Consumer</h1>
        <h1 className="app-main-heading-4 font-bold">
          ADE/M&P<snap>_</snap> ADE/OP<span>_</span>
        </h1>
      </div>
      {formState?.type_report === "TSSPDCL" && (
        <div className="flex justify-center mt-8">
         
        </div>
      )}
      <h1 className="app-main-heading-4 font-bold text-center mb-3">
        Module Serial Numbers
      </h1>
      <table className="page-table-container">
        <tbody>
          <tr>
            <td className="app-main-heading-4 w-1/2 pl-1">
              Name & Address of the Beneficiary
            </td>
            <td className="app-main-heading-4 w-1/2 pl-1">
              {formState?.name_of_applicant}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/2 pl-1">Name of the Agency</td>
            <td className="app-main-heading-4 w-1/2 pl-1">
              M/S VULCAN ENERGY SYSTEMS
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/2 pl-1">Capacity of the System</td>
            <td className="app-main-heading-4 w-1/2 pl-1">
              {formState?.capacity_of_each_module}
            </td>
          </tr>
          <tr>
            <td className="app-main-heading-4 w-1/2 pl-1">Make of the modules</td>
            <td className="app-main-heading-4 w-1/2 pl-1">{formState?.make}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default WorkReportPage7;
