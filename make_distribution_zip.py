"""
의견수렴_팀별/ 폴더를 zip 으로 묶기 (배포용)
"""
import os, zipfile
from datetime import datetime

SRC = r'c:\20260421_ideamoa\의견수렴_팀별'
DST = r'c:\20260421_ideamoa\KOCOM_CS_의견수집_배포용.zip'

# 임시 락파일 제외
def should_skip(fn):
    return fn.startswith('~$') or fn.endswith('.tmp')

with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
    # zip 안의 루트 폴더 이름
    root_in_zip = 'KOCOM_CS_의견수집'
    added = 0
    for fn in sorted(os.listdir(SRC)):
        if should_skip(fn): continue
        fp = os.path.join(SRC, fn)
        if not os.path.isfile(fp): continue
        arcname = os.path.join(root_in_zip, fn)
        zf.write(fp, arcname)
        added += 1
        try:
            print(f'  + {fn}')
        except UnicodeEncodeError:
            print(f'  + (file {added})')

sz_kb = os.path.getsize(DST) / 1024
try:
    print(f'\n완료: {DST}')
    print(f'  파일 수: {added}개')
    print(f'  크기: {sz_kb:.1f} KB')
except UnicodeEncodeError:
    print(f'\nDone: {added} files, {sz_kb:.1f} KB')
