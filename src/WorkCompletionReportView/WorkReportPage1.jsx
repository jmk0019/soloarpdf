import React from "react";

const WorkReportPage1 = ({
  formState,
  handleChange,
}) => {
  return (
    <div className="py-5 px-10 " style={{fontSize:"20px"}}>
      <div>
        <h1 className="app-main-heading-4 font-bold underline text-center">
          ANNEXURE–IV
        </h1>
        <h1 className="app-main-heading-4 font-bold underline text-center">
          Work Completion Report for Synchronization of Rooftop Solar PV System
          (To be submitted by Eligible Consumer/Applicant)
        </h1>
        <div className="page-table-container mt-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <th className="app-main-heading-4 font-bold text-center w-8">A</th>
                <th className="app-main-heading-4 font-bold text-left w-1/2">
                  Applicant/Consumer Details
                </th>
                <th className="w-1/2"></th>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4">Net Meter Registration Number</td>
                <td className="app-para-heading-4">{formState?.net_meter_registration_no}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4">Registration Date</td>
                <td className="app-para-heading-4">{formState?.registration_data}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4">Name of the applicant</td>
                <td className="app-para-heading-4">{formState?.name_of_applicant}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4">Service Number</td>
                <td>
                  <input
                    type="text"
                    value={formState?.service_number || ''}
                    onChange={handleChange}
                    name="service_number"
                    className="information"
                  />
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">5</td>
                <td className="app-para-heading-4">Category</td>
                <td className="app-para-heading-4">{formState?.category}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">6</td>
                <td className="app-para-heading-4">Load in kW</td>
                <td className="app-para-heading-4">{formState?.load_in_kw}</td>
              </tr>
              <tr>
                <th className="app-main-heading-4 font-bold w-8 text-center">B</th>
                <td className="app-main-heading-4 font-bold">
                  Vendor of the Rooftop Solar PV System Details:
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4">Name of Vendor</td>
                <td className="app-para-heading-4">VULCAN ENERGY SYSTEMS</td>
              </tr>
              <tr>
                <th></th>
                <td className="app-main-heading-4 font-bold">Address:</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4">Door.No:</td>
                <td className="app-para-heading-4">E-6</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4">Street</td>
                <td className="app-para-heading-4">VIKRAMPURI</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4">City/Village</td>
                <td className="app-para-heading-4">KARKHANA</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">5</td>
                <td className="app-para-heading-4">Mandal</td>
                <td className="app-para-heading-4">SECUNDERABAD</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">6</td>
                <td className="app-para-heading-4">Pin Code</td>
                <td className="app-para-heading-4">500015</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">7</td>
                <td className="app-para-heading-4">Phone</td>
                <td className="app-para-heading-4">9030033504</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">8</td>
                <td className="app-para-heading-4">Mobile</td>
                <td className="app-para-heading-4">9030033577</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">9</td>
                <td className="app-para-heading-4">Email ID</td>
                <td className="app-para-heading-4">sales@vulcansolar.in</td>
              </tr>
              <tr>
                <th className="app-main-heading-4 font-bold w-8 text-center">C</th>
                <td className="app-main-heading-4 font-bold">
                  Solar PV Module Details:
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4">Make</td>
                <td>{formState?.make}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4">Serial Numbers</td>
                <td className="flex overflow-x-hidden w-[22rem]">
                  <div className="information">
                    <div className="flex">
                      {formState.serial_numbers?.map((sn) => (
                        <span key={sn.id} className="flex items-center w-full mb-1">
                          {sn.serial_number},
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4">Type of module</td>
                <td className="app-para-heading-4">{formState?.type_of_module}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4">Capacity of each module</td>
                <td className="app-para-heading-4">{formState?.capacity_of_each_module}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">5</td>
                <td className="app-para-heading-4">No. of modules</td>
                <td className="app-para-heading-4">{formState?.no_of_module}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">6</td>
                <td className="app-para-heading-4">Total capacity of system</td>
                <td className="app-para-heading-4">{formState?.total_capacity}</td>
              </tr>
              <tr>
                <th className="app-main-heading-4 font-bold w-8 text-center">D</th>
                <td className="app-main-heading-4 font-bold">
                  Grid Tie Inverter / Connected:
                </td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">1</td>
                <td className="app-para-heading-4">Make</td>
                <td className="app-para-heading-4">{formState?.inverter_make}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">2</td>
                <td className="app-para-heading-4">Type</td>
                <td className="app-para-heading-4">{formState?.inverter_type}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">3</td>
                <td className="app-para-heading-4">Capacity</td>
                <td className="app-para-heading-4">{formState?.inverter_capacity}</td>
              </tr>
              <tr>
                <td className="app-para-heading-4 w-8 text-center">4</td>
                <td className="app-para-heading-4">Serial Number</td>
                <td className="app-para-heading-4">{formState?.inverter_serial_number}</td>
              </tr>
              <tr>
                <th className="app-main-heading-4 font-bold w-8 text-center">E</th>
                <td className="app-main-heading-4 flex flex-col border-none">
                  <span>Details of protective system available</span>
                  <span>(Commission shall be done only on availability of the above)</span>
                </td>
                <td className="app-para-heading-4">
                  {formState?.detail_of_protect_system || "SPB, MCB, FUSES"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          <h1 className="app-main-heading-4">Encl.:- Connected SPV generator Single line diagram</h1>
          <h1 className="app-main-heading-4">CEIG Approval copy</h1>
        </div>
        <div className="flex justify-between mt-8">
          <h1 className="app-main-heading-4">Vendor Signature(with Stamp)</h1>
          <h1 className="app-main-heading-4">Eligible Consumer Signature</h1>
        </div>
      </div>
    </div>
  );
};

export default WorkReportPage1;
