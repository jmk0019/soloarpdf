/* eslint-disable react/prop-types */

const WorkReportPage6 = ({ formState, handleChange }) => {
  return (
    <div className="py-5 px-10 " style={{fontSize:"20px"}} >
      <div>
        <h1 className="app-main-heading-4 font-bold underline text-center">
          ANNEXURE–V(b)
        </h1>
        <h1 className="app-main-heading-4 font-bold underline text-center">
          LT NET METER Solar Rooftop PV system Synchronization Report /Test
          Report
        </h1>
        <div className="page-table-container mt-8">
          <table className="page-table">
            <tbody>
              <tr>
                <td className="app-main-heading-4 font-bold w-8 text-center">
                  A
                </td>
                <td className="app-main-heading-4 font-bold w-1/2">
                  Applicant Details
                </td>
                <td className="app-main-heading-4 font-bold w-1/2"></td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4 ">
                  Net Meter Registration Number
                </td>
                <td className="app-para-heading-4">
                  {formState?.net_meter_registration_no}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4 column-1">
                  Registration Date
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.registration_data}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4 column-1">
                  Name of the applicant
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.name_of_applicant}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4 column-1">Service Number</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.service_number}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">5</td>
                <td className="app-para-heading-4 column-1">Category</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.category}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">6</td>
                <td className="app-para-heading-4 column-1">Load in kW</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.load_in_kw}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">7</td>
                <td className="app-para-heading-4 column-1">
                  Distribution/Section
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.distribution}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">8</td>
                <td className="app-para-heading-4 column-1">Pole number</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.polenumber}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">9</td>
                <td className="app-para-heading-4 column-1">Address</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.customer_address}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">10</td>
                <td className="app-para-heading-4 column-1">Mobile No</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.customer_mobile}
                </td>
              </tr>
              <tr>
                <td className="app-main-heading-4 font-bold w-8 text-center">
                  B
                </td>
                <td className="app-main-heading-4 font-bold column-2">
                  Old Meter Details
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4 column-1">Meter make</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_make}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4 column-1">Serial number</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_sno}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4 column-1">Capacity</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_capacity}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4 column-1">MF</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_mf}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">5</td>
                <td className="app-para-heading-4 column-1">Final reading</td>
                <td className="app-para-heading-4 column-1"></td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center"></td>
                <td className="app-para-heading-4 column-1">i) kWh</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_kwh}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center"></td>
                <td className="app-para-heading-4 column-1">ii) kVAh</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_kvah}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">6</td>
                <td className="app-para-heading-4 column-1">
                  Date of replacement
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.old_meter_dor}
                </td>
              </tr>
              <tr>
                <td className="app-main-heading-4 font-bold w-8 text-center">
                  C
                </td>
                <td className="app-main-heading-4 font-bold column-2">
                  New Meter Details
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4 column-1">Meter make</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.new_meter_make}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4 column-1">Serial number</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.new_meter_sno}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4 column-1">Capacity</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.new_meter_capacity}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4 column-1">Meter Constant</td>
                <td className="app-para-heading-4 column-1">
                  {formState?.new_meter_constant}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">5</td>
                <td className="app-para-heading-4 column-1">
                  Initial reading (Tri Vector Parameters)
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.new_meter_initial_reading}
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center"></td>
                <td className="app-para-heading-4 column-1">
                  i) Import (kWh/kVAh)
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.import_kwh}
                  kWh, {formState?.import_kvah}
                  kVAh
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center"></td>
                <td className="app-para-heading-4 column-1">
                  ii) Export (kWh/kVAh)
                </td>
                <td className="app-para-heading-4 column-1">
                  {formState?.export_kwh}
                  kWh,
                  {formState?.export_kvah}
                  kVAh
                </td>
              </tr>
              <tr>
                <td className="app-main-heading-4 font-bold w-8 text-center">
                  D
                </td>
                <td className="app-main-heading-4 font-bold column-2">
                  <span>Details of protective system available</span>
                  <span>
                    (Commissioning shall be done only on availability of the
                    protective equipment)
                  </span>
                </td>

                <td className="app-main-heading-4">
                  {formState?.nmcs_details}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkReportPage6;
