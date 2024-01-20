# Tarjeta1

const sheetName = 'Sheet1'; // Asegúrate de que este nombre coincida con el nombre de tu hoja en Google Sheets
const scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
    const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
        const sheet = doc.getSheetByName(sheetName);

        // Asegúrate de que el orden de los valores coincida con el orden de tus columnas en Google Sheets
        const nextRow = sheet.getLastRow() + 1;
        const newRow = [new Date(), e.parameter.names,e.parameter.Apellidos, e.parameter.phone, e.parameter.email, e.parameter.mensaje];
        
        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    finally {
        lock.releaseLock();
    }
}
