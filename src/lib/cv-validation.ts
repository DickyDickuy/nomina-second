// ponytail: strictly validate CV file extension, MIME type, and 4-byte magic signature
export async function validateCvFile(cv: unknown): Promise<string | null> {
  if (!cv || !(cv instanceof File) || cv.size === 0) {
    return "Please upload your CV (PDF or DOC/DOCX).";
  }

  if (cv.size > 5 * 1024 * 1024) {
    return "CV file size must not exceed 5MB.";
  }

  const lastDot = cv.name.lastIndexOf(".");
  if (lastDot === -1) {
    return "Only PDF, DOC, and DOCX files are allowed.";
  }

  const ext = cv.name.slice(lastDot + 1).toLowerCase();
  const allowedExtensions = ["pdf", "doc", "docx"];
  if (!allowedExtensions.includes(ext)) {
    return "Only PDF, DOC, and DOCX files are allowed.";
  }

  const allowedMimes: Record<string, string> = {
    pdf: "application/pdf",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    doc: "application/msword",
  };

  if (!cv.type || cv.type !== allowedMimes[ext]) {
    return "Invalid file MIME type. Please upload a PDF or DOC/DOCX document.";
  }

  const buffer = await cv.slice(0, 4).arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (ext === "pdf") {
    const isPdf = bytes.length >= 4 && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46; // %PDF
    if (!isPdf) {
      return "File content does not match a valid PDF document.";
    }
  } else if (ext === "docx") {
    const isDocx = bytes.length >= 4 && bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04; // PK\x03\x04
    if (!isDocx) {
      return "File content does not match a valid DOCX document.";
    }
  } else if (ext === "doc") {
    const isDoc = bytes.length >= 4 && bytes[0] === 0xd0 && bytes[1] === 0xcf && bytes[2] === 0x11 && bytes[3] === 0xe0; // \xD0\xCF\x11\xE0
    if (!isDoc) {
      return "File content does not match a valid DOC document.";
    }
  }

  return null;
}
