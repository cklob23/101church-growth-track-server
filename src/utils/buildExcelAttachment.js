import { giftQuestionMap, giftToMinistryMap, ministryGroupsMap, ministryGroupsTasksMap } from "./mappings.js";
import ExcelJS from "exceljs";

/**
 * Generate Excel with jobs/tasks for spiritual gifts and email it
 * @param {string[]} gifts - array of spiritual gifts (e.g. ["Teaching", "Hospitality"])
 */
export async function buildExcelAttachment(gifts) {

    // 🔹 Step 1: Create Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Potential Ministry Groups Based On Your Spriritual Gifts");
    worksheet.columns = [
        { header: "Spriritual Gift", key: "gift", width: 20 },
        { header: "Ministry Group", key: "group", width: 40 },
        { header: "Task(s)", key: "task", width: 120 },
    ];

    gifts.forEach((gift) => {
        const giftCode = Object.keys(giftQuestionMap).find(
            (key) => giftQuestionMap[key] === gift
        );

        if (!giftCode) {
            worksheet.addRow({ gift, group: "❌ Not Mapped", task: "-" });
            return;
        }

        const ministryIndexes = giftToMinistryMap[giftCode] || [];

        if (ministryIndexes.length === 0) {
            worksheet.addRow({ gift, group: "No minitry groups are associated with this gift", task: "-" });
        } else {
            ministryIndexes.forEach((index) => {
                worksheet.addRow({
                    gift,
                    group: ministryGroupsMap[index],
                    task: ministryGroupsTasksMap[index] || "See Director",
                });
            });
        }
    });

    const rowCount = worksheet.rowCount;
    worksheet.addTable({
        name: "GiftsTable",
        ref: "A1",
        headerRow: true,
        totalsRow: false,
        style: {
            theme: "TableStyleMedium2",
            showRowStripes: true,
        },
        columns: [
            { name: "Spriritual Gift", filterButton: true },
            { name: "Ministry Group", filterButton: true },
            { name: "Task(s)", filterButton: true },
        ],
        rows: worksheet.getRows(2, rowCount - 1).map((r) => r.values.slice(1)),
    });

    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
        cell.font = { color: { argb: "FFFFFFFF" }, bold: true };
    });

    // Save workbook to buffer (so we don’t need a temp file)
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
}
