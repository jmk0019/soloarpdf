import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import "./index.css";

import WorkReportPage1 from "./WorkReportPage1";
import WorkReportPage2 from "./WorkReportPage2";
import WorkReportPage3 from "./WorkReportPage3";
import WorkReportPage4 from "./WorkReportPage4";
import WorkReportPage5 from "./WorkReportPage5";
import WorkReportPage6 from "./WorkReportPage6";
import WorkReportPage7 from "./WorkReportPage7";
import WorkReportPage8 from "./WorkReportPage8";

const WorkCompletionPDF = () => {
  const pdfRef = useRef();
  const [formState, setFormState] = useState({
    // formState initialization remains the same
    id: 1,
    customer_id: "1",
    type_report: "TSSPDCL",
    net_meter_registration_no: "1234567890",
    registration_data: "10-07-2024",
    category: "mono",
    sub_category: "apartment_common",
    name_of_applicant: "venu koratla",
    customer_mobile: "7093420691",
    customer_email: "kvenu7093420691@gmail.com",
    customer_address: "4-32, sc colony, mudigonda",
    customer_state: "TELANGANA",
    customer_district: "PALWANCHA",
    service_number: "12356489",
    load_in_kw: "12",
    make: "tata",
    type_of_module: "wired",
    capacity_of_each_module: "3",
    no_of_module: "10",
    total_capacity: "17",
    grid_make: "adani",
    grid_serial_number: "1234567890",
    grid_capacity: "7",
    grid_input_voltage: "23",
    output_voltage: "56",
    grid_return: "Yes",
    detail_of_protect_system: "SPB, MCB ,FUSES, Lightning arrastor",
    ceig_ref_num: "1234567890",
    nmca_day: "02",
    nmca_month: "06",
    nmca_year: "2024",
    nmca_name: "venu",
    nmca_so_do: "srinu",
    nmca_sy_no: "1234567",
    nmca_arrangment: "",
    nmca_connection_no: "1234567",
    nmca_usc_no: "",
    nmca_capacity: "8",
    nmca_voltage: "18",
    distribution: "dasolfwetter",
    polenumber: "67",
    old_meter_make: "tata",
    old_meter_sno: "1234567",
    old_meter_capacity: "9",
    old_meter_mf: "23",
    old_meter_final_reading: "45",
    old_meter_kwh: "46",
    old_meter_kvah: "23",
    pincode: "507115",
    old_meter_dor: "12-06-2024",
    new_meter_make: "adani",
    new_meter_sno: "1234567890",
    new_meter_capacity: "6",
    new_meter_constant: "67",
    new_meter_initial_reading: "25",
    import_kwh: "5",
    import_kvah: "5",
    export_kwh: "5",
    export_kvah: "8",
    nmcs_details: "No",
    pcr_project_model: "CAPEX",
    doc_of_plant: "12-06-2024",
    total_cost_of_installation: "422000",
    installation_type: "Rooftop plus ground",
    plant_capacity_r: "6",
    plant_capacity_g: "6",
    total_plant_capacity: "5",
    langitude: "78.4872595",
    latitude: "17.3697939",
    date_of_synchronization: "",
    created_at: "2024-07-11T06:46:28.000Z",
    updated_at: "2024-07-11T06:46:28.000Z",
    serial_numbers: [
      { serial_number: "1", capacity: "100" },
      { serial_number: "2", capacity: "100" },
      { serial_number: "3", capacity: "100" },
      { serial_number: "4", capacity: "100" },
      { serial_number: "5", capacity: "100" },
      { serial_number: "6", capacity: "100" },
      { serial_number: "7", capacity: "100" },
      { serial_number: "8", capacity: "100" },
      { serial_number: "9", capacity: "100" },
      { serial_number: "10", capacity: "100" },
      { serial_number: "11", capacity: "100" },
      { serial_number: "12", capacity: "100" },
      { serial_number: "13", capacity: "100" },
      { serial_number: "14", capacity: "100" },
      { serial_number: "15", capacity: "100" },
      { serial_number: "16", capacity: "100" },
      { serial_number: "17", capacity: "100" },
      { serial_number: "18", capacity: "100" },
      { serial_number: "19", capacity: "100" },
      { serial_number: "20", capacity: "100" },
      { serial_number: "21", capacity: "100" },
      { serial_number: "22", capacity: "100" },
      { serial_number: "23", capacity: "100" },
      { serial_number: "24", capacity: "100" },
      { serial_number: "25", capacity: "100" },
      { serial_number: "26", capacity: "100" },
      { serial_number: "27", capacity: "100" },
      { serial_number: "28", capacity: "100" },
      { serial_number: "29", capacity: "100" },
      { serial_number: "30", capacity: "100" },
      { serial_number: "31", capacity: "100" },
      { serial_number: "32", capacity: "100" },
      { serial_number: "33", capacity: "100" },
      { serial_number: "34", capacity: "100" },
      { serial_number: "35", capacity: "100" },
      { serial_number: "36", capacity: "100" },
      { serial_number: "37", capacity: "100" },
      { serial_number: "38", capacity: "100" },
      { serial_number: "39", capacity: "100" },
      { serial_number: "40", capacity: "100" },
      { serial_number: "41", capacity: "100" },
      { serial_number: "42", capacity: "100" },
      { serial_number: "43", capacity: "100" },
      { serial_number: "44", capacity: "100" },
      { serial_number: "45", capacity: "100" },
      { serial_number: "46", capacity: "100" },
      { serial_number: "47", capacity: "100" },
      { serial_number: "48", capacity: "100" },
      { serial_number: "49", capacity: "100" },
      { serial_number: "50", capacity: "100" },
      { serial_number: "51", capacity: "100" },
      { serial_number: "52", capacity: "100" },
      { serial_number: "53", capacity: "100" },
      { serial_number: "54", capacity: "100" },
      { serial_number: "55", capacity: "100" },
      { serial_number: "56", capacity: "100" },
      { serial_number: "57", capacity: "100" },
      { serial_number: "58", capacity: "100" },
      { serial_number: "59", capacity: "100" },
      { serial_number: "60", capacity: "100" },
    ],
  });

  const generatePDF = async () => {
    const input = pdfRef.current;
    const pdf = new jsPDF("p", "mm", "a4");
    const margin = 10; // Setting the margin to 30px
    const pageHeight = pdf.internal.pageSize.height - 2 * margin;
    const pageWidth = pdf.internal.pageSize.width - 2 * margin;
    let position = margin;

    for (let page of input.children) {
      if (page.id === "WorkReportPage8") {
        const table = page.querySelector("table");
        if (table) {
          pdf.autoTable({
            html: table,
            startY: position,
            margin: { left: margin, right: margin },
          });

          const currentY = pdf.autoTable.previous.finalY + 10;
          pdf.setFontSize(10);
          pdf.text("Signature of the Implementing Agency", margin, currentY);
          pdf.text("Signature of beneficiary", pageWidth - margin, currentY, { align: "right" });
        }
      } else {
        const canvas = await html2canvas(page);
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (imgHeight <= pageHeight) {
          pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        } else {
          let remainingHeight = imgHeight;
          let y = 0;

          while (remainingHeight > 0) {
            if (y > 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", margin, position - y, imgWidth, imgHeight);
            y += pageHeight;
            remainingHeight -= pageHeight;
          }
        }

        if (page !== input.children[input.children.length - 1]) {
          pdf.addPage();
          position = margin;
        }
      }
    }

    pdf.save(`work-report-${new Date().toISOString()}.pdf`);
  };

  return (
    <div className="container">
      <div ref={pdfRef}>
        <WorkReportPage1 formState={formState} />
        <WorkReportPage2 formState={formState} />
        <WorkReportPage3 formState={formState} />
        <WorkReportPage4 formState={formState} />
        <WorkReportPage5 formState={formState} />
        <WorkReportPage6 formState={formState} />
        <WorkReportPage7 formState={formState} />
        <WorkReportPage8 formState={formState} />
      </div>
      <button onClick={generatePDF} className="custom-button">Download PDF</button>
    </div>
  );
};

export default WorkCompletionPDF;

// index.css remains the same
