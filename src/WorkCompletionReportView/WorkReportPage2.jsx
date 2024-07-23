
/* eslint-disable react/prop-types */
const WorkReportPage2 = ({ formState, handleChange }) => {
  return (
    <div className="py-5 px-10 mt-44  "  style={{fontSize:"20px"}}>
      <h1 className="app-main-heading-4 font-bold text-center">ANNEXURE–III</h1>
      <h1 className="app-main-heading-4 font-bold text-center">
        Net Metering Connection Agreement
      </h1>
      <p className="app-main-heading-5 !font-medium mt-4">
        This Agreement executed and entered on this
        <span> {formState?.nmca_day}</span>
        (day) of <span>{formState?.nmca_month}</span>
        (month)
        <span> {formState?.nmca_year}</span>
        (year), between M/s / Mr. / Mrs.{" "}
        <span>{formState?.name_of_applicant} </span>
        {formState.type_report === "TSSPDCL" ? (
          <>
            S/o / D/o / W/o <span>{formState?.nmca_so_do} </span>
            which means their/ his/its /theirs, successors as FIRST PARTY herein
            after called as “Eligible Consumer” and the Southern Power
            Distribution Company of Telangana Limited, a DISCOM incorporated
            under the provisions of Companies Act 1956 (which means its
            authorized representatives assigns, executors and its successors) as
            SECOND PARTY, herein after called the “DISCOM”).
          </>
        ) : (
          <>
            which means their/ his/its /theirs, successors as FIRST PARTY herein
            after called as “Eligible Consumer” and the Northern Power
            Distribution Company of Telangana Limited, a DISCOM incorporated
            under the provisions of Companies Act 1956 (which means its
            authorized representatives assigns, executors and its successors) as
            SECOND PARTY, herein after called the “DISCOM").
          </>
        )}
      </p>
      <p className="app-main-heading-5 !font-medium">
        Whereas, the Eligible Consumer has applied to the DSICOM for approval of
        a Net Metering arrangement at
        {formState.type_report === "TSSPDCL" ? (
          <>
            Sy.No / D.No <span>{formState?.nmca_sy_no} </span>
            having electrical Service Connection No.
            <span>{formState?.nmca_connection_no} </span>
          </>
        ) : (
          <>
            <span>{formState?.nmca_arrangment} </span>
            having electrical Service Connection No.
            <span>{formState?.nmca_connection_no} </span>
            ,USC.No. <span>{formState?.nmca_usc_no} </span>
          </>
        )}
        under TSERC (Net Metering Rooftop Solar PV Grid Interactive System)
        Regulation No. 06 of 2016, dated 16.11.2016,which is effective from the
        date of its notification in the official gazette i.e., 23.11.2016.
      </p>
      <p className="app-main-heading-5 !font-medium">
        And whereas,DISCOM agrees to provide grid connectivity to the Eligible
        Consumer for injection of electricity generated from the Rooftop Solar
        PV System of capacity <span>{formState?.nmca_capacity}</span>
        kilowatts into the grid of DISCOM at
        <span>{formState?.nmca_voltage}</span>
        (Voltage level), as per conditions of this agreement.
      </p>
      <p className="app-main-heading-5 !font-medium">
        Any modification/ amendment in the Regulation made shall be applicable
        and corresponding amendment(s) shall be effective to this agreement from
        time to time
      </p>
      <p className="app-main-heading-5 !font-medium">
        Both the parties hereby agree to as follows:
      </p>
 
      <h1 className="app-main-heading-5 my-4">1. Governing Provisions</h1>
      <p className="app-main-heading-5 !font-medium pl-12">
        We hereby undertake to comply with all the requirements of the
        Electricity Act, 2003, the Rules and Regulations framed there under,
        provisions of the tariffs, applicable Charges and the General Terms and
        Conditions of Supply approved by the Telangana State Electricity
        Regulatory Commission herein after called as “Commission” from time to
        time and agree not to dispute the same.
      </p>
      <h1 className="app-main-heading-5 my-4">2. Net metering facility</h1>
      <div className="app-main-heading-5 !font-medium pl-12 flex gap-8">
        <p>i)</p>
        <p>
          Eligible Consumer will generate solar power for self consumption and
          feed excess power into the grid of DISCOM.
        </p>
      </div>
      <div className="app-main-heading-5 !font-medium pl-12 flex gap-7">
        <p>ii)</p>
        <p>
          In the premises of Eligible Consumer, a meter will be installed by
          DISCOM having the feature of recording both the import and export
          values, besides complying with other parameters notified in CEA
          metering regulations and TRANSCO/DISCOM procedures for arriving net
          energy for the billing period
        </p>
      </div>
      <h1 className="app-main-heading-5 my-4">3. Safety</h1>
      <div className="app-main-heading-5 !font-medium flex gap-8">
        <p>3.1</p>
        <p>
          The Eligible Consumer shall be responsible for safe operation,
          maintenance and rectification of defects in system up to the
          interconnection point beyond which the responsibility of safe
          operation, maintenance and rectification of any defect in the system
          including the net meter shall rest with the DISCOM
        </p>
      </div>
    </div>
  );
};
 
export default WorkReportPage2;
 
 