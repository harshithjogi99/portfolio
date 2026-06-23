import pypdf
import json

try:
    reader = pypdf.PdfReader('jogiresume.pdf')
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

    with open('resume_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)

    print("SUCCESS")
except Exception as e:
    print("ERROR:", e)
