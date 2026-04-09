import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // autoTable ko direct import karein

export const exportSalesPDF = (salesData) => {
    const doc = new jsPDF();

    // Header - Title
    doc.setFontSize(20);
    doc.setTextColor(79, 70, 229);
    doc.text("Financial Insights Report", 14, 22);

    // Subheader - Date
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

    // Summary Table
    const summaryData = [
        ["Total Revenue", `$${salesData.totalRevenue}`],
        ["Avg. Order Value", `$${salesData.avgOrderValue}`],
        ["Total Items Sold", salesData.itemsSold]
    ];

    // doc.autoTable ki jagah direct autoTable function use karein
    autoTable(doc, {
        startY: 50,
        head: [["Metric", "Value"]],
        body: summaryData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
    });

    // Top Products Table
    doc.setFontSize(12);
    doc.setTextColor(0);
    // doc.lastAutoTable.finalY use karein next table ki position ke liye
    const finalY = doc.lastAutoTable.finalY;
    doc.text("Top Selling Products:", 14, finalY + 15);

    const productRows = salesData.products.map(p => [
        p.name,
        p.sales,
        p.revenue
    ]);

    autoTable(doc, {
        startY: finalY + 20,
        head: [["Product Name", "Sales Count", "Revenue"]],
        body: productRows,
        headStyles: { fillColor: [30, 41, 59] },
    });

    // Save the PDF
    doc.save(`Sales_Report_${Date.now()}.pdf`);
};